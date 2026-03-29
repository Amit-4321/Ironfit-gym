export default function Demo() {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0a, #1a0a2e)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Demo Video Player
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
            Watch our AI-powered gym demo here!
          </p>
          <iframe 
            width="800" 
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Gym Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ maxWidth: '100%', marginTop: '2rem', borderRadius: '1rem' }}
          />
        </div>
      </div>
    )
  }