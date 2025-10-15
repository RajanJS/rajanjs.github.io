import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from './Header'

const Join = () => {
  const [searchParams] = useSearchParams()
  const gameId = searchParams.get('gameId')
  const token = searchParams.get('token')

  const handleDownloadApp = () => {
    // Try to open the app first
    const appScheme = `mgpc://join?gameId=${gameId}${token ? `&token=${token}` : ''}`
    window.location.href = appScheme
    
    // If app doesn't open within 2 seconds, show download options
    setTimeout(() => {
      // Show download options
    }, 2000)
  }

  const handleViewScoreboard = () => {
    if (gameId) {
      window.location.href = `/scoreboard?gameId=${gameId}`
    }
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="container">
      <Header title="Join Game" onBack={handleGoBack} />
      
      <div className="game-info">
        <div className="game-code">
          <span className="game-code-text">Game Code: {gameId || 'Invalid'}</span>
          <span className="status-indicator"></span>
          <span className="qr-icon">📱</span>
        </div>
        <div className="game-mode">
          <span className="game-mode-text">Status:</span>
          <span className="game-mode-value">Download the MGPC app to join this game.</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-btn" onClick={handleDownloadApp}>
          <span>📱</span>
          Download MGPC App to Join
        </button>
        <button className="action-btn" onClick={handleViewScoreboard} style={{ background: '#28a745' }}>
          <span>📊</span>
          View Live Scoreboard
        </button>
      </div>

      <div className="section">
        <div className="section-header">
          Download the MGPC App
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Record your card game scores with ease!
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://apps.apple.com/cn/app/mgpc/id1546733404" 
              className="action-btn"
              style={{ background: '#000', textDecoration: 'none' }}
            >
              🍎 Download for iOS
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.marriagecardgamepointcalculator&hl=en_US" 
              className="action-btn"
              style={{ background: '#01875f', textDecoration: 'none' }}
            >
              🤖 Download for Android
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
