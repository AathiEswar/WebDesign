import { Canvas, useFrame } from '@react-three/fiber'
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d'
import React, { useEffect, useRef } from 'react'

function MouseFollow() {
  return (
    <div className='h-screen'>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[3, 1, 2]} />
        <RenderMesh />
      </Canvas>
    </div>
  )
}

function RenderMesh() {
  const squareMesh = useRef(null);
  const options = {
    damping : 20 ,
  }

  const mouse = {
    x: useSpring(useMotionValue(0) , options),
    y: useSpring(useMotionValue(0) , options),
  }
  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouse.x.set(-0.5 + (clientX / innerWidth));
    mouse.y.set(-0.5 + (clientY / innerHeight));
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [])


  return (
    <motion.mesh ref={squareMesh} rotation-x={mouse.y} rotation-y={mouse.x} >
      <meshStandardMaterial color={'orange'} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
    </motion.mesh>
  )
}

export default MouseFollow
