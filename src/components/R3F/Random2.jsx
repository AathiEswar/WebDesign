import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function RandomModel(props) {
  const { nodes, materials } = useGLTF('/src/glb/random/random2.gltf')
  const {viewport} = useThree();
  return (
    <group {...props} dispose={null} scale={viewport.width/14} rotation={[0,0.4,0]}>
      <mesh geometry={nodes.Cone.geometry} material={nodes.Cone.material} position={[1.61, 1.169, 1.874]} rotation={[1.068, -0.393, -1.048]} scale={0.405} />
      <mesh geometry={nodes.Cone001.geometry} material={nodes.Cone001.material} position={[-1.868, 1.185, -1.653]} rotation={[-0.138, -0.038, 0.136]} scale={0.405} />
      <mesh geometry={nodes.Cone002.geometry} material={nodes.Cone002.material} position={[-1.638, -1.06, -1.88]} rotation={[0.649, -0.081, -0.639]} scale={0.405} />
      <mesh geometry={nodes.Cone003.geometry} material={nodes.Cone003.material} position={[1.828, -1.06, 1.638]} rotation={[-0.581, -0.312, 0.57]} scale={0.405} />
      <mesh geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} scale={0.625} />
      <mesh geometry={nodes.Torus.geometry} material={nodes.Torus.material} rotation={[1.536, 0, 0]} scale={[1.22, 1, 1.22]} />
    </group>
  )
} 

useGLTF.preload('/src/glb/random/random2.gltf')
