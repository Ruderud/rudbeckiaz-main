'use client';

import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements, PerspectiveCameraProps } from '@react-three/fiber';
import { CameraShake, OrbitControls } from '@react-three/drei';

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  //   useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const Floor = (props: ThreeElements['mesh']) => {
  return (
    <mesh {...props} receiveShadow>
      <planeGeometry args={[5, 5]} />
    </mesh>
  );
};

const ConcertHall = () => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  return (
    <div className="w-screen h-[94vh]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Floor position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <OrbitControls makeDefault maxDistance={5} />
      </Canvas>
    </div>
  );
};

export default ConcertHall;
