import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

function MouseFollowCanvas() {
  const canvasRef = useRef();


  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX, clientY } = event;

      console.log(clientX, clientY)

      if (canvasRef.current) {
        canvasRef.current.style.position = 'absolute';  
        canvasRef.current.style.left = `${clientX - (30 +  window.innerWidth / 2)}px`; 
        canvasRef.current.style.top = `${clientY - (30 + window.innerHeight/2)}px`;   
      }
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className='h-screen w-screen'>
      <Canvas ref={canvasRef} className='fixed top-0 left-0 pointer-events-none'>
        <Model />
      </Canvas>
    </div>
  )
}

function Model() {
  const cubeRef = useRef();
  return (
    <>
      <group scale={1}>
        <mesh ref={cubeRef} rotation-x={Math.PI * 0.2} rotation-y={Math.PI * 0.2}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </group>
    </>
  )
}

export default MouseFollowCanvas
