import React from 'react'

const Header = ({ title, gameId, gameType }) => {

  const getGameModeName = (gameType) => {
    switch (gameType) {
      case 'MARRIAGE_GAME': return 'Marriage'
      case 'CALLBREAK_GAME': return 'Call Break'
      case 'KITTI_GAME': return 'Kitti'
      default: return 'Marriage'
    }
  }

  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="MGPC Logo" />
      </div>
      <h1 className="title">{title}</h1>
      {gameId && <div className="game-id">{getGameModeName(gameType)} Game Code: <b>{gameId}</b></div>}
    </div>
  )
}

export default Header
