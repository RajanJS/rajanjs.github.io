# AdSense Testing Guide for mrajan.com.np

## Current Setup
✅ AdSense is configured to load **ONLY on blog post pages** (pages with `layout: post`)
- ✅ Blog posts: AdSense enabled
- ❌ Main pages (home, about, portfolio): AdSense disabled
- ❌ mgpc-stream: AdSense disabled

## Domain: mrajan.com.np

## Step 1: Verify Domain in AdSense

1. **Go to AdSense Dashboard**
   - Visit https://www.google.com/adsense/
   - Navigate to **Sites** → **Add site**

2. **Add Your Domain**
   - Enter: `mrajan.com.np`
   - Also add: `www.mrajan.com.np` (if you use www)
   - Click **Continue**

3. **Verify Domain Ownership**
   - Google will provide a verification code
   - Add it to your site's HTML `<head>` or via DNS
   - Or verify via Google Search Console (if already connected)

4. **Enable Site Authorization** (Important for Security!)
   - Go to **Settings** → **My Sites**
   - Enable **Site Authorization**
   - Add authorized domains:
     - `mrajan.com.np`
     - `www.mrajan.com.np` (if applicable)

## Step 2: Test Locally

### Option A: Test Mode (Recommended)
To test without affecting your account, you can temporarily add test mode parameter:

In `_includes/head.html`, temporarily change line 69 to:
```liquid
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4166647782860352&test=true"
     crossorigin="anonymous"></script>
```

This shows placeholder ads that won't affect your account.

### Option B: Build and Check HTML
```bash
# Build your Jekyll site
bundle exec jekyll build

# Check if AdSense script appears in post pages
grep -r "adsbygoogle" _site/posts/

# Check if it's NOT on non-post pages
grep -r "adsbygoogle" _site/ | grep -v "posts"
```

## Step 3: Test in Production

### Deploy to GitHub Pages
1. Commit and push your changes:
```bash
git add .
git commit -m "Add AdSense to blog posts only"
git push origin main
```

2. Wait for GitHub Pages to build (usually 1-2 minutes)

### Verify on Live Site

**Check Blog Post Pages (Should have AdSense):**
- Visit any blog post: `https://mrajan.com.np/posts/2023-07-11-ssg-vs-ssr/`
- Right-click → View Page Source
- Search for "adsbygoogle"
- ✅ Should find: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4166647782860352"`

**Check Non-Post Pages (Should NOT have AdSense):**
- Visit homepage: `https://mrajan.com.np/`
- Visit about page: `https://mrajan.com.np/aboutme/`
- Visit posts listing: `https://mrajan.com.np/posts/`
- Right-click → View Page Source
- Search for "adsbygoogle"
- ❌ Should NOT find the AdSense script

### Browser Testing
1. **Clear Browser Cache**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

2. **Check Browser Console**
   - Open DevTools (F12)
   - Go to Network tab
   - Filter: "adsbygoogle"
   - Visit a blog post
   - Should see request to `adsbygoogle.js`

3. **Check for Errors**
   - Go to Console tab
   - Look for AdSense-related errors
   - Common issues:
     - Domain not verified
     - Site not authorized
     - Invalid client ID

## Step 4: AdSense Dashboard Checks

1. **Check Site Status**
   - AdSense Dashboard → Sites
   - Your domain should show as "Ready" or "Getting ready"
   - May take 24-48 hours after first ad load

2. **Check Ad Units** (if you've created any)
   - Go to Ads → By ad unit
   - Create ad units for placement in blog posts

3. **Check Policy Status**
   - Ensure no policy violations
   - Site must comply with AdSense policies

## Step 5: Automatic Ad Placement Testing

Google's Auto Ads will automatically place ads on your blog post pages. To test:

1. **Wait for Ads to Appear**
   - Can take a few hours to a day after deployment
   - Google crawls your site automatically

2. **Check Ad Placement**
   - Visit a blog post
   - Scroll through the page
   - Ads should appear automatically in optimal positions

3. **Manual Ad Units** (Optional)
   - If you want specific ad placements, create ad units in AdSense
   - Add them manually to `_layouts/post.html`

## Troubleshooting

### Ads Not Showing?
1. **Check Domain Verification** - Must be verified in AdSense
2. **Check Site Authorization** - Domain must be authorized
3. **Wait Time** - Can take 24-48 hours after setup
4. **Browser Extensions** - Disable ad blockers for testing
5. **Check Console** - Look for JavaScript errors

### Ads Showing on Wrong Pages?
1. Check `_includes/head.html` - Ensure conditional is correct
2. Verify `page.layout == 'post'` is working
3. Check Jekyll build output

### Domain Issues?
- Ensure `CNAME` file points to `mrajan.com.np`
- DNS must be properly configured
- GitHub Pages custom domain must be set up

## Important Notes

⚠️ **Don't Click Your Own Ads** - This violates AdSense policy and can result in account suspension

⚠️ **Use Test Mode for Local Testing** - Avoid invalid click activity during development

⚠️ **Monitor AdSense Dashboard** - Check for any warnings or policy issues

## Summary

Your AdSense is now configured to:
- ✅ Load ONLY on blog post pages (`layout: post`)
- ✅ Keep main site ad-free (better ToS compliance)
- ✅ Use your domain: `mrajan.com.np`
- ✅ Client ID: `ca-pub-4166647782860352`

Next steps:
1. Verify domain in AdSense dashboard
2. Enable site authorization
3. Deploy to GitHub Pages
4. Test on live blog posts
5. Monitor AdSense dashboard for status

