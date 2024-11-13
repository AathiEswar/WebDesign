import { Canvas, useFrame } from '@react-three/fiber'
import { progress, useScroll, useSpring, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

function ScrollGesture() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  return (
    <div ref={container} className='h-[500dvh]'>
      <div className='h-screen sticky top-0'>
        <Canvas>
          <ambientLight intensity={2} />
          <directionalLight position={[1, 2, 3]} />
          <ScrollGeometryMesh progress={scrollYProgress} />
        </Canvas>
      </div>
    </div>
  )
}

function ScrollGeometryMesh({ progress }) {
  const meshRef = useRef();
  const transformProgress = useTransform(progress, [0, 1], [0, 5])
  const rotationProgress = useSpring(transformProgress, { damping: 20 });


  useFrame(() => {
    const rotation = rotationProgress.get()
    meshRef.current.rotation.y = rotation;
    meshRef.current.rotation.x = rotation;
    const scaleValue = 1 + rotation * 0.1; 
    meshRef.current.scale.set(scaleValue, scaleValue, scaleValue);
  });

  return (
    <motion.mesh ref={meshRef}>
      <meshStandardMaterial color={'green'} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
    </motion.mesh>
  )
}

export default ScrollGesture
