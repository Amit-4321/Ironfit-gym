export default function Gallery() {
    return (
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(135deg, #0a0a0a, #1a0a2e)',
        color: 'white'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>
          Gallery
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" alt="Gym 1" style={{ width: '100%', borderRadius: '1rem', cursor: 'pointer' }} />
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800" alt="Gym 2" style={{ width: '100%', borderRadius: '1rem', cursor: 'pointer' }} />
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800" alt="Gym 3" style={{ width: '100%', borderRadius: '1rem', cursor: 'pointer' }} />
        </div>
      </div>
    )
  }