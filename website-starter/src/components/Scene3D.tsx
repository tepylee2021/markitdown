import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function HeroMesh() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 4) * 0.3;
    mesh.current.rotation.y += 0.0025;

    const { x, y } = state.pointer;
    mesh.current.rotation.x += y * 0.15;
    mesh.current.rotation.y += x * 0.15;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.35} position={[1.6, -0.2, 0]}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#6d4dff"
          attach="material"
          distort={0.4}
          speed={1.8}
          roughness={0.35}
          metalness={0.1}
          flatShading
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#9a8cff" size={0.02} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} color="#a78bff" />
        <pointLight position={[-4, -2, -3]} intensity={1.2} color="#4cc9ff" />
        <pointLight position={[2, -3, 3]} intensity={0.6} color="#ff6ec7" />
        <HeroMesh />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
