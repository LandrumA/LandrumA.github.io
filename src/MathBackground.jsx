import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MathBackground() {
  const groupRef = useRef();

  // Create a huge parametric square-style mesh
  const curves = [...Array(80)].map((_, i) => {
    const points = [];
    const a = 1 + i * 0.04;
    const b = 2 + i * 0.035;
    const delta = i * 0.1;

    for (let t = 0; t < Math.PI * 2; t += 0.02) {
      const radius = 25; // MASSIVE scaling
      const x = Math.sin(a * t + delta) * radius;
      const y = Math.sin(b * t) * radius;
      points.push(new THREE.Vector3(x, y, 0));
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  });

  // Gentle slow rotation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.elapsedTime * 0.015;
    }
  });

  return (
    <group ref={groupRef} scale={[3.5, 3.5, 1]}>
      {curves.map((geo, idx) => (
        <line key={idx} geometry={geo}>
          <lineBasicMaterial
            attach="material"
            color={new THREE.Color(0x4e342e).offsetHSL(0, 0, idx * 0.002)}
            transparent
            opacity={0.06 + (idx % 6) * 0.015}
          />
        </line>
      ))}
    </group>
  );
}
