import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CoffeeShaderMaterial } from './CoffeeShaderMaterial';

export default function CoffeeBackground() {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[10, 10, 1]} position={[0, 0, -1]}>
        <planeGeometry args={[2, 2]} />
        <coffeeShaderMaterial ref={materialRef} transparent />
    </mesh>

  );
}
