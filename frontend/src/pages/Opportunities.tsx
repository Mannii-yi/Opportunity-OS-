import { useState } from 'react'

const allOpportunities = [
  { title: 'Google Summer of Code', org: 'Google', type: 'Fellowship', match: 92, deadline: '15 Apr 2024', skills: ['Python', 'Git', 'Open Source'], stipend: '₹1,50,000' },
  { title: 'Microsoft Engage Mentorship', org: 'Microsoft', type: 'Internship', match: 85, deadline: '20 Apr 2024', skills: ['React', 'Node.js'], stipend: '₹80,000/mo' },
  { title: 'Smart India Hackathon', org: 'Govt of India', type: 'Hackathon', match: 78, deadline: '30 Apr 2024', skills: ['Any'], stipend: '₹1,00,000' },
  { title: 'Reliance Foundation Scholarship', org: 'Reliance', type: 'Scholarship', match: 71, deadline: '10 May 2024', skills: ['CGPA 8+'], stipend: '₹2,00,000' },
  { title: 'ISRO Research Internship', org: 'ISRO', type: 'Research', match: 65, deadline: '5 May 2024', skills: ['C++', 'Python', 'Physics'], stipend: '₹15,000/mo' },
  { title: 'Flipkart Grid 5.0', org: 'Flipkart', type: 'Hackathon', match: 88, deadline: '25 Apr 2024', skills: ['DSA', 'System Design'], stipend: '₹75,000' },
]

const types = ['All', 'Internship', 'Hackathon', 'Scholarship', 'Fellowship', 'Research']

const typeColor: Record<string, string> = {
  Fellowship: '#6C63FF',
  Internship: '#22C55E',
  Hackathon: '#F59E0B',
  Scholarship: '#EC4899',
  Research: '#3B82F6',
  Grant: '#8B5CF6',
}

const Opportunities = () => {
  const [activeType, setActiveType] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allOpportunities.filter((o) => {
    const matchType = activeType === 'All' || o.type === activeType
    const matchSearch = o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.org.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div style={{ background: '#F4F3FF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '1.8rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '6px'
          }}>Opportunities</h1>
          <p style={{ color: '#6B7280' }}>AI-matched opportunities based on your profile</p>
        </div>

        {/* Search */}
        <input
          placeholder="🔍  Search opportunities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '12px 16px',
            borderRadius: '10px', border: '1.5px solid #E5E7EB',
            fontSize: '0.9rem', marginBottom: '16px',
            background: '#fff', outline: 'none',
            boxSizing: 'border-box'
          }}
        />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {types.map((t) => (
            <button key={t} onClick={() => setActiveType(t)} style={{
              padding: '7px 16px', borderRadius: '999px',
              border: '1.5px solid',
              borderColor: activeType === t ? '#6C63FF' : '#E5E7EB',
              background: activeType === t ? '#6C63FF' : '#fff',
              color: activeType === t ? '#fff' : '#6B7280',
              fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer'
            }}>{t}</button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {filtered.map((opp) => (
            <div key={opp.title} style={{
              background: '#fff', borderRadius: '16px',
              padding: '22px', border: '1px solid #E5E7EB',
              boxShadow: '0 2px 12px rgba(108,99,255,0.06)',
              transition: 'box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: '700', fontSize: '0.95rem',
                    color: '#1A1A2E', marginBottom: '4px'
                  }}>{opp.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>{opp.org}</p>
                </div>
                <div style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: '800', fontSize: '1.1rem',
                  color: opp.match > 85 ? '#22C55E' : opp.match > 70 ? '#F59E0B' : '#6B7280'
                }}>{opp.match}%</div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span style={{
                  padding: '3px 10px', borderRadius: '999px',
                  background: (typeColor[opp.type] || '#6C63FF') + '15',
                  color: typeColor[opp.type] || '#6C63FF',
                  fontSize: '0.75rem', fontWeight: '600'
                }}>{opp.type}</span>
                {opp.skills.slice(0, 2).map((s) => (
                  <span key={s} style={{
                    padding: '3px 10px', borderRadius: '999px',
                    background: '#F4F3FF', color: '#6B7280',
                    fontSize: '0.75rem', fontWeight: '500'
                  }}>{s}</span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>
                  📅 Due {opp.deadline} &nbsp;·&nbsp; 💰 {opp.stipend}
                </div>
                <button style={{
                  padding: '7px 16px', borderRadius: '8px',
                  background: '#6C63FF', color: '#fff',
                  fontWeight: '600', fontSize: '0.8rem',
                  border: 'none', cursor: 'pointer'
                }}>Apply →</button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#9CA3AF' }}>
            No opportunities found. Try a different search or filter.
          </div>
        )}
      </div>
    </div>
  )
}

export default Opportunities