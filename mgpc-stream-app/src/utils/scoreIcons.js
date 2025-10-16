// Common icon resolver for round status across components
// isWinner overrides any other status

export const getRoundStatusIcon = (roundStatus, isWinner) => {
  if (isWinner) return '🏆'

  switch (roundStatus) {
    case 'seen':
      return '👁️'
    case 'unseen':
      return '🙈'
    case 'dublee':
      return '🔄'
    case 'foul':
      return '⚠️'
    case 'hold':
      return '⏸️'
    default:
      return ''
  }
}


