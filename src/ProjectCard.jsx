import { useState, useEffect } from 'react';

export default function ProjectCard({ title, description, tech, image }) {
  const [expanded, setExpanded] = useState(false);
  const [typed, setTyped] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let interval;
    if (expanded) {
      let i = 0;
      interval = setInterval(() => {
        setTyped(description.slice(0, i));
        i++;
        if (i > description.length) clearInterval(interval);
      }, 20);
    } else {
      setTyped('');
    }
    return () => clearInterval(interval);
  }, [expanded, description]);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '2rem',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        backgroundColor: '#fff',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: expanded ? '1rem' : '0' }}>{title}</h3>

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
