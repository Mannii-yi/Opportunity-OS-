import { useState } from 'react'

const Profile = () => {
  const [form, setForm] = useState({
    name: 'Manshi Rawat',
    email: 'manshi@example.com',
    college: 'Delhi Technological University',
    branch: 'Computer Science',
    year: '3',
    cgpa: '7.8',
    skills: 'Python, HTML, CSS, React',
    interests: 'Web Development, AI, Open Source',
    goals: 'Software Engineer at a top tech company',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px',
    borderRadius: '8px', border: '1.5px solid #E5E7EB',
    fontSize: '0.9rem', background: '#fff',
    outline: 'none', boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif', color: '#1A1A2E'
  }

  const labelStyle = {
    display: 'block', fontSize: '0.8rem',
    fontWeight: '600', color: '#6B7280',
    marginBottom: '6px', textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
  }

  return (
    <div style={{ background: '#F4F3FF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '1.8rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '6px'
          }}>Your Profile</h1>
          <p style={{ color: '#6B7280' }}>Keep your profile updated for better AI matches</p>
        </div>

        {/* Avatar */}
        <div style={{
          background: '#fff', borderRadius: '16px',
          padding: '24px', border: '1px solid #E5E7EB',
          marginBottom: '20px', display: 'flex',
          alignItems: 'center', gap: '20px'
        }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6C63FF, #8B85FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.8rem', fontWeight: '800', color: '#fff',
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
            {form.name.charAt(0)}
          </div>
          <div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: '#1A1A2E' }}>{form.name}</h2>
            <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>{form.college}</p>
            <div style={{
              display: 'inline-block', marginTop: '6px',
              padding: '3px 10px', borderRadius: '999px',
              background: '#EDE9FE', color: '#6C63FF',
              fontSize: '0.75rem', fontWeight: '600'
            }}>Opportunity Score: 42/100</div>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '700', marginBottom: '20px', color: '#1A1A2E' }}>
            Personal Details
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input name="email" value={form.email} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>College</label>
              <input name="college" value={form.college} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Branch</label>
              <input name="branch" value={form.branch} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Year</label>
              <select name="year" value={form.year} onChange={handleChange} style={inputStyle}>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>CGPA</label>
              <input name="cgpa" value={form.cgpa} onChange={handleChange} style={inputStyle} placeholder="e.g. 8.5" />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Skills (comma separated)</label>
            <input name="skills" value={form.skills} onChange={handleChange} style={inputStyle} placeholder="e.g. Python, React, ML" />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Interests</label>
            <input name="interests" value={form.interests} onChange={handleChange} style={inputStyle} placeholder="e.g. Web Dev, AI, Open Source" />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Career Goal</label>
            <textarea name="goals" value={form.goals} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="What's your dream career?" />
          </div>

          <button style={{
            width: '100%', padding: '13px',
            borderRadius: '10px', background: '#6C63FF',
            color: '#fff', fontWeight: '700',
            fontSize: '0.95rem', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(108,99,255,0.3)'
          }}>
            Save Profile & Regenerate Matches
          </button>
        </div>

      </div>
    </div>
  )
}

export default Profile