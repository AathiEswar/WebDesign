import { Center, OrbitControls, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import React from 'react'

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
  return (
    <>
      <Perf />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshNormalMaterial/>
      </mesh> */}

      <Center>
        <Text3D font={"/public/helvetiker_regular.typeface.json"} >
          From R3F

          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}

export default ThreeDText
