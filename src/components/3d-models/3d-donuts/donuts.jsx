import { Environment, OrbitControls, useGLTF, Text, Float } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber'
import { useControls } from 'leva';
import React from 'react'
import { Model } from './model';
import styles from './style.module.scss'

function DonutsMain() {
  return (
    <div className={`flex h-screen bg-[#E7C275] `}>
      <div className=' flex flex-col items-center justify-center w-[50dvw] z-10 text-center p-10'>
        <p className={styles.heading}>
          THE DONUT
        </p>
        <p className='text-white text-left px-10'>
          A doughnut or donut is a type of pastry made from leavened fried dough.It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors. Doughnut is the traditional spelling, while donut is the simplified version; the terms are used interchangeably.
        </p>
      </div>
      <Canvas orthographic shadows style={{ width: '50dvw' }} camera={{ position: [0, 0, 10], zoom: 400 }}>
        <Float speed={5} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.1, 0.1]} >
          <Model />
        </Float>
        <OrbitControls enableZoom={false} />
        <directionalLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}


export default DonutsMain