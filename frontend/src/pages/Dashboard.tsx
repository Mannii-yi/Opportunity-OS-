import { Link } from 'react-router-dom'

const stats = [
  { label: 'Matched Opportunities', value: '24', icon: '🎯', color: '#6C63FF' },
  { label: 'Skills Gaps Found', value: '6', icon: '📊', color: '#F59E0B' },
  { label: 'Roadmap Steps', value: '8', icon: '🗺️', color: '#22C55E' },
  { label: 'Opportunity Score', value: '42', icon: '⭐', color: '#EC4899' },
]

const recentOpportunities = [
  { title: 'Google Summer of Code 2024', type: 'Fellowship', match: 92, deadline: '15 Apr' },
  { title: 'Microsoft Engage Mentorship', type: 'Internship', match: 85, deadline: '20 Apr' },
  { title: 'Smart India Hackathon', type: 'Hackathon', match: 78, deadline: '30 Apr' },
  { title: 'Reliance Foundation Scholarship', type: 'Scholarship', match: 71, deadline: '10 May' },
]

const roadmapSteps = [
  { title: 'Learn React.js', type: 'skill', completed: true },
  { title: 'Build Portfolio Project', type: 'project', completed: true },
  { title: 'Improve CGPA to 8.0+', type: 'achievement', completed: false },
  { title: 'Apply to GSoC', type: 'apply', completed: false },
]

const typeColor: Record<string, string> = {
  Fellowship: '#6C63FF',
  Internship: '#22C55E',
  Hackathon: '#F59E0B',
  Scholarship: '#EC4899',
}

const stepIcon: Record<string, string> = {
  skill: '📚',
  project: '💻',
  achievement: '🏆',
  apply: '🚀',
}

const Dashboard = () => {
  return (
    <div style={{ background: '#F4F3FF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '1.8rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '6px'
          }}>Welcome back 👋</h1>
          <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
            Here's your opportunity overview for today.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px', marginBottom: '32px'
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              background: '#fff', borderRadius: '14px',
              padding: '20px', border: '1px solid #E5E7EB',
              boxShadow: '0 2px 12px rgba(108,99,255,0.06)'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{s.icon}</div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '2rem', fontWeight: '800', color: s.color
              }}>{s.value}</div>
              <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          {/* Matched Opportunities */}
          <div style={{
            background: '#fff', borderRadius: '16px',
            padding: '24px', border: '1px solid #E5E7EB',
            boxShadow: '0 2px 12px rgba(108,99,255,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '700', fontSize: '1rem', color: '#1A1A2E' }}>
                Top Matches
              </h2>
              <Link to="/opportunities" style={{ fontSize: '0.8rem', color: '#6C63FF', fontWeight: '600' }}>View all →</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentOpportunities.map((opp) => (
                <div key={opp.title} style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px', borderRadius: '10px',
                  background: '#F4F3FF', border: '1px solid #EDE9FE'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: '#1A1A2E', marginBottom: '4px' }}>
                      {opp.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        padding: '2px 8px', borderRadius: '999px',
                        background: typeColor[opp.type] + '20',
                        color: typeColor[opp.type],
                        fontSize: '0.7rem', fontWeight: '600'
                      }}>{opp.type}</span>
                      <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Due {opp.deadline}</span>
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: '800', fontSize: '1rem',
                    color: opp.match > 85 ? '#22C55E' : opp.match > 70 ? '#F59E0B' : '#6B7280'
                  }}>{opp.match}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap Progress */}
          <div style={{
            background: '#fff', borderRadius: '16px',
            padding: '24px', border: '1px solid #E5E7EB',
            boxShadow: '0 2px 12px rgba(108,99,255,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '700', fontSize: '1rem', color: '#1A1A2E' }}>
                Your Roadmap
              </h2>
              <Link to="/roadmap" style={{ fontSize: '0.8rem', color: '#6C63FF', fontWeight: '600' }}>View full →</Link>
            </div>

            {/* Progress bar */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6B7280', marginBottom: '6px' }}>
                <span>Progress</span>
                <span>2 / 4 completed</span>
              </div>
              <div style={{ height: '8px', background: '#EDE9FE', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '50%', background: 'linear-gradient(90deg, #6C63FF, #8B85FF)', borderRadius: '999px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {roadmapSteps.map((step) => (
                <div key={step.title} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '12px', borderRadius: '10px',
                  background: step.completed ? '#F0FDF4' : '#F9FAFB',
                  border: `1px solid ${step.completed ? '#BBF7D0' : '#E5E7EB'}`
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: step.completed ? '#22C55E' : '#E5E7EB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', color: '#fff', fontWeight: '700', flexShrink: 0
                  }}>
                    {step.completed ? '✓' : stepIcon[step.type]}
                  </div>
                  <span style={{
                    fontSize: '0.875rem', fontWeight: '500',
                    color: step.completed ? '#15803D' : '#1A1A2E',
                    textDecoration: step.completed ? 'line-through' : 'none'
                  }}>{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunity Score CTA */}
        <div style={{
          marginTop: '24px',
          background: 'linear-gradient(135deg, #6C63FF, #8B85FF)',
          borderRadius: '16px', padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '800', color: '#fff', fontSize: '1.2rem', marginBottom: '6px' }}>
              Your Opportunity Score: 42/100
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              Learn React + build a project → unlock 8 more internships
            </p>
          </div>
          <Link to="/roadmap" style={{
            padding: '12px 24px', borderRadius: '10px',
            background: '#fff', color: '#6C63FF',
            fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap'
          }}>
            Boost My Score →
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Dashboard