import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from './Header'
import FooterNote from './FooterNote'

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
      window.location.href = `/mgpc/stream/scoreboard?gameId=${gameId}`
    }
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="container">
      <Header title="MGPC Stream" onBack={handleGoBack} />




      {/* Main join section */}
      <div className="join-hero">
        <div className="join-hero-title">Join MGPC the Game</div>
        <div className="join-hero-sub">Download the MGPC app to join the games and record your scores!</div>

        <div className="join-code-pill">
          <span className="pill-label">Game Code</span>
          <span className="pill-value">{gameId || 'Invalid'}</span>
        </div>

        <div className="join-features">
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <span className="feature-text">Record your scores</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🏆</span>
            <span className="feature-text">Track your wins</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span className="feature-text">View live standings</span>
          </div>
        </div>

        <div className="join-cta">
          <button className="full-width-btn" onClick={handleDownloadApp}>
            <span className="btn-icon">📱</span>
            <span className="btn-text">Download App & Join</span>
            <span className="btn-arrow">»</span>
          </button>
        </div>

        <div className="store-badges">
          <a href="https://apps.apple.com/cn/app/mgpc/id1546733404" className="store-badge" rel="noopener noreferrer">
            <img src="/assets/img/Download_on_the_App_Store_Badge.webp" alt="Download on Apple App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.marriagecardgamepointcalculator&hl=en_US" className="store-badge" rel="noopener noreferrer">
            <img src="/assets/img/Google_Play_Store_badge_EN.webp" alt="Download on Google Play Store" />
          </a>
        </div>


        {/* Live preview section */}
        <div className="join-preview">
          <div className="preview-header">
            <span className="preview-icon">📊</span>
            <span className="preview-title">Live Game Data</span>
          </div>
          <div className="preview-subtitle">See real-time scores and standings in browser, but the app lets you participate and record your own scores!</div>
          <button className="preview-btn" onClick={handleViewScoreboard}>
            <span className="btn-icon">👁️</span>
            <span className="btn-text">View Live Scoreboard</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>

        <FooterNote />

        {/* 
        <div className="join-note">
          <span className="note-icon">💡</span>
          <span className="note-text">You can view live scores in your browser, but the app lets you participate and record your own scores!</span>
        </div> */}
      </div>
    </div>
  )
}

export default Join
