import React, { useState } from 'react'
import { calculateTotalPoints, calculateTotalAmount } from '../utils/calculateTotalAmount'
import { getRoundStatusIcon } from '../utils/scoreIcons'

const OverallScores = ({ gamePlayers, overallGamePoints, gameSettings }) => {

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

  // Calculate total points and total amount
  const totalPoints = calculateTotalPoints(overallGamePoints)
  const pointRate = gameSettings?.pointRate || 1
  const totalAmount = calculateTotalAmount(totalPoints, pointRate)

  const [showLegend, setShowLegend] = useState(false)

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
                  const icon = getRoundStatusIcon(playerData.status, playerData.isWinner)
                  return (
                    <td key={player} className={pointClass}>
                      <span className="score-with-subicon">
                        <span className="score-value">{playerData.score}</span>
                        {icon ? <span className="subicon" aria-hidden>{icon}</span> : null}
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
            {/* Total Points Row */}
            <tr className="points-total-row">
              <td className="player-name">T. Points</td>
              {gamePlayers?.map(player => {
                const totalPoint = totalPoints[player] || 0
                const pointClass = totalPoint > 0 ? 'points-positive' :
                  totalPoint < 0 ? 'points-negative' : 'points-zero'
                return (
                  <td key={player} className={pointClass}>
                    {totalPoint}
                  </td>
                )
              })}
            </tr>
            {/* Total Amount Row */}
            <tr className="amount-row">
              <td className="player-name">T. Amt (${pointRate}/Pt.)</td>
              {gamePlayers?.map(player => {
                const totalAmt = totalAmount[player] || 0
                const pointClass = totalAmt > 0 ? 'points-positive' :
                  totalAmt < 0 ? 'points-negative' : 'points-zero'
                return (
                  <td key={player} className={pointClass}>
                    {totalAmt}
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Indicators Toggle */}
      <div className="indicator-toggle-wrap">
        <button className="indicator-toggle" onClick={() => setShowLegend(v => !v)}>
          {showLegend ? 'Hide indicators info' : 'Indicators info'}
        </button>
      </div>

      {showLegend && (
        <div className="indicator-legend">
          <div className="legend-header">Indicators Info</div>
          <div className="legend-row"><span className="legend-icon">🏆</span><span className="legend-label">Winner</span></div>
          <div className="legend-row"><span className="legend-icon">👁️</span><span className="legend-label">Seen</span></div>
          <div className="legend-row"><span className="legend-icon">🔄</span><span className="legend-label">Dublee</span></div>
          <div className="legend-row"><span className="legend-icon">⚠️</span><span className="legend-label">Foul</span></div>
          <div className="legend-row"><span className="legend-icon muted">🙈</span><span className="legend-label">Unseen</span></div>
          <div className="legend-note">Icons appear as small superscripts next to scores. Click the button to hide the legend.</div>
        </div>
      )}
    </div>
  )
}

export default OverallScores
