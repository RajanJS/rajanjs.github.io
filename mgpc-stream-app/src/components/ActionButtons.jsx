import React from 'react'

const ActionButtons = ({ onViewLeaderboard, onViewScoreboard, onGoBack, type }) => {
  return (
    <div className="action-buttons">
      {type === 'scoreboard' && onViewLeaderboard && (
        <button className="action-btn" onClick={onViewLeaderboard}>
          <span>📊</span>
          View Leaderboard
          <span>»</span>
        </button>
      )}

      {type === 'leaderboard' && onViewScoreboard && (
        <button className="action-btn" onClick={onViewScoreboard}>
          <span>📊</span>
          View Scoreboard
          <span>»</span>
        </button>
      )}

      {/* <div className="action-links">
        <a href="#" className="action-link" onClick={onGoBack}>
          <span>←</span>
          Go back to Game
        </a>
        <a href="#" className="action-link">
          <span>🐛</span>
          Report Issue
        </a>
        <a href="#" className="action-link">
          <span>📤</span>
          Share {type === 'scoreboard' ? 'Score' : 'Leaderboard'}
        </a>
      </div> */}
    </div>
  )
}

export default ActionButtons
