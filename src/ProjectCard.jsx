import { useState, useEffect } from 'react';

export default function ProjectCard({ title, description, tech, image }) {
  const [expanded, setExpanded] = useState(false);
  const [typed, setTyped]     = useState('');
  const [cursor, setCursor]   = useState(true);

  /* typing effect -------------------------------------------------------- */
  useEffect(() => {
    let interval;
    if (expanded) {
      let i = 0;
      interval = setInterval(() => {
        setTyped(description.slice(0, i));
        i += 1;
        if (i > description.length) clearInterval(interval);
      }, 20);
    } else {
      setTyped('');
    }
    return () => clearInterval(interval);
  }, [expanded, description]);

  /* blinking cursor ------------------------------------------------------ */
  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  /* styles --------------------------------------------------------------- */
  const cardStyle = {
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '2rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'all 0.35s ease',
    overflow: 'hidden',
    display: expanded ? 'block' : 'flex',
    alignItems: expanded ? 'initial' : 'center',
  };

  const imageStyle = expanded
    ? { width: '100%', height: 'auto', objectFit: 'contain' }
    : { width: '120px', height: '80px', objectFit: 'cover', flexShrink: 0 };

  const bodyStyle = {
    padding: expanded ? '1rem' : '0 1rem',
    flex: 1,
  };

  return (
    <div style={cardStyle} onClick={() => setExpanded(!expanded)}>
      <img src={image} alt={title} style={imageStyle} />

      <div style={bodyStyle}>
        <h3 style={{ fontSize: '1.25rem', margin: expanded ? '0 0 1rem 0' : 0 }}>
          {title}
        </h3>

        {expanded && (
          <>
            <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#333' }}>
              {typed}
              <span style={{ visibility: cursor ? 'visible' : 'hidden' }}>|</span>
            </p>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              {tech.join(' · ')}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
