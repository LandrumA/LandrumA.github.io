import { Canvas } from '@react-three/fiber';
import CoffeeBackground from './CoffeeBackground';
import Projects from './Projects';
import AboutAndContact from './AboutAndContact';

import { useEffect, useState } from 'react';

function App() {
  const fullText = "Mathematics · Machine Learning · Theory Applied";
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <Canvas gl={{ alpha: true }}>
          <CoffeeBackground />
        </Canvas>
      </div>

      {/* Hero Section */}
      <main>
        <section
          style={{
            height: '100vh',
            width: '100%',
            backgroundColor: 'transparent',
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Landrum Anderson</h1>
            <p style={{ fontSize: '1.25rem' }}>
              {text}
              <span style={{ visibility: cursor ? 'visible' : 'hidden' }}>|</span>
            </p>
          </div>
        </section>

        {/* Modular Projects Component */}
        <Projects />
        <AboutAndContact />
      </main>
    </>
  );
}

export default App;
