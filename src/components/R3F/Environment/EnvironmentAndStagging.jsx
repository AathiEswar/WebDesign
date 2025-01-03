import { BakeShadows, OrbitControls, SoftShadows, useHelper } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import React, { useRef } from 'react'
import { MeshStandardMaterial } from 'three';
import * as THREE from 'three'

// We should mention which object should caste and receive shadow
// Enable shadows in canvas

//Acumulative Shadows 
// Contact Shadows

function EnvironmentAndStagging() {

  function onCreate(state) {
    // colors the entire scene with one color and then draws the other mesh
    state.gl.setClearColor("#fefefe")

    // with scene
    //state.scene.background = new THREE.Color("purple")
  }

  return (
    <div className='h-screen w-screen'>
      <Canvas
        camera={{
          position: [0, 1, 5]
        }}
        // executes after everything in canvas loaded ( use effect )
        onCreated={onCreate}
        shadows
      >
        {/* add any native property and attach it  */}
        <color args={["ivory"]} attach={"background"} />
        <Model />
      </Canvas>
    </div>
  )
}

function Model() {
  const cubeRef = useRef();
  const lightRef = useRef();

  useHelper(lightRef, THREE.DirectionalLightHelper, 1, new THREE.Color("red"))

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * Math.PI * 0.3
  })
  return (
    <>
      <Perf position='top-left' />
      {/* tells the renderer to calculate shadows only once and use it for every frame in matcap */}
      <BakeShadows />
      <SoftShadows samples={25} size={5} focus={0} />

      <directionalLight
        // access properties of native object with props and '-'
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={1}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-near={1}
        shadow-camera-far={5}
        castShadow position={[0, 1, 1]}
        intensity={4.5}
        ref={lightRef} />
      <ambientLight intensity={3.5} />

      <OrbitControls />

      <group>
        <mesh castShadow position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color={'red'} />
        </mesh>

        <mesh castShadow position={[2, 0, 0]} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color={"blue"} />
        </mesh>

        <mesh receiveShadow position={[0, -1, 0]} scale={8} rotation-x={-Math.PI * 0.5}>
          <planeGeometry />
          <meshStandardMaterial color={"yellow"} />
        </mesh>

      </group>
    </>
  );
}

export default EnvironmentAndStagging
