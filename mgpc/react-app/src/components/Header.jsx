import React from 'react'

const Header = ({ title, gameId }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="MGPC Logo" />
      </div>
      <h1 className="title">{title}</h1>
      {gameId && <div className="game-id">Game: {gameId}</div>}
    </div>
  )
}

export default Header
