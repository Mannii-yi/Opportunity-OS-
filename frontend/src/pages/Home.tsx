import { Link } from 'react-router-dom'

const steps = [
  { num: '1', title: 'Create Profile', desc: 'Add your skills, CGPA, interests and goals' },
  { num: '2', title: 'AI Analysis', desc: 'Our AI maps your profile to opportunities' },
  { num: '3', title: 'Get Roadmap', desc: 'Receive a personalized step-by-step plan' },
  { num: '4', title: 'Unlock Opportunities', desc: 'Apply smart and achieve your dream career' },
]

const features = [
  { icon: '🎯', title: 'AI Opportunity Matching', desc: 'Find opportunities that truly match your skills, interests and goals using AI.' },
  { icon: '📊', title: 'Opportunity Gap Analysis', desc: 'Identify what\'s missing between you and your goals with smart gap insights.' },
  { icon: '🗺️', title: 'Personalized Roadmap', desc: 'Get a step-by-step roadmap tailored to your profile to build skills and achieve more.' },
  { icon: '🔓', title: 'Future Eligibility Engine™', desc: 'Predict and unlock future opportunities you are eligible for.' },
]

const Home = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #F4F3FF 0%, #EDE9FE 50%, #F4F3FF 100%)',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(108,99,255,0.08)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(139,133,255,0.1)',
            filter: 'blur(60px)',
          }}
        />

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: '#EDE9FE',
              color: '#6C63FF',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginBottom: '24px',
              border: '1px solid #C4B5FD',
            }}
          >
            🚀 The AI-Powered Career GPS for Students
          </div>

          <h1
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#1A1A2E',
              lineHeight: '1.15',
              marginBottom: '20px',
            }}
          >
            Stop Searching.<br />
            <span style={{ color: '#6C63FF' }}>Start Preparing.</span>
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#6B7280',
              maxWidth: '540px',
              margin: '0 auto 36px',
              lineHeight: '1.7',
            }}
          >
            Your personal AI career strategist that discovers opportunities, identifies gaps,
            and creates a personalized roadmap to your future.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/dashboard"
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                background: '#6C63FF',
                color: '#fff',
                fontWeight: '700',
                fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(108,99,255,0.35)',
                display: 'inline-block',
              }}
            >
              Get Started Free →
            </Link>
            <Link
              to="/opportunities"
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                border: '1.5px solid #C4B5FD',
                color: '#6C63FF',
                fontWeight: '600',
                fontSize: '1rem',
                background: '#fff',
                display: 'inline-block',
              }}
            >
              Browse Opportunities
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              marginTop: '52px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { val: '500+', label: 'Opportunities' },
              { val: 'AI', label: 'Powered Matching' },
              { val: '100%', label: 'Personalized' },
            ].map(({ val, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: '#6C63FF',
                  }}
                >
                  {val}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: '500' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#6C63FF', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            The Problem
          </p>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: '800',
              color: '#1A1A2E',
              marginBottom: '16px',
            }}
          >
            Opportunities Exist.<br />
            <span style={{ color: '#6C63FF' }}>Discovery Doesn’t.</span>
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '500px', margin: '0 auto 48px', lineHeight: '1.7' }}>
            Students spend hours searching across LinkedIn, Internshala, WhatsApp groups — yet
            still miss the right opportunities at the right time.
          </p>

          <div
            style={{
              display: 'inline-block',
              padding: '20px 32px',
              background: '#FEF9C3',
              borderRadius: '14px',
              border: '1px solid #FDE68A',
              color: '#92400E',
              fontWeight: '600',
              fontSize: '1rem',
            }}
          >
            ⚠️ The problem is not opportunity scarcity — it’s{' '}
            <span style={{ color: '#6C63FF' }}>opportunity fragmentation.</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#F4F3FF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6C63FF', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Why It Works
          </p>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: '800',
              color: '#1A1A2E',
              marginBottom: '24px',
            }}
          >
            Everything you need to move from uncertainty to action
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {features.map((feature) => (
              <article
                key={feature.title}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 2px 16px rgba(108,99,255,0.08)',
                  border: '1px solid #E5E7EB',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{feature.icon}</div>
                <h3 style={{ color: '#1A1A2E', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: '1.6' }}>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6C63FF', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            How It Works
          </p>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: '800',
              color: '#1A1A2E',
              marginBottom: '48px',
            }}
          >
            From Discovery → Strategy → Action
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {steps.map((step) => (
              <article
                key={step.num}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '28px 20px',
                  boxShadow: '0 2px 16px rgba(108,99,255,0.08)',
                  border: '1px solid #E5E7EB',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#6C63FF',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    marginBottom: '14px',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ color: '#1A1A2E', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #6C63FF 0%, #5148D6 100%)', color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800', marginBottom: '14px' }}>
            Ready to turn your profile into a winning roadmap?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '640px', margin: '0 auto 24px', lineHeight: '1.7' }}>
            Start with your profile, discover better-fit opportunities, and build the skills that unlock your next step.
          </p>
          <Link
            to="/dashboard"
            style={{
              display: 'inline-block',
              background: '#fff',
              color: '#6C63FF',
              padding: '14px 24px',
              borderRadius: '10px',
              fontWeight: '700',
              textDecoration: 'none',
            }}
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home