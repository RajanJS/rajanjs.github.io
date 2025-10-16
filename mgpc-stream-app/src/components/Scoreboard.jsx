import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useGameData } from '../hooks/useGameData'
import Header from './Header'
import GameInfo from './GameInfo'
import CurrentScores from './CurrentScores'
import OverallScores from './OverallScores'
import ActionButtons from './ActionButtons'
import FooterNote from './FooterNote'

const Scoreboard = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const gameId = searchParams.get('gameId') || searchParams.get('code')

  const { gameData, loading, error } = useGameData(gameId)

  const handleViewLeaderboard = () => {
    if (gameId) {
      navigate(`/leaderboard?gameId=${gameId}`)
    }
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  if (loading) {
    return (
      <div className="container">
        <Header title="Live Scoreboard" gameId={gameId} />
        <div className="content">
          <div className="loading-full">
            <div className="loading-spinner"></div>
            <p>🔄 Loading game data...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <Header title="Live Scoreboard" gameId={gameId} />
        <div className="content">
          <div className="game-info">
            <div className="game-code">
              <span className="game-code-text">Game Code: {gameId || 'Error'}</span>
              <span className="status-indicator"></span>
              <span className="qr-icon">📱</span>
            </div>
            <div className="game-mode">
              <span className="game-mode-text">Game Mode:</span>
              <span className="game-mode-value">Error</span>
            </div>
            <div className="total-info">Error loading game data</div>
          </div>

          <div className="section current-scores">
            <div className="section-title">
              <span className="round-badge">Round 1</span>
              <span>Points</span>
            </div>
            <div className="table-container">
              <div className="loading-content error">
                <div className="error-icon">❌</div>
                <div className="loading-message">Error loading current scores</div>
              </div>
            </div>
          </div>

          <div className="section overall-scores">
            <div className="section-title">
              <span>🏆</span>
              <span>Overall Scoreboard</span>
            </div>
            <div className="table-container">
              <div className="loading-content error">
                <div className="error-icon">❌</div>
                <div className="loading-message">Error loading overall scores</div>
              </div>
            </div>
          </div>

          <ActionButtons
            onViewLeaderboard={() => { }}
            onGoBack={() => { }}
            type="scoreboard"
          />
        </div>
      </div>
    )
  }

  if (!gameData) {
    return (
      <div className="container">
        <Header title="Live Scoreboard" gameId={gameId} />
        <div className="content">
          <div className="game-info">
            <div className="game-code">
              <span className="game-code-text">Game Code: {gameId || 'Not Found'}</span>
              <span className="status-indicator"></span>
              <span className="qr-icon">📱</span>
            </div>
            <div className="game-mode">
              <span className="game-mode-text">Game Mode:</span>
              <span className="game-mode-value">Not Found</span>
            </div>
            <div className="total-info">Game not found</div>
          </div>

          <div className="section current-scores">
            <div className="section-title">
              <span className="round-badge">Round 1</span>
              <span>Points</span>
            </div>
            <div className="table-container">
              <div className="error">
                <h3>❌ Game Not Found</h3>
                <p>Game with ID "{gameId}" was not found.</p>
              </div>
            </div>
          </div>

          <div className="section overall-scores">
            <div className="section-title">
              <span>🏆</span>
              <span>Overall Scoreboard</span>
            </div>
            <div className="table-container">
              <div className="error">
                <h3>❌ Game Not Found</h3>
                <p>Game with ID "{gameId}" was not found.</p>
              </div>
            </div>
          </div>

          <ActionButtons
            onViewLeaderboard={() => { }}
            onGoBack={() => { }}
            type="scoreboard"
          />
        </div>
      </div>
    )
  }


  return (
    <div className="container">
      <Header title="Live Scoreboard" gameId={gameId} gameType={gameData.gameType} />
      <div className="content">
        <GameInfo
          gameId={gameId}
          gameType={gameData.gameType}
          currentRound={gameData.currentRound}
          currentGamePoints={gameData.currentGamePoints}
          gameSettings={gameData.gameSettings}
        />

        <CurrentScores
          currentRound={gameData.currentRound}
          gamePlayers={gameData.gamePlayers}
          currentGamePoints={gameData.currentGamePoints}
          gameSettings={gameData.gameSettings}
        />

        {/* Full Width Action Button */}
        <div className="full-width-action">
          <button
            className="full-width-btn"
            onClick={handleViewLeaderboard}
          >
            <span className="btn-icon">📊</span>
            <span className="btn-text">View Leaderboard</span>
            <span className="btn-arrow">＞</span>
          </button>
        </div>

        <OverallScores
          gamePlayers={gameData.gamePlayers}
          overallGamePoints={gameData.overallGamePoints}
          gameSettings={gameData.gameSettings}
        />
      </div>
      <FooterNote />
    </div>
  )
}

export default Scoreboard
