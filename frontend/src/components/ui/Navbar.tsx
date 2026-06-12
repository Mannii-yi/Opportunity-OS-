import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav style={{
      background: '#ffffff',
      borderBottom: '1px solid #E5E7EB',
      padding: '0 24px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 16px rgba(108,99,255,0.06)'
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: 'linear-gradient(135deg, #6C63FF, #8B85FF)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: '800', fontSize: '14px'
        }}>O</div>
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '800', fontSize: '1.1rem', color: '#1A1A2E' }}>
          Opportunity<span style={{ color: '#6C63FF' }}>OS</span>
        </span>
      </Link>

      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {[
          { path: '/dashboard', label: 'Dashboard' },
          { path: '/opportunities', label: 'Opportunities' },
          { path: '/roadmap', label: 'Roadmap' },
          { path: '/profile', label: 'Profile' },
        ].map(({ path, label }) => (
          <Link key={path} to={path} style={{
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: location.pathname === path ? '#6C63FF' : '#6B7280',
            background: location.pathname === path ? '#EDE9FE' : 'transparent',
            transition: 'all 0.15s'
          }}>{label}</Link>
        ))}
        <Link to="/profile" style={{
          marginLeft: '8px',
          padding: '8px 20px',
          borderRadius: '8px',
          background: '#6C63FF',
          color: '#fff',
          fontSize: '0.875rem',
          fontWeight: '600',
        }}>Get Started</Link>
      </div>
    </nav>
  )
}

export default Navbar