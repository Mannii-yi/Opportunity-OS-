import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Roadmap from './pages/Roadmap'
import Opportunities from './pages/Opportunities'
import Navbar from './components/ui/Navbar'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App