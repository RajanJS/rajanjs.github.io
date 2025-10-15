import React from 'react'

const CurrentScores = ({ currentRound, gamePlayers, currentGamePoints }) => {
  const getMaalsIcon = (roundStatus, isWinner) => {
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

  // Safely extract points data and round status
  const getPlayerData = (player) => {
    const points = currentGamePoints?.[player]
    if (!points || typeof points !== 'object') return { originalPoint: 0, computedPoint: 0, status: 'unseen', isWinner: false }

    // Handle the actual Firestore data structure
    return {
      originalPoint: points.originalPoint || 0,
      computedPoint: points.computedPoint || 0,
      status: points.roundStatus || 'unseen',
      isWinner: points.isWinner || false
    }
  }

  return (
    <div className="section current-scores">
      <div className="section-title">
        <span className="round-badge">Round {currentRound || 1}</span>
        <span>Points</span>
      </div>
      <div className="table-container">
        <table
          className="table"
          style={{ '--player-count': gamePlayers?.length || 4 }}
        >
          <thead>
            <tr>
              <th>Player</th>
              {gamePlayers?.map(player => (
                <th key={player}>{player}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="player-name">Maals</td>
              {gamePlayers?.map(player => {
                const playerData = getPlayerData(player)
                return (
                  <td key={player} className="maals-value">
                    {getMaalsIcon(playerData.status, playerData.isWinner)}{'  '}{playerData.originalPoint}
                  </td>
                )
              })}
            </tr>
            <tr>
              <td className="player-name">Points</td>
              {gamePlayers?.map(player => {
                const playerData = getPlayerData(player)
                const pointClass = playerData.computedPoint > 0 ? 'points-positive' :
                  playerData.computedPoint < 0 ? 'points-negative' : 'points-zero'
                return (
                  <td key={player} className={pointClass}>
                    {playerData.computedPoint}
                  </td>
                )
              })}
            </tr>
            <tr>
              <td className="player-name">T. Amt ($1/Pt.)</td>
              {gamePlayers?.map(player => {
                const playerData = getPlayerData(player)
                const pointClass = playerData.computedPoint > 0 ? 'points-positive' :
                  playerData.computedPoint < 0 ? 'points-negative' : 'points-zero'
                return (
                  <td key={player} className={pointClass}>
                    {playerData.computedPoint}
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CurrentScores
