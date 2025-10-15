import React from 'react'

const OverallScores = ({ gamePlayers, overallGamePoints }) => {

  const getScoreIcon = (roundStatus, isWinner) => {
    if (isWinner) return '🏆'

    switch (roundStatus) {
      case 'seen':
        return '👁️'
      case 'unseen':
        return ''
      case 'dublee':
        return '🔄'
      case 'foul':
        return '⚠️'
      case 'hold':
        return '⏸️'
      default:
        return '👁️'
    }
  }

  // Safely extract score data and round status
  const getPlayerData = (round, player) => {
    if (!round || typeof round !== 'object') return { score: 0, status: 'unseen', isWinner: false }

    const playerData = round[player]
    if (!playerData || typeof playerData !== 'object') return { score: 0, status: 'unseen', isWinner: false }

    // Handle the actual Firestore data structure
    return {
      score: playerData.computedPoint || 0,
      status: playerData.roundStatus || 'unseen',
      isWinner: playerData.isWinner || false
    }
  }

  if (!overallGamePoints || overallGamePoints.length === 0) {
    return null
  }

  return (
    <div className="section overall-scores">
      <div className="section-title">
        <span>🏆</span>
        <span>Overall Scoreboard</span>
      </div>
      <div className="table-container">
        <table
          className="table"
          style={{ '--player-count': gamePlayers?.length || 4 }}
        >
          <thead>
            <tr>
              <th>Round</th>
              {gamePlayers?.map(player => (
                <th key={player}>{player}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {overallGamePoints.map((round, index) => (
              <tr key={index}>
                <td className="round-number">{index + 1}</td>
                {gamePlayers?.map(player => {
                  const playerData = getPlayerData(round, player)
                  const pointClass = playerData.score > 0 ? 'points-positive' :
                    playerData.score < 0 ? 'points-negative' : 'points-zero'
                  return (
                    <td key={player} className={pointClass}>
                      {getScoreIcon(playerData.status, playerData.isWinner)}{'  '}{playerData.score}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OverallScores
