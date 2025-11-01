# AdSense ads.txt File Setup

## ✅ What Was Created

An `ads.txt` file has been created in the root directory of your site with the following content:

```
google.com, ca-pub-4166647782860352, DIRECT, f08c47fec0942fa0
```

## 📋 File Format Explained

The `ads.txt` file format is:
```
google.com, ca-pub-4166647782860352, DIRECT, f08c47fec0942fa0
```

Where:
- **google.com**: The ad network (Google)
- **ca-pub-4166647782860352**: Your AdSense Publisher ID
- **DIRECT**: Indicates a direct relationship with the seller
- **f08c47fec0942fa0**: Google's certification authority ID (fixed value for AdSense)

## 🔍 Verification

After deploying to GitHub Pages, your `ads.txt` file should be accessible at:
- **URL**: `https://mrajan.com.np/ads.txt`
- **Expected Content**: Should display the line with your publisher ID

## ⚠️ Important Notes

1. **File Location**: The file MUST be in the root directory (`/`) of your domain
2. **File Name**: Must be exactly `ads.txt` (lowercase)
3. **No Extra Content**: The file should only contain the authorization line(s)
4. **HTTPS**: Must be accessible via HTTPS (GitHub Pages provides this)

## ✅ How to Verify After Deployment

1. **Deploy your site** to GitHub Pages
2. **Wait 5-10 minutes** for GitHub Pages to rebuild
3. **Visit**: `https://mrajan.com.np/ads.txt` in your browser
4. **Expected Result**: You should see:
   ```
   google.com, ca-pub-4166647782860352, DIRECT, f08c47fec0942fa0
   ```

## 🚨 Common Issues

### File Not Found (404)
- Check if the file is in the root directory
- Verify the file is committed to your repository
- Ensure GitHub Pages has finished building (check Actions tab)

### Wrong Publisher ID
- Verify your Publisher ID is correct: `ca-pub-4166647782860352`
- Check for typos in the ads.txt file

### Not Accessible via HTTPS
- GitHub Pages automatically provides HTTPS
- Ensure your custom domain is properly configured

## 📊 AdSense Dashboard Status

After deployment, check your AdSense dashboard:
- Go to **Sites** → **Your Site** → **ads.txt status**
- Status should show: **"Authorized"** after Google crawls your site (may take 24-48 hours)

## 🔄 If Status Shows "Not Found"

If AdSense shows "Not found" after 48 hours:
1. Verify the file is accessible: `https://mrajan.com.np/ads.txt`
2. Check file name is exactly `ads.txt` (case-sensitive)
3. Ensure file is in root directory (not in a subdirectory)
4. Clear browser cache and try again
5. Wait for Google to recrawl (can take up to 48 hours)

## 📚 Additional Resources

- [Google ads.txt Documentation](https://developers.google.com/adsense/platforms/direct/ads-txt)
- [IAB ads.txt Standard](https://iabtechlab.com/ads-txt/)
- [AdSense Help: ads.txt](https://support.google.com/adsense/answer/7532444)

---

**Your ads.txt file is ready!** After deployment, it will be available at the root of your domain.

