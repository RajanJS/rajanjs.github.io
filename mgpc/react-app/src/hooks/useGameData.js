import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'

export const useGameData = (gameId) => {
  const [gameData, setGameData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!gameId) {
      setError('No game ID provided')
      setLoading(false)
      return
    }

    const gameRef = doc(db, 'mgpc-streaming-games', gameId)
    
    const unsubscribe = onSnapshot(
      gameRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data()
          if (!data.isStreaming) {
            setError('Game has ended')
          } else {
            setGameData(data)
            setError(null)
          }
        } else {
          setError('Game not found')
        }
        setLoading(false)
      },
      (err) => {
        console.error('Firestore error:', err)
        setError('Connection error: ' + err.message)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [gameId])

  return { gameData, loading, error }
}
