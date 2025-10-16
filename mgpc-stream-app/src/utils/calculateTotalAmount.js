/**
 * Calculate total amount based on points and point rate
 * Similar to React Native app's calculateTotalAmount utility
 */

export const calculateTotalAmount = (totalGamePoints, pointRate = 1) => {
  if (!totalGamePoints || typeof totalGamePoints !== 'object') {
    return {}
  }

  return Object.entries(totalGamePoints).reduce((acc, [player, points]) => {
    // Skip non-player entries like 'round'
    if (player === 'round') {
      acc[player] = points
      return acc
    }

    const computedAmount = points * pointRate
    acc[player] = Number(computedAmount.toFixed(1))
    return acc
  }, {})
}

/**
 * Calculate total points for all players across all rounds
 */
export const calculateTotalPoints = (overallGamePoints) => {
  if (!overallGamePoints || !Array.isArray(overallGamePoints)) {
    return {}
  }

  const totalPoints = {}
  
  overallGamePoints.forEach(round => {
    if (round && typeof round === 'object') {
      Object.entries(round).forEach(([player, playerData]) => {
        if (player !== 'round' && playerData && typeof playerData === 'object') {
          const points = playerData.computedPoint || 0
          totalPoints[player] = (totalPoints[player] || 0) + points
        }
      })
    }
  })

  return totalPoints
}

/**
 * Get current game total amount object
 * Similar to React Native app's getCurrentGameTotalAmountObject
 */
export const getCurrentGameTotalAmountObject = (currentGamePoints, pointRate = 1) => {
  if (!currentGamePoints || typeof currentGamePoints !== 'object') {
    return {}
  }

  return Object.entries(currentGamePoints)
    .filter(([playerKey, _value]) => playerKey !== 'round')
    .reduce(
      (totalAmount, [key, value]) => {
        if (value && typeof value === 'object') {
          const computedAmount = (value.computedPoint || 0) * pointRate
          totalAmount[key] = Number(computedAmount.toFixed(1))
        } else {
          totalAmount[key] = 0
        }
        return totalAmount
      },
      { round: currentGamePoints.round } 
    )
}
