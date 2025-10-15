import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scoreboard from './components/Scoreboard'
import Leaderboard from './components/Leaderboard'
import Join from './components/Join'
import Transfer from './components/Transfer'
import Home from './components/Home'

function App() {
  return (
    <Router 
      basename="/mgpc"
      future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </Router>
  )
}

export default App
