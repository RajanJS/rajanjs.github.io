import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeaderboardTable = ({ gameId, gamePlayers, overallGamePoints }) => {
  const navigate = useNavigate()

  const calculateLeaderboard = () => {
    if (!gamePlayers || !overallGamePoints) return []

    const playerStats = {}

    gamePlayers.forEach(player => {
      playerStats[player] = {
        player: player,
        totalPoints: 0,
        wins: 0,
        losses: 0,
        rounds: overallGamePoints.length
      }
    })

    overallGamePoints.forEach(round => {
      gamePlayers.forEach(player => {
        const points = round[player]?.computedPoint || 0
        playerStats[player].totalPoints += points

        if (points > 0) {
          playerStats[player].wins++
        } else if (points < 0) {
          playerStats[player].losses++
        }
      })
    })

    return Object.values(playerStats).sort((a, b) => b.totalPoints - a.totalPoints)
  }

  const leaderboard = calculateLeaderboard()
  const top3 = leaderboard.slice(0, 3)
  const rest = leaderboard.slice(3)

  const getAvatar = (player, rank) => {
    const avatars = {
      1: '👑', // Crown for 1st place
      2: '🥈', // Silver medal for 2nd place  
      3: '🥉', // Bronze medal for 3rd place
      default: '👤' // Default avatar
    }
    return avatars[rank] || avatars.default
  }

  const getRankBadge = (rank) => {
    const badges = {
      1: { emoji: '1', color: 'gold' },
      2: { emoji: '2', color: 'silver' },
      3: { emoji: '3', color: 'bronze' }
    }
    return badges[rank] || { emoji: rank.toString(), color: 'default' }
  }

  const formatMoney = (points) => {
    const amount = Math.abs(points)
    return points >= 0 ? `$${amount}` : `-$${amount}`
  }

  const getTotalStatus = (points) => {
    return points >= 0 ? 'Total Won' : 'Total Loss'
  }

  const handleViewScoreboard = () => {
    if (gameId) {
      navigate(`/scoreboard?gameId=${gameId}`)
    }
  }

  return (
    <div className="leaderboard-container">
      {/* Top 3 Podium */}
      <div className="top3-podium">
        <div className="podium-player second">
          <div className="player-avatar">
            {getAvatar(top3[1]?.player, 2)}
            <div className="rank-badge silver">2</div>
          </div>
          <div className="player-info">
            <div className="player-name">{top3[1]?.player || 'Player 2'}</div>
            <div className="player-points">{top3[1]?.totalPoints || 0} points</div>
          </div>
        </div>

        <div className="podium-player first">
          <div className="player-avatar">
            {getAvatar(top3[0]?.player, 1)}
            <div className="rank-badge gold">1</div>
          </div>
          <div className="player-info">
            <div className="player-name">{top3[0]?.player || 'Player 1'}</div>
            <div className="player-points">{top3[0]?.totalPoints || 0} points</div>
          </div>
        </div>

        <div className="podium-player third">
          <div className="player-avatar">
            {getAvatar(top3[2]?.player, 3)}
            <div className="rank-badge bronze">3</div>
          </div>
          <div className="player-info">
            <div className="player-name">{top3[2]?.player || 'Player 3'}</div>
            <div className="player-points">{top3[2]?.totalPoints || 0} points</div>
          </div>
        </div>
      </div>

      {/* Full Width Action Button */}
      <div className="full-width-action">
        <button
          className="full-width-btn"
          onClick={handleViewScoreboard}
        >
          <span className="btn-icon">📊</span>
          <span className="btn-text">View Scoreboard</span>
          <span className="btn-arrow">»</span>
        </button>
      </div>

      {/* Detailed Leaderboard List */}
      <div className="leaderboard-list">
        {leaderboard.map((player, index) => {
          const rank = index + 1
          const isPositive = player.totalPoints >= 0
          const moneyAmount = formatMoney(player.totalPoints)
          const totalStatus = getTotalStatus(player.totalPoints)

          return (
            <div key={player.player} className="leaderboard-card">
              <div className="rank-number">
                {rank === 1 ? '1st' :
                  rank === 2 ? '2nd' :
                    rank === 3 ? '3rd' :
                      `${rank}th`}
              </div>

              <div className="player-avatar-small">
                {getAvatar(player.player, rank)}
              </div>

              <div className="player-details">
                <div className="player-name">{player.player}</div>
                <div className="player-points">{player.totalPoints} points</div>
              </div>

              <div className="money-info">
                <div className={`money-amount ${isPositive ? 'positive' : 'negative'}`}>
                  {moneyAmount}
                </div>
                <div className="money-status">{totalStatus}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LeaderboardTable
