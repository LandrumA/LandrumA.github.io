import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const CoffeeShaderMaterial = shaderMaterial(
  { uTime: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    precision mediump float;
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      float wave = sin((vUv.x * 10.0) + uTime) * cos((vUv.y * 10.0) + uTime);
      float alpha = 0.3 + 0.2 * wave;  // Try 0.3–0.5 to see the background better
      gl_FragColor = vec4(0.4, 0.3, 0.2, alpha);  // faded brown
    }
  `
);

extend({ CoffeeShaderMaterial });

export { CoffeeShaderMaterial };
