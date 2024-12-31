import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// for converting a native imperative js to declaritive jsx
extend({ OrbitControls })


export default function BasicR3FJourney() {
  const cameraSettings = {
    fov: 75,
    near: 0.01,
    far: 500,
    position: [0, 1, 5]
  }
  return (
    <div className='h-screen w-screen'>
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

  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    // delta is the difference in renders in milliseconds
    cubeRef.current.rotation.y += delta

    const angle = state.clock.elapsedTime
    state.camera.position.x = (Math.sin(angle)) * 10
    state.camera.position.z = (Math.cos(angle)) * 10

    camera.lookAt(new THREE.Vector3(0, 0, 0))

  })

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} damping={20} /> */}
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
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshPhysicalMaterial color={"green"} />
        </mesh>
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
          <planeGeometry />
          <meshPhysicalMaterial color={"blue"}
          // side={THREE.DoubleSide}
          />
        </mesh>
      </group>
      <CustomBufferModel />
    </>
  )
}


function CustomBufferModel() {
  const bufferRef = useRef();

  const verticesCount = 10 * 3 // 10 triangles with each having 3 vertices

  useEffect(() => {
    bufferRef.current.computeVertexNormals();
  }, [])

  // optimize with memo 
  const bufferArray = useMemo(() => {
    const bufferArray = new Float32Array(verticesCount * 3);

    for (let i = 0; i < bufferArray.length; i++) {
      bufferArray[i] = (Math.random() - 0.5) * 3
    }

    return bufferArray;
  }, [])

  return (
    <>
      <mesh>
        <bufferGeometry ref={bufferRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            array={bufferArray}
            itemSize={3}
          />
        </bufferGeometry>
        <meshBasicMaterial side={THREE.DoubleSide} color={"yellow"} />
      </mesh>
    </>
  );
}
