const steps = [
  { title: 'Learn React.js', desc: 'Build foundational frontend skills with React hooks and components', type: 'skill', deadline: '2 weeks', completed: true, unlocks: '+8 Internships' },
  { title: 'Build Portfolio Project', desc: 'Create a full-stack project to demonstrate your skills to recruiters', type: 'project', deadline: '4 weeks', completed: true, unlocks: '+5 Hackathons' },
  { title: 'Improve CGPA to 8.0+', desc: 'Many fellowships and scholarships require a minimum CGPA threshold', type: 'achievement', deadline: '1 semester', completed: false, unlocks: '+3 Scholarships' },
  { title: 'Apply to GSoC', desc: 'You are now eligible — submit your proposal before the deadline', type: 'apply', deadline: '15 Apr', completed: false, unlocks: 'Fellowship Unlocked' },
  { title: 'Learn System Design', desc: 'Required for senior internships and full-time roles at top companies', type: 'skill', deadline: '6 weeks', completed: false, unlocks: '+4 Senior Roles' },
]

const typeColor: Record<string, string> = {
  skill: '#6C63FF',
  project: '#22C55E',
  achievement: '#F59E0B',
  apply: '#EC4899',
}

const typeLabel: Record<string, string> = {
  skill: 'Learn',
  project: 'Build',
  achievement: 'Achieve',
  apply: 'Apply',
}

const Roadmap = () => {
  const completed = steps.filter((s) => s.completed).length

  return (
    <div style={{ background: '#F4F3FF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '1.8rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '6px'
          }}>Your Roadmap 🗺️</h1>
          <p style={{ color: '#6B7280', marginBottom: '16px' }}>
            Personalized plan to reach your dream career
          </p>

          {/* Progress */}
          <div style={{
            background: '#fff', borderRadius: '12px',
            padding: '16px 20px', border: '1px solid #E5E7EB'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#6B7280', marginBottom: '8px' }}>
              <span>Overall Progress</span>
              <span style={{ fontWeight: '700', color: '#6C63FF' }}>{completed}/{steps.length} steps</span>
            </div>
            <div style={{ height: '10px', background: '#EDE9FE', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${(completed / steps.length) * 100}%`,
                background: 'linear-gradient(90deg, #6C63FF, #8B85FF)',
                borderRadius: '999px',
                transition: 'width 0.6s ease'
              }} />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={step.title} style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>

              {/* Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: step.completed ? '#22C55E' : '#fff',
                  border: `2px solid ${step.completed ? '#22C55E' : typeColor[step.type]}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '800', fontSize: '0.85rem',
                  color: step.completed ? '#fff' : typeColor[step.type],
                  zIndex: 1
                }}>
                  {step.completed ? '✓' : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    width: '2px', flex: 1, minHeight: '40px',
                    background: step.completed ? '#22C55E' : '#E5E7EB',
                    margin: '4px 0'
                  }} />
                )}
              </div>

              {/* Card */}
              <div style={{
                flex: 1, background: '#fff',
                borderRadius: '14px', padding: '18px 20px',
                border: `1px solid ${step.completed ? '#BBF7D0' : '#E5E7EB'}`,
                boxShadow: '0 2px 12px rgba(108,99,255,0.05)',
                marginBottom: '4px',
                opacity: step.completed ? 0.85 : 1
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        padding: '2px 8px', borderRadius: '999px',
                        background: typeColor[step.type] + '15',
                        color: typeColor[step.type],
                        fontSize: '0.7rem', fontWeight: '700'
                      }}>{typeLabel[step.type]}</span>
                      <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>⏱ {step.deadline}</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: '700', fontSize: '0.95rem',
                      color: '#1A1A2E',
                      textDecoration: step.completed ? 'line-through' : 'none'
                    }}>{step.title}</h3>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: '700',
                    color: '#22C55E', background: '#F0FDF4',
                    padding: '4px 10px', borderRadius: '999px',
                    border: '1px solid #BBF7D0', whiteSpace: 'nowrap', marginLeft: '12px'
                  }}>🔓 {step.unlocks}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.5' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap