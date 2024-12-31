import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

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
    <group>
      <mesh position={[2,0,0]}>
        {/* args is for sending values during construction */}
        <boxGeometry args={[2, 2, 2]}/>
        <meshNormalMaterial />
        <OrbitControls enableZoom={false} />
      </mesh>
      <mesh position={[-2,0,0]}>
        <sphereGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh scale={10} rotation-x={-Math.PI * 0.5} position={[0,-1,0]}>
        <planeGeometry/>
        <meshNormalMaterial
          // side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

