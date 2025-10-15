# MGPC Web Fallback - React.js Version

This is the React.js version of the MGPC web fallback, providing a more maintainable and scalable solution.

## Features

- **React.js** - Modern, component-based architecture
- **Real-time Firestore** - Live updates from your Firebase database
- **Responsive Design** - Matches your app's exact layout
- **TypeScript Ready** - Easy to add TypeScript support
- **Component Reusability** - Modular, maintainable code
- **React Router** - Clean URL routing
- **Custom Hooks** - Reusable data fetching logic

## Project Structure

```
react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── GameInfo.jsx
│   │   ├── CurrentScores.jsx
│   │   ├── OverallScores.jsx
│   │   ├── LeaderboardTable.jsx
│   │   ├── ActionButtons.jsx
│   │   ├── Scoreboard.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── Join.jsx
│   │   ├── Transfer.jsx
│   │   └── Home.jsx
│   ├── hooks/
│   │   └── useGameData.js
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Navigate to the react-app directory:
   ```bash
   cd /Users/rmaharjan/PROJECTS/rajanjs.github.io/mgpc/react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

After building, the files will be in the `../dist` directory. You can deploy these to your website.

## Components

### Core Components

- **Scoreboard** - Live scoreboard with current and overall scores
- **Leaderboard** - Live leaderboard with rankings and stats
- **Join** - App download page for joining games
- **Transfer** - App download page for host transfer

### Reusable Components

- **Header** - Navigation header with back button
- **GameInfo** - Game information display
- **CurrentScores** - Current round scores table
- **OverallScores** - Overall scores table
- **LeaderboardTable** - Leaderboard rankings table
- **ActionButtons** - Action buttons and links

### Custom Hooks

- **useGameData** - Fetches and manages real-time game data from Firestore

## Benefits of React Version

1. **Maintainability** - Component-based architecture makes code easier to maintain
2. **Reusability** - Components can be reused across different pages
3. **State Management** - Better state management with React hooks
4. **Performance** - React's virtual DOM for better performance
5. **Scalability** - Easy to add new features and components
6. **Developer Experience** - Better debugging and development tools
7. **TypeScript Ready** - Easy to migrate to TypeScript for better type safety

## Firebase Integration

The React version uses the same Firebase configuration and connects to your `mgpc-streaming-games` collection for real-time updates.

## Styling

Uses the same CSS classes as the HTML version to maintain consistency with your app's design.

## Next Steps

1. **Add TypeScript** - Convert to TypeScript for better type safety
2. **Add Testing** - Add unit tests with Jest and React Testing Library
3. **Add PWA Support** - Make it a Progressive Web App
4. **Add State Management** - Add Redux or Zustand for complex state
5. **Add Error Boundaries** - Better error handling
6. **Add Loading States** - Better loading indicators
7. **Add Animations** - Smooth transitions and animations

## Comparison

| Feature | HTML Version | React Version |
|---------|-------------|---------------|
| Setup | Simple | Requires build step |
| Maintainability | Basic | Excellent |
| Reusability | Limited | High |
| Performance | Good | Better |
| Scalability | Limited | Excellent |
| Developer Experience | Basic | Excellent |
| Bundle Size | Smaller | Larger (but optimized) |

The React version is recommended for long-term maintenance and future enhancements.
