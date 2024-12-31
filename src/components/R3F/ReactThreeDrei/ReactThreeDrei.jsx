import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  Text,
  // used to enable transform props in the canvas itself ( eg blender )
  TransformControls
} from '@react-three/drei'
import { Perf } from 'r3f-perf'

function ReactThreeDrei() {
  const cameraSettings = {
    fov: 75,
    near: 0.01,
    far: 500,
    position: [0, 1, 5]
  }
  return (
    <div className='h-screen w-screen bg-yellow-100'>
      <Canvas
        // device pixel ratio
        dpr={[1, 2]}

        // renderer options
        gl={{
          antialias: false,
        }}
        camera={cameraSettings}
      >
        <Model />
      </Canvas>
    </div>
  )
}

// Some hooks of r3f only works inside Canvas
function Model() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <Perf position='top-left'/>

      {/* make default let other helpers access it and stop it when needed */}
      <OrbitControls makeDefault />
      <directionalLight position={[1, 1, 1]} intensity={10} />

      {/*  to give light in all directions  */}
      <ambientLight intensity={3} />

      <group>
        <mesh position={[2, 0, 0]} ref={cubeRef}>
          {/* args is for sending values during construction */}
          <boxGeometry args={[2, 2, 2]} />
          <meshPhysicalMaterial color={"red"} />
          {/* <OrbitControls enableZoom={false} /> */}
        </mesh>
        <TransformControls object={cubeRef} />
        <mesh ref={sphereRef} position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshPhysicalMaterial color={"green"} />
          <Html
            position={[1, 1, 1]}
            wrapperClass='text-red-300 bg-black p-10 rounded-[20%]'
            center
            distanceFactor={10}
            occlude={[cubeRef, sphereRef]}
          >
            2D Text
          </Html>
        </mesh>
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
          <planeGeometry />
          {/* makes a plane more reflecting  */}
          <MeshReflectorMaterial mirror={1} resolution={1024}/>
        </mesh>
      </group>

      <Float 
        speed={10}
        floatIntensity={5}
      >
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          maxWidth={4}
          textAlign='center'
        >
          THREE.JS IS BEST
          <meshStandardMaterial
            color={"green"}
          />

        </Text>
      </Float>
    </>
  )
}


export default ReactThreeDrei
