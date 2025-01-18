import React, { Suspense } from 'react'
import { Clone, OrbitControls, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useLoader } from '@react-three/fiber'
import PlaceHolder from '../PlaceHolder'
/* 
 Loaders : 
    1. UseLoader - helper from react three drei
                  - arg1 : type of loader 
                  - arg2 : path to glb 

       <primitive/> - holder for 3d models ( pass the model in the object )

    2. DRACOLoader - use to load highly compressed 3d models 
    3. Suspense - react - waits for the entire component to finish all its process - better to seperate the comp to suspense 
    4. Fallback - its a property in suspense , like a placeholder
    5. useGLTF - GLTF loader from react three drei , also supports draco files 
    6. preload - property of useGLTF function , use to preload the model 
    7. Clone - effective cloning of the models by using same geometry and material ( used instead of primitive )
*/

function LoadModles() {
  return (
    <div className='w-screen h-screen'>
      <Canvas
        camera={{
          position: [0, 3, 6]
        }}
      >
        <color args={["ivory"]} attach={"background"} />
        <Model />
      </Canvas>
    </div>

  )
}

function Model() {

  return (
    <>

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 1, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Suspense fallback={<PlaceHolder scale={[2, 3, 2]} position={[0, 2, 0]} />}>
        <HelmetModel />
      </Suspense>


      <mesh receiveShadow position-y={0} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshPhysicalMaterial color="greenyellow" />
      </mesh>

    </>
  )
}


function HelmetModel() {
  // primitive way
  // const model = useLoader(GLTFLoader, '/models/FlightHelmet/glTF/FlightHelmet.gltf', (loader) => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath('/models/draco/');
  //   loader.setDRACOLoader(dracoLoader);
  // })

  // react three drei way 
  const model = useGLTF('/models/FlightHelmet/glTF/FlightHelmet.gltf')
  return (
    <>
      <Clone object={model.scene} scale={5} castShadow position={[4, 0, 0]} />
      <Clone object={model.scene} scale={5} castShadow position={[0, 0, 0]} />
      <Clone object={model.scene} scale={5} castShadow position={[-4, 0, 0]} />
    </>
  )
}

useGLTF.preload('/models/FlightHelmet/glTF/FlightHelmet.gltf');

export default LoadModles
