# MGPC Web Fallback - Deployment Guide

This guide covers deploying both the HTML and React versions of the MGPC web fallback.

## Quick Start

### Option 1: HTML Version (Recommended for Quick Deploy)

1. **Upload HTML files** to your website:
   ```bash
   # Copy these files to your web server
   cp scoreboard.html /path/to/your/website/mgpc/
   cp leaderboard.html /path/to/your/website/mgpc/
   cp join.html /path/to/your/website/mgpc/
   cp transfer.html /path/to/your/website/mgpc/
   cp index.html /path/to/your/website/mgpc/
   ```

2. **Test the URLs**:
   - `https://mrajan.com.np/mgpc/scoreboard?gameId=ABC123`
   - `https://mrajan.com.np/mgpc/leaderboard?gameId=ABC123`

### Option 2: React Version (Recommended for Long-term)

1. **Build the React app**:
   ```bash
   cd react-app
   npm install
   npm run build
   ```

2. **Deploy the built files**:
   ```bash
   # The build output will be in ../dist/
   cp -r dist/* /path/to/your/website/mgpc/
   ```

## File Structure

```
mgpc/
├── index.html              # Router page
├── join.html               # Join game page
├── scoreboard.html         # Live scoreboard
├── leaderboard.html        # Live leaderboard
├── transfer.html           # Transfer host page
├── README.md              # Documentation
├── .gitignore             # Git ignore rules
├── react-app/             # React version
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── dist/                  # Built React app (after build)
```

## Firebase Configuration

Both versions use your existing Firebase project (`mgpc-v3`):

- **Collection**: `mgpc-streaming-games`
- **Real-time updates**: Uses `onSnapshot` listeners
- **API Key**: Already configured in the code

## URL Structure

The web fallback handles these URL patterns:

- **Join Game**: `https://mrajan.com.np/mgpc/join?gameId=ABC123`
- **Transfer Host**: `https://mrajan.com.np/mgpc/transfer?code=XYZ789`
- **Scoreboard**: `https://mrajan.com.np/mgpc/scoreboard?gameId=ABC123`
- **Leaderboard**: `https://mrajan.com.np/mgpc/leaderboard?gameId=ABC123`

## Testing

1. **Generate QR code** from your MGPC app
2. **Test on different devices**:
   - Device with app → Should open app
   - Device without app → Should open web page
3. **Test different browsers** → Should work consistently

## Security Considerations

- **Firebase API Key**: Currently exposed in client-side code
- **CORS**: Ensure your Firebase project allows web requests
- **Rate Limiting**: Consider implementing rate limiting for production

## Performance

- **HTML Version**: ~50KB per page
- **React Version**: ~200KB (gzipped) for initial load
- **Firestore**: Real-time updates with minimal bandwidth

## Maintenance

### HTML Version
- Edit HTML files directly
- No build process required
- Easy to update

### React Version
- Edit components in `src/`
- Run `npm run build` after changes
- More maintainable for complex features

## Troubleshooting

### Common Issues

1. **"Game not found" error**:
   - Check if game ID is correct
   - Verify game is still streaming
   - Check Firebase connection

2. **"Connection error"**:
   - Check internet connection
   - Verify Firebase configuration
   - Check browser console for errors

3. **Styling issues**:
   - Ensure Poppins font is loaded
   - Check CSS file paths
   - Verify responsive design

### Debug Mode

Add `?debug=true` to any URL to see console logs:
- `https://mrajan.com.np/mgpc/scoreboard?gameId=ABC123&debug=true`

## Updates

### Updating HTML Version
1. Edit the HTML files
2. Upload to your web server
3. Clear browser cache if needed

### Updating React Version
1. Edit components in `src/`
2. Run `npm run build`
3. Upload `dist/` contents to web server
4. Clear browser cache

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify Firebase connection
3. Test with different game IDs
4. Check network connectivity

## Next Steps

1. **Deploy to production**
2. **Test with real QR codes**
3. **Monitor performance**
4. **Gather user feedback**
5. **Iterate and improve**
