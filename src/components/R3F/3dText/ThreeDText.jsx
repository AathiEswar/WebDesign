import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

function ThreeDText() {
  return (
    <div className='w-screen h-screen'>
      <Canvas

      >
        <color attach={"background"} args={["ivory"]} />
        <Model />
      </Canvas>
    </div>
  )
}

function Model() {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256)

  // const [texture, setTexture] = useState();
  // const [material, setMaterial] = useState();

  const donutRef = useRef([]);

  useEffect(() => {
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, [])

  useFrame((state, delta) => {
    for (const donut of donutRef.current) {
      donut.rotation.y += delta * 0.3
    }
  })

  return (
    <>
      <Perf />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshNormalMaterial/>
      </mesh> */}

      {/* ref has the entire component */}
      {/* <torusGeometry ref={setTexture} />
      <meshMatcapMaterial ref={setMaterial}  matcap={matcapTexture} /> */}

      <Center>
        <Text3D font={"/public/helvetiker_regular.typeface.json"} >
          From R3F

          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>

      {
        [...Array(100)].map((_, index) => (
          <mesh key={index} scale={0.4} geometry={geometry} material={material} position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}

            ref={(donut) => donutRef.current[index] = donut}

            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              0,
            ]}
          >
          </mesh>
        ))
      }
      {/* <mesh scale={1}>
        <torusGeometry />
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh> */}
    </>
  )
}

export default ThreeDText
