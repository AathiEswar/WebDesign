import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

export default function BasicR3FJourney() {
  return (
    <div className='h-screen w-screen'>
      <Canvas>
        <Model />
      </Canvas>
    </div>
  )
}

function Model() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
      <OrbitControls enableZoom={false} />
    </mesh>
  )
}

