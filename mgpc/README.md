# MGPC Web Fallback Integration

This directory contains the web fallback pages for MGPC QR code scanning, integrated into your existing website at `mrajan.com.np`.

## Files Created

- `index.html` - Main router page that redirects based on URL parameters
- `join.html` - Join game page (redirects to download app)
- `scoreboard.html` - Live scoreboard viewer with app-like UI
- `leaderboard.html` - Live leaderboard with rankings and stats
- `transfer.html` - Transfer host access page (redirects to download app)
- `README.md` - This documentation

## URL Structure

The QR codes now generate these URLs:
- **Join Game**: `https://mrajan.com.np/mgpc/join?gameId=ABC123` → Downloads app
- **Transfer Host**: `https://mrajan.com.np/mgpc/transfer?code=XYZ789` → Downloads app
- **Scoreboard**: `https://mrajan.com.np/mgpc/scoreboard?gameId=ABC123` → View live scores
- **Leaderboard**: `https://mrajan.com.np/mgpc/leaderboard?gameId=ABC123` → View rankings

## How It Works

1. **User scans QR code** → Opens HTTPS URL
2. **If app is installed** → App opens and handles the deep link
3. **If app is NOT installed** → Web page opens with:
   - **Join/Transfer**: Download links for iOS/Android (no game logic)
   - **Scoreboard/Leaderboard**: Live viewing with app-like UI
   - Game information and instructions

## Design Features

- **Matches your app's design** with the same color scheme (#AF1919, #2C3E50)
- **Uses Poppins font** for consistency
- **Responsive design** that works on all devices
- **App-like UI** with rounded corners, shadows, and smooth animations
- **Live scoreboard** with real-time Firestore updates
- **Live leaderboard** with calculated rankings and stats

## Integration with Your Website

The pages are designed to integrate seamlessly with your existing Jekyll website:
- Uses the same color scheme as your MGPC landing page
- Matches the overall design language
- Includes proper meta tags and SEO optimization

## Next Steps

1. **Deploy these files** to your website
2. **Test the QR code flow**:
   - Generate QR code in app
   - Scan with device without app → Should open web page
   - Scan with device with app → Should open app
3. **Optional: Add real API integration** for live scoreboard data

## Firebase Integration

The web pages now connect directly to your Firestore database:

1. **Real-time updates** - Uses Firestore `onSnapshot` listeners
2. **Live scoreboard** - Shows current round and overall scores
3. **Live leaderboard** - Calculates rankings from game data
4. **Error handling** - Graceful fallbacks for connection issues
5. **Game validation** - Checks if games are still active

### Firebase Configuration

The pages use your existing Firebase project (`mgpc-v3`) with:
- Collection: `mgpc-streaming-games`
- Real-time listeners for live updates
- Automatic reconnection on network issues

## Benefits

- ✅ **No more "No usable data found"** errors on iOS 18.7.1
- ✅ **Works on all devices** (iOS, Android, desktop)
- ✅ **Better user experience** - shows download links and game info
- ✅ **Live scoreboard** with real-time Firestore updates
- ✅ **Live leaderboard** with calculated rankings
- ✅ **Matches your app's design** perfectly
- ✅ **Future-proof** - works with any iOS version
- ✅ **Real-time data** - no more mock data, everything is live!

## Testing

1. Generate a QR code from your app
2. Test on different devices:
   - Device with app installed → Should open app
   - Device without app → Should open web page
   - Different browsers → Should work consistently

The web fallback provides a seamless experience for users who don't have the app installed while maintaining the same visual design as your mobile app.
