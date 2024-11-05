import React from 'react'
import {Canvas} from '@react-three/fiber';
import Model from './Model';
import { Environment , Text } from '@react-three/drei';

function Scene() {
  return (
    <Canvas style={{backgroundColor: 'rgb(25,25,25)'}}>
    <directionalLight intensity={3} position={[0 , 3, 2]} />
    <Environment preset='city' />
      <Model/>
    </Canvas>
  )
}

export default Scene
