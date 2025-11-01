# Quick AdSense Verification Guide

During the **"Getting ready"** review phase, use these quick checks to verify everything is working.

## 🚀 Quick Verification (5 minutes)

### 1. Test ads.txt File
Visit in browser: `https://mrajan.com.np/ads.txt`

**Expected Result:**
```
google.com, pub-4166647782860352, DIRECT, f08c47fec0942fa0
```

**If you see this**: ✅ **Good!**

**If you see 404**: ❌ Fix immediately - file missing

---

### 2. Test AdSense Script
1. Visit: `https://mrajan.com.np`
2. Right-click → **View Page Source** (or Cmd+U / Ctrl+U)
3. Press Cmd+F / Ctrl+F
4. Search for: `adsbygoogle`

**Expected Result:**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4166647782860352"
     crossorigin="anonymous"></script>
```

**If you see this**: ✅ **Good!**

**If not found**: ❌ Check `_includes/head.html`

---

### 3. Test Privacy Policy
Visit: `https://mrajan.com.np/privacy-policy/`

**Check for:**
- Page loads without errors ✅
- Mentions "Google AdSense" ✅
- Mentions "Google Analytics" ✅
- Has contact information ✅

**If all checked**: ✅ **Good!**

---

### 4. Test Footer Links
Visit: `https://mrajan.com.np` and scroll to footer

**Check:**
- Privacy Policy link visible ✅
- Terms of Service link visible ✅
- Both links work ✅

**If all checked**: ✅ **Good!**

---

### 5. Test Multiple Pages
Check AdSense script loads on:
- Homepage: `https://mrajan.com.np` ✅
- About page: `https://mrajan.com.np/aboutme/` ✅
- Blog post: `https://mrajan.com.np/posts/2023-07-11-ssg-vs-ssr/` ✅

---

## 🔧 Command Line Verification

Run this script (after deployment):

```bash
./verify_adsense_setup.sh
```

Or test manually:

```bash
# Test ads.txt
curl https://mrajan.com.np/ads.txt

# Test AdSense script
curl -s https://mrajan.com.np/ | grep adsbygoogle

# Test Privacy Policy
curl -I https://mrajan.com.np/privacy-policy/
```

---

## ✅ Daily Checks During Review

Every day during the 2-4 week review:

1. **Check AdSense Dashboard** (5 seconds)
   - Login to AdSense
   - Look for status changes
   - Check for messages

2. **Verify Site is Live** (10 seconds)
   - Visit your homepage
   - Check it loads

3. **Verify ads.txt** (10 seconds)
   - Visit: `https://mrajan.com.np/ads.txt`
   - Should show your publisher ID

---

## ⚠️ Red Flags - Fix Immediately

If you notice:

- ❌ ads.txt returns 404 → Fix immediately
- ❌ AdSense script missing → Check `_includes/head.html`
- ❌ Privacy Policy missing → Create it
- ❌ Site password protected → Remove it
- ❌ SSL certificate errors → Fix HTTPS

---

## 📊 What AdSense Checks During Review

Google reviews:

1. **Technical Setup** (Days 1-3)
   - AdSense code installation ✓
   - ads.txt file ✓
   - Domain verification ✓

2. **Content Quality** (Days 4-7)
   - Original content ✓
   - Sufficient content ✓
   - No prohibited material ✓

3. **Policy Compliance** (Days 8-14)
   - Privacy Policy ✓
   - Terms of Service ✓
   - Site accessibility ✓

4. **User Experience** (Throughout)
   - Mobile-friendly ✓
   - Fast loading ✓
   - Clear navigation ✓

---

## 🎯 Your Current Status

Based on setup verification:

- ✅ AdSense code: **Installed on all pages**
- ✅ ads.txt: **Configured correctly**
- ✅ Privacy Policy: **Complete with disclosures**
- ✅ Terms of Service: **Created**
- ✅ Footer links: **Working**
- ✅ Content: **Quality, original posts**
- ✅ HTTPS: **Enabled**
- ✅ Mobile-friendly: **Yes**

**Status: ✅ READY FOR REVIEW**

---

## 💡 Pro Tips

1. **Be Patient**: 2-4 weeks is normal, don't panic
2. **Don't Change**: Avoid major site changes during review
3. **Monitor Daily**: Check dashboard for updates
4. **Stay Compliant**: Don't click ads or violate policies
5. **Keep Site Active**: Ensure site stays accessible

---

## 📞 Need Help?

If verification fails:
1. Check `ADSENSE_VERIFICATION_CHECKLIST.md` for detailed steps
2. Review AdSense Help: https://support.google.com/adsense
3. Check site build logs if using GitHub Pages

---

**You're all set!** Just wait for Google's review to complete. 🎉

