// Dean Attali / Beautiful Jekyll 2023

let BeautifulJekyllJS = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    setTimeout(BeautifulJekyllJS.initNavbar, 10);
    
    // Check avatar overlap for navbar
    setTimeout(function() {
      BeautifulJekyllJS.checkAvatarOverlap();
    }, 50);

    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
        } else {
            $(".navbar").removeClass("top-nav-short");
        }
        BeautifulJekyllJS.checkAvatarOverlap();
    });

    // Recalculate on window resize (with debounce for performance)
    let resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        BeautifulJekyllJS.checkAvatarOverlap();
      }, 100);
    });

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
      BeautifulJekyllJS.checkAvatarOverlap();
    });

    // show the big header image
    BeautifulJekyllJS.initImgs();

    BeautifulJekyllJS.initSearch();
  },

  initNavbar : function() {
    // Set the navbar-dark/light class based on its background color
    const rgb = $('.navbar').css("background-color").replace(/[^\d,]/g,'').split(",");
    const brightness = Math.round(( // http://www.w3.org/TR/AERT#color-contrast
      parseInt(rgb[0]) * 299 +
      parseInt(rgb[1]) * 587 +
      parseInt(rgb[2]) * 114
    ) / 1000);
    if (brightness <= 125) {
      $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
    } else {
      $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
    }
  },


  checkAvatarOverlap : function() {
    const navbar = $('.navbar-custom');
    const avatarContainer = navbar.find('.avatar-container');
    const navbarCollapse = navbar.find('.navbar-collapse');
    const navbarToggler = navbar.find('.navbar-toggler');
    
    if (navbarCollapse.length === 0 || navbarToggler.length === 0) return;

    const windowWidth = $(window).width();
    
    // On small screens (< 1200px), let Bootstrap handle responsive behavior
    if (windowWidth < 1200) {
      // Remove force classes to let Bootstrap handle it
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
      return;
    }

    // On large screens (>= 1200px), check for avatar overlap
    if (avatarContainer.length === 0) {
      // No avatar, restore Bootstrap default behavior
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
      return;
    }

    // Check if avatar is visible
    const isAvatarVisible = avatarContainer.is(':visible') && 
                           avatarContainer.css('opacity') !== '0' && 
                           avatarContainer.css('visibility') !== 'hidden';

    if (!isAvatarVisible) {
      // Avatar not visible, restore Bootstrap default behavior
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
      return;
    }

    // Get avatar dimensions and position
    const avatarOffset = avatarContainer.offset();
    const avatarWidth = avatarContainer.outerWidth(false);
    const avatarRight = avatarOffset.left + avatarWidth;

    // Get first nav link position on the right side
    const rightNavLinks = navbar.find('.navbar-nav.ml-auto');
    if (rightNavLinks.length === 0) {
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
      return;
    }
    
    const firstNavLink = rightNavLinks.find('.nav-link').first();
    if (firstNavLink.length === 0) {
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
      return;
    }
    
    const navLinkOffset = firstNavLink.offset();
    if (!navLinkOffset) {
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
      return;
    }
    
    const navLinkLeft = navLinkOffset.left;

    // Check for overlap with buffer
    const overlapBuffer = 20;
    const hasOverlap = navLinkLeft < (avatarRight + overlapBuffer);

    if (hasOverlap) {
      // Hide nav links, show toggler
      navbarCollapse.addClass('force-hide');
      navbarToggler.addClass('force-show');
    } else {
      // Show nav links, hide toggler
      navbarCollapse.removeClass('force-hide');
      navbarToggler.removeClass('force-show');
    }
  },

  initImgs : function() {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      BeautifulJekyllJS.bigImgEl = $("#header-big-imgs");
      BeautifulJekyllJS.numImgs = BeautifulJekyllJS.bigImgEl.attr("data-num-img");

      // 2fc73a3a967e97599c9763d05e564189
      // set an initial image
      const imgInfo = BeautifulJekyllJS.getImgInfo();
      const src = imgInfo.src;
      const desc = imgInfo.desc;
      BeautifulJekyllJS.setImg(src, desc);

      // For better UX, prefetch the next image so that it will already be loaded when we want to show it
      const getNextImg = function() {
        const imgInfo = BeautifulJekyllJS.getImgInfo();
        const src = imgInfo.src;
        const desc = imgInfo.desc;

        const prefetchImg = new Image();
        prefetchImg.src = src;
        // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

        setTimeout(function(){
          const img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
          $(".intro-header.big-img").prepend(img);
          setTimeout(function(){ img.css("opacity", "1"); }, 50);

          // after the animation of fading in the new image is done, prefetch the next one
          //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          setTimeout(function() {
            BeautifulJekyllJS.setImg(src, desc);
            img.remove();
            getNextImg();
          }, 1000);
          //});
        }, 6000);
      };

      // If there are multiple images, cycle through them
      if (BeautifulJekyllJS.numImgs > 1) {
        getNextImg();
      }
    }
  },

  getImgInfo : function() {
    const randNum = Math.floor((Math.random() * BeautifulJekyllJS.numImgs) + 1);
    const src = BeautifulJekyllJS.bigImgEl.attr("data-img-src-" + randNum);
    const desc = BeautifulJekyllJS.bigImgEl.attr("data-img-desc-" + randNum);

    return {
      src : src,
      desc : desc
    }
  },

  setImg : function(src, desc) {
    $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
    if (typeof desc !== typeof undefined && desc !== false) {
      $(".img-desc").text(desc).show();
    } else {
      $(".img-desc").hide();
    }
  },

  initSearch : function() {
    if (!document.getElementById("beautifuljekyll-search-overlay")) {
      return;
    }

    $("#nav-search-link").click(function(e) {
      e.preventDefault();
      $("#beautifuljekyll-search-overlay").show();
      $("#nav-search-input").focus().select();
      $("body").addClass("overflow-hidden");
    });
    $("#nav-search-exit").click(function(e) {
      e.preventDefault();
      $("#beautifuljekyll-search-overlay").hide();
      $("body").removeClass("overflow-hidden");
    });
    $(document).on('keyup', function(e) {
      if (e.key == "Escape") {
        $("#beautifuljekyll-search-overlay").hide();
        $("body").removeClass("overflow-hidden");
      }
    });
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', BeautifulJekyllJS.init);
