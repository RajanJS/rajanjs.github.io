# AdSense Verification Checklist - "Getting Ready" Phase

Your site is in the **"Getting ready"** review phase. Use this checklist to verify everything is set up correctly and compliant.

---

## 🔍 Quick Verification Steps

### 1. Technical Setup Verification

#### ✅ AdSense Code Verification
- [ ] **Check AdSense Script is Loading**
  - Visit: `https://mrajan.com.np/` (any page)
  - Right-click → View Page Source
  - Search for: `adsbygoogle`
  - **Expected**: Should find `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4166647782860352"`
  - **Test on multiple pages**: Homepage, About, Blog posts

#### ✅ ads.txt File Verification
- [ ] **Check ads.txt is Accessible**
  - Visit: `https://mrajan.com.np/ads.txt`
  - **Expected Content**: 
    ```
    google.com, pub-4166647782860352, DIRECT, f08c47fec0942fa0
    ```
  - **Status Check**: Should return HTTP 200 (not 404)
  - **Verification Tool**: Use [ads.txt Tester](https://adstxt.guru/)

#### ✅ Domain Verification
- [ ] **Custom Domain Working**
  - Site accessible at: `https://mrajan.com.np`
  - HTTPS enabled (green padlock in browser)
  - No SSL certificate errors
  - CNAME file configured correctly

#### ✅ Site Accessibility
- [ ] **Site is Publicly Accessible**
  - No login required
  - No password protection
  - No IP restrictions
  - Works from different locations/networks

---

## 📋 Content & Policy Compliance

### 2. Required Pages Verification

#### ✅ Privacy Policy
- [ ] **Privacy Policy Exists**
  - URL: `https://mrajan.com.np/privacy-policy/`
  - **Check for**:
    - Mentions Google AdSense ✓
    - Mentions Google Analytics ✓
    - Mentions cookies/tracking ✓
    - Contact information ✓
    - Last updated date ✓

#### ✅ Terms of Service
- [ ] **Terms of Service Exists**
  - URL: `https://mrajan.com.np/terms-of-service/`
  - **Check for**:
    - Basic usage terms
    - Contact information
    - Last updated date

#### ✅ Footer Links
- [ ] **Legal Pages Accessible**
  - Footer contains Privacy Policy link
  - Footer contains Terms of Service link
  - Links work and are visible on all pages
  - Check: Homepage, About, Blog posts

#### ✅ About/Contact Page
- [ ] **Contact Information Available**
  - URL: `https://mrajan.com.np/aboutme/`
  - Contains: Email, social links, author info
  - Professional presentation

---

## 📝 Content Quality Check

### 3. Content Requirements

#### ✅ Sufficient Content
- [ ] **Blog Posts Available**
  - Currently: 7 posts (2016-2023)
  - All posts have substantial content (300+ words)
  - Quality, original content (not copied)
  - Professional writing style

#### ✅ Content Policies
- [ ] **No Prohibited Content**
  - ✓ No adult content
  - ✓ No violence or hate speech
  - ✓ No copyrighted material without permission
  - ✓ No illegal content
  - ✓ No deceptive practices

#### ✅ Site Structure
- [ ] **Clear Navigation**
  - Menu is easy to understand
  - Pages are well-organized
  - Clear site purpose

---

## 🔧 Technical Compliance

### 4. Site Performance & Accessibility

#### ✅ Mobile-Friendly
- [ ] **Responsive Design**
  - Test on mobile device or Chrome DevTools
  - Site looks good on mobile
  - Navigation works on mobile
  - Text is readable
  - No horizontal scrolling issues

#### ✅ Site Speed
- [ ] **Performance Check**
  - Use [PageSpeed Insights](https://pagespeed.web.dev/)
  - URL: `https://mrajan.com.np`
  - **Target**: Score 50+ (better is 70+)
  - Fix critical issues if any

#### ✅ Browser Compatibility
- [ ] **Works Across Browsers**
  - Test in Chrome, Firefox, Safari, Edge
  - No major layout issues
  - JavaScript works correctly

---

## 🚫 Critical Don'ts During Review

### 5. Things to Avoid

- [ ] **DO NOT click your own ads** - Violates policy, will get banned
- [ ] **DO NOT ask friends to click ads** - Invalid traffic
- [ ] **DO NOT use click bots** - Immediate ban
- [ ] **DO NOT change AdSense code frequently** - Wait for review completion
- [ ] **DO NOT remove required pages** - Privacy Policy, etc.
- [ ] **DO NOT add prohibited content** - Wait until approved
- [ ] **DO NOT disable ads.txt** - Must remain accessible

---

## 📊 Monitoring During Review

### 6. What to Check Daily

#### AdSense Dashboard
- [ ] **Check Status Updates**
  - Log in daily to AdSense dashboard
  - Look for status changes or messages
  - Check for any policy warnings

#### Site Status
- [ ] **Verify Site is Live**
  - Check site is accessible
  - ads.txt still works
  - AdSense script still loads
  - No broken pages

#### Google Search Console
- [ ] **Monitor Site Health**
  - Check for crawl errors
  - Verify site is indexed
  - No manual actions

---

## 🔍 Detailed Verification Commands

### Test AdSense Script Loading

```bash
# Test if AdSense script is on homepage
curl -s https://mrajan.com.np/ | grep -i "adsbygoogle"

# Test if ads.txt is accessible
curl -I https://mrajan.com.np/ads.txt

# Check multiple pages
curl -s https://mrajan.com.np/aboutme/ | grep -i "adsbygoogle"
curl -s https://mrajan.com.np/posts/2023-07-11-ssg-vs-ssr/ | grep -i "adsbygoogle"
```

### Browser Console Check

1. Open any page on your site
2. Press F12 (Developer Tools)
3. Go to Network tab
4. Filter: "adsbygoogle"
5. Reload page
6. **Expected**: Should see request to `adsbygoogle.js`

---

## 📈 Expected Timeline

### What Happens During "Getting Ready"

**Days 1-3:**
- Google crawls your site
- Verifies ads.txt
- Checks technical setup
- Reviews content quality

**Days 4-7:**
- Policy compliance review
- Content evaluation
- Site structure analysis

**Days 8-14 (or up to 4 weeks):**
- Final review
- Decision made
- Status updates to "Approved" or needs changes

**Common Delays:**
- If site is new (< 6 months old)
- If traffic is very low
- If content is borderline
- Holiday periods

---

## ✅ Pre-Approval Checklist Summary

Before AdSense approves, ensure:

### Technical ✓
- [x] AdSense code installed on all pages
- [x] ads.txt file accessible at root
- [x] Domain verified in AdSense
- [x] HTTPS enabled
- [x] Site publicly accessible

### Legal ✓
- [x] Privacy Policy with AdSense disclosure
- [x] Terms of Service page
- [x] Footer links to legal pages
- [x] Contact information available

### Content ✓
- [x] Original, quality content
- [x] Sufficient content (7+ posts)
- [x] No prohibited content
- [x] Professional presentation

### User Experience ✓
- [x] Mobile-friendly design
- [x] Clear navigation
- [x] Fast loading times
- [x] Good user experience

---

## 🚨 Red Flags to Fix Immediately

If you see any of these, fix them ASAP:

1. **ads.txt returns 404** → Fix immediately
2. **AdSense code missing** → Check head.html
3. **Privacy Policy missing** → Create immediately
4. **Site password protected** → Remove protection
5. **Invalid traffic warnings** → Stop immediately
6. **Policy violations** → Fix content immediately

---

## 📞 Support Resources

### If Issues Arise

1. **AdSense Help Center**
   - https://support.google.com/adsense
   - Search for specific issues

2. **AdSense Community Forum**
   - https://support.google.com/adsense/community
   - Ask questions, get help

3. **Google Search Console**
   - Monitor site health
   - Check indexing status

---

## 🎯 Final Verification Steps

Run these checks right before checking approval status:

```bash
# 1. Verify ads.txt
curl https://mrajan.com.np/ads.txt

# 2. Verify AdSense script
curl -s https://mrajan.com.np/ | grep adsbygoogle

# 3. Verify Privacy Policy
curl -I https://mrajan.com.np/privacy-policy/

# 4. Check site accessibility
curl -I https://mrajan.com.np/
```

---

## 📝 What to Do While Waiting

1. **Keep site active**
   - Don't make major changes
   - Keep content fresh (optional)
   - Monitor site status

2. **Don't stress**
   - 2-4 weeks is normal
   - Most sites get approved
   - Be patient

3. **Monitor dashboard**
   - Check daily for updates
   - Respond to any requests
   - Don't click your own ads!

---

## ✅ Status: Ready for Review

Based on your setup:

- ✅ AdSense code installed
- ✅ ads.txt configured
- ✅ Privacy Policy with disclosures
- ✅ Terms of Service
- ✅ Footer links
- ✅ Quality content
- ✅ Mobile-friendly
- ✅ HTTPS enabled

**Your site appears to meet all requirements!**

---

**Last Updated**: {{ site.time | date: "%B %d, %Y" }}

*Check off items as you verify them. Keep this checklist handy during the review period.*

