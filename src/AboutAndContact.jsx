import React from 'react';
import { Canvas } from '@react-three/fiber';
import MathBackground from './MathBackground';

export default function AboutAndContact() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '50vh', overflow: 'hidden' }}>
      {/* Animated Background – shorter height */}
      <Canvas
        gl={{ alpha: true }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70vh', // controls how far background extends downward
          zIndex: 0,
          pointerEvents: 'none',
        }}
        camera={{ position: [0, 0, 30], fov: 45 }}
      >
        <MathBackground />
      </Canvas>

      {/* Foreground Content */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '4rem 1rem',
          minHeight: '50vh',
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
            speech classification, mathematical modeling, and optimization. I strive to build systems that
            are both rigorous and usable — blending theory with application.
          </p>

          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact</h3>
          <p style={{ marginBottom: '0.5rem' }}>
            Email:{' '}
            <a href="mailto:andersonl54@lsus.edu" style={{ color: '#4e342e', fontWeight: 600 }}>
              andersonl54@lsus.edu
            </a>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            GitHub:{' '}
            <a
              href="https://github.com/LandrumA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d4037', fontWeight: 600 }}
            >
              github.com/LandrumA
            </a>
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/landrum-anderson"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3e2723', fontWeight: 600 }}
            >
              linkedin.com/in/landrum-anderson
            </a>
          </p>

          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              border: '1px solid #4e342e',
              borderRadius: '4px',
              color: '#4e342e',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(78, 52, 46, 0.1)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Download My Résumé (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
