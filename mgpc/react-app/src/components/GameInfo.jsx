import React from 'react'

const GameInfo = ({ gameId, gameType, currentRound, currentGamePoints, totalRounds }) => {
  const getGameModeName = (gameType) => {
    switch (gameType) {
      case 'MARRIAGE_GAME': return 'Marriage'
      case 'CALLBREAK_GAME': return 'Call Break'
      case 'KITTI_GAME': return 'Kitti'
      default: return 'Marriage'
    }
  }

  const calculateTotalMaals = () => {
    if (!currentGamePoints) return 0
    return Object.values(currentGamePoints).reduce((sum, points) => sum + (points.originalPoint || 0), 0)
  }

  const getGameModeIcon = (gameType) => {
    switch (gameType) {
      case 'MARRIAGE_GAME': return '🃏'
      case 'CALLBREAK_GAME': return '🃏'
      case 'KITTI_GAME': return '🃏'
      default: return '🎮'
    }
  }

  return (
    <div className="game-info-modern">
      <div className="game-info-details">
        <div className="info-item">
          <span className="info-icon">{getGameModeIcon(gameType)}</span>
          <span className="info-label">Game Mode:</span>
          <span className="info-value">{getGameModeName(gameType)}</span>
        </div>
        
        <div className="info-item">
          <span className="info-icon">🎯</span>
          <span className="info-label">
            {totalRounds !== undefined ? 'Total Rounds:' : 'Total Maals:'}
          </span>
          <span className="info-value">
            {totalRounds !== undefined 
              ? totalRounds
              : `${calculateTotalMaals()} pts.`
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default GameInfo
