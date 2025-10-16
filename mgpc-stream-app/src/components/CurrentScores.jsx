import React from 'react'
import { getCurrentGameTotalAmountObject } from '../utils/calculateTotalAmount'
import { getRoundStatusIcon } from '../utils/scoreIcons'

const CurrentScores = ({ currentRound, gamePlayers, currentGamePoints, gameSettings }) => {

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

  // Calculate total amount for current round
  const pointRate = gameSettings?.pointRate || 1
  const totalAmountObject = getCurrentGameTotalAmountObject(currentGamePoints, pointRate)

  return (
    <div className="section current-scores">
      <div className="section-title">
        <span>Round {currentRound || 1}</span>
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
                const icon = getRoundStatusIcon(playerData.status, playerData.isWinner)
                return (
                  <td key={player} className="maals-value">
                    <span className="score-with-subicon">
                      <span className="score-value">{playerData.originalPoint}</span>
                      {icon ? <span className="subicon" aria-hidden>{icon}</span> : null}
                    </span>
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
                    <span className="score-with-subicon">
                      <span className="score-value">{playerData.computedPoint}</span>
                    </span>
                  </td>
                )
              })}
            </tr>
            <tr className="amount-row">
              <td className="player-name">T. Amt (${pointRate}/Pt.)</td>
              {gamePlayers?.map(player => {
                const totalAmount = totalAmountObject[player] || 0
                const pointClass = totalAmount > 0 ? 'points-positive' :
                  totalAmount < 0 ? 'points-negative' : 'points-zero'
                return (
                  <td key={player} className={pointClass}>
                    {totalAmount}
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
