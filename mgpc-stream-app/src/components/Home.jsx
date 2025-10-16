import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const Home = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const gameId = searchParams.get('gameId')
  const code = searchParams.get('code')
  const view = searchParams.get('view')

  React.useEffect(() => {
    // Redirect based on URL parameters
    if (gameId) {
      if (view === 'leaderboard') {
        navigate(`/leaderboard?gameId=${gameId}`)
      } else {
        navigate(`/join?gameId=${gameId}`)
      }
    } else if (code) {
      navigate(`/transfer?code=${code}`)
    }
  }, [gameId, code, view, navigate])

  return (
    <div className="container">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          maxWidth: '500px',
          width: '100%'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 20px',
            background: 'linear-gradient(135deg, #AF1919 0%, #2C3E50 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px'
          }}>
            🎮
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#2C3E50', marginBottom: '10px' }}>
            MGPC
          </h1>
          <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
            Marriage Game Point Calculator
          </p>

          <div className="loading">
            <div className="spinner"></div>
            <p>🔄 Processing your request...</p>
          </div>

          <div style={{
            background: '#f8f9fa',
            borderRadius: '15px',
            padding: '25px',
            margin: '25px 0'
          }}>
            <h3 style={{ color: '#2C3E50', marginBottom: '15px', fontSize: '18px' }}>
              Download the MGPC App
            </h3>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Record your card game scores with ease!
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://apps.apple.com/cn/app/mgpc/id1546733404"
                style={{
                  background: '#000',
                  color: 'white',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                🍎 Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.marriagecardgamepointcalculator&hl=en_US"
                style={{
                  background: '#01875f',
                  color: 'white',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                🤖 Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
