import React from 'react'
import { useGLTF } from '@react-three/drei'

function Model() {
  const {nodes} = useGLTF('/src/components/3d-models/3d-donut/torrus.glb')
  return (
    <group>
      <mesh {...nodes.Torus002}>

      </mesh>
    </group>
  )
}

export default Model
