import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useGameData } from '../hooks/useGameData'
import Header from './Header'
import GameInfo from './GameInfo'
import LeaderboardTable from './LeaderboardTable'

const Leaderboard = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const gameId = searchParams.get('gameId') || searchParams.get('code')

  const { gameData, loading, error } = useGameData(gameId)

  const handleGoBack = () => {
    navigate(-1)
  }

  if (loading) {
    return (
      <div className="container">
        <Header title="Live Leaderboard" onBack={handleGoBack} />
        <div className="content">
          <div className="loading-full">
            <div className="loading-spinner"></div>
            <p>🔄 Loading leaderboard...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <Header title="Live Leaderboard" onBack={handleGoBack} />
        <div className="error">
          <h3>❌ Error</h3>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!gameData) {
    return (
      <div className="container">
        <Header title="Live Leaderboard" onBack={handleGoBack} />
        <div className="error">
          <h3>❌ Game Not Found</h3>
          <p>Game with ID "{gameId}" was not found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Header title="Live Leaderboard" gameId={gameId} onBack={handleGoBack} />

      <GameInfo
        gameId={gameId}
        gameType={gameData.gameType}
        totalRounds={gameData.overallGamePoints?.length || 0}
      />

      <LeaderboardTable
        gameId={gameId}
        gamePlayers={gameData.gamePlayers}
        overallGamePoints={gameData.overallGamePoints}
      />

    </div>
  )
}

export default Leaderboard
