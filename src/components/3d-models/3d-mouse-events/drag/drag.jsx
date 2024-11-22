import { MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import styles from '../../styles.module.scss';

// add a Canvas and a mesh render
// add the geometric figure 
// add meshmaterial for the material type 
// ambientlight is for enabling lights 
// directional light is for shadows

function Drag3D() {

  return (
    <div className='h-screen '>
      <p className={`${styles.rockFont} font-["Cinzel"] top-[75%] left-[50%] z-10 `}>
        the rock
      </p>
      <Canvas style={{ backgroundColor: "#ffecc7" }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight intensity={2} />\
        <directionalLight position={[1, 1, 10]} />
        <Cube />
      </Canvas>
    </div>
  )
}

function Cube() {
  const cubeMesh = useRef(null);
  useFrame((state, delta) => {
    cubeMesh.current.rotation.x += 0.005;
    cubeMesh.current.rotation.y += 0.005;
    cubeMesh.current.rotation.z += 0.005;
  }, [])

  const texture1 = useLoader(TextureLoader, '/src/components/3d-models/textures/rock3.webp')
  return (
    <mesh ref={cubeMesh}>
      <sphereGeometry args={[2, 10, 26]} />
      <meshStandardMaterial map={texture1} />
    </mesh>
  )
}

export default Drag3D
