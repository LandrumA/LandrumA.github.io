export default function AboutAndContact() {
    return (
      <section
        style={{
          padding: '4rem 1rem',
          backgroundColor: '#fdfdfd',
          fontFamily: '"IBM Plex Mono", monospace',
          color: '#000',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              borderBottom: '1px solid #ccc',
              paddingBottom: '0.5rem',
              textAlign: 'center',
            }}
          >
            About Me
          </h2>
  
          <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
            I'm Landrum Anderson, a mathematics undergraduate with a concentration in computer science,
            specializing in machine learning and theoretical systems. My work focuses on interpretable
            speech classification, mathematical modeling, and optimization. I strive to build systems that are
            both rigorous and usable — blending theory with application.
          </p>
  
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact</h3>
  
          <p style={{ marginBottom: '0.25rem' }}>
            Email: <a href="mailto:andersonl54@lsus.edu" style={{ color: '#0055cc' }}>andersonl54@lsus.edu</a>
          </p>
          <p style={{ marginBottom: '0.25rem' }}>
            GitHub: <a href="https://github.com/LandrumA" target="_blank" rel="noopener noreferrer" style={{ color: '#0055cc' }}>
              github.com/LandrumA
            </a>
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            LinkedIn: <a href="https://www.linkedin.com/in/landrum-anderson" target="_blank" rel="noopener noreferrer" style={{ color: '#0055cc' }}>
              linkedin.com/in/landrum-anderson
            </a>
          </p>
  
          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              border: '1px solid #0055cc',
              borderRadius: '4px',
              color: '#0055cc',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={e => (e.target.style.backgroundColor = '#eef6ff')}
            onMouseOut={e => (e.target.style.backgroundColor = 'transparent')}
          >
            Download My Résumé (PDF)
          </a>
        </div>
      </section>
    );
  }
  