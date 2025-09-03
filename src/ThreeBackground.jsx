import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -1]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" transparent opacity={0.7} />
    </mesh>
  );
}

function AnimatedCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, -1]}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.6} />
    </mesh>
  );
}

function ParticleCloud() {
  const pointsRef = useRef();
  
  // Create simple particle positions
  const particlePositions = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < 100; i++) {
      positions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
        }}
        style={{
          background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 70%, #020617 100%)'
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />
        
        <AnimatedSphere />
        <AnimatedCube />
        <ParticleCloud />
      </Canvas>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/20 pointer-events-none" />
    </div>
  );
}

export default ThreeBackground;
