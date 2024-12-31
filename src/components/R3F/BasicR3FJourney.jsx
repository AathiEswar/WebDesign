import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// for converting a native imperative js to declaritive jsx
extend({ OrbitControls })


export default function BasicR3FJourney() {
  return (
    <div className='h-screen w-screen'>
      <Canvas>
        <Model />
      </Canvas>
    </div>
  )
}

// Some hooks of r3f only works inside Canvas
function Model() {
  const cubeRef = useRef();

  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    // delta is the difference in renders in milliseconds
    cubeRef.current.rotation.y += delta
  })

  return (
    <group>
      <mesh position={[2, 0, 0]} ref={cubeRef}>
        {/* args is for sending values during construction */}
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
        <orbitControls args={[camera, gl.domElement]} damping={20} />
        {/* <OrbitControls enableZoom={false} /> */}
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh scale={10} rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
        <planeGeometry />
        <meshNormalMaterial
        // side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

