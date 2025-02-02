import React, { Suspense, useEffect, useRef } from 'react'
import { Clone, Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useLoader } from '@react-three/fiber'
import PlaceHolder from '../PlaceHolder'
import { useControls } from 'leva'
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


    Animations : 
    1. useAnimations - to manipulate animations of the 3d models ( use it to get the animation object , get the action from it , use the controls)
    2. crossFadeFrom - transition from one action to another in smooth manner
    3. fadeIn/fadeOut - to move into / move out of an animation 
    # Every animation has different instance , so we need to clean them up seperately  # 
*/

function LoadModles() {
  return (
    <div className='w-screen h-screen'>
      <Canvas
        camera={{
          position: [0, 3, 6]
        }}
      >
        <color args={["black"]} attach={"background"} />
        <Model />
      </Canvas>
    </div>

  )
}

function Model() {

  return (
    <>

      {/* <Perf position="top-left" /> */}

      <OrbitControls
        enableZoom={false} // Keep zoom enabled if needed
        enablePan={false} // Disable panning if not required
        minPolarAngle={Math.PI / 2} // Lock vertical movement
        maxPolarAngle={Math.PI / 2} // Lock vertical movement
      />
      <Environment preset="forest" /> {/* Adds realistic reflections */}


      <directionalLight castShadow position={[0, 0, 3]} intensity={7} color="green" />
      <ambientLight intensity={1.5} />

      <Suspense fallback={<PlaceHolder scale={[2, 3, 2]} position={[0, 2, 0]} />}>
        {/* <HelmetModel />
        <FoxModel /> */}
        <Logo />
      </Suspense>


      {/* <mesh receiveShadow position-y={0} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshPhysicalMaterial color="greenyellow" />
      </mesh> */}

    </>
  )
}

function FoxModel() {
  const model = useGLTF("/models/Fox/glTF/Fox.gltf")
  const foxAnim = useAnimations(model.animations, model.scene)
  console.log(foxAnim);
  const { animationFox } = useControls({
    animationFox: { options: foxAnim.names }
  })

  useEffect(() => {

    const foxAction = foxAnim.actions[animationFox];
    foxAction.reset().fadeIn(0.5).play()

    // const crossFadeTimeOut = window.setTimeout(()=>{
    //   foxAnim.actions.Walk.play();
    //   foxAnim.actions.Walk.crossFadeFrom(foxAnim.actions.Run , 2)
    // } , 5000)

    // return () => {
    //   clearTimeout(crossFadeTimeOut)
    // }
    return () => {
      foxAction.fadeOut(0.5)
    }
  }, [animationFox])
  return (
    <>
      <primitive object={model.scene} scale={0.03} position={[0, 0, 3]} />
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
      <Clone object={model.scene} scale={5} castShadow position={[4, 0, -1]} />
      <Clone object={model.scene} scale={5} castShadow position={[0, 0, -1]} />
      <Clone object={model.scene} scale={5} castShadow position={[-4, 0, -1]} />
    </>
  )
}

useGLTF.preload('/models/FlightHelmet/glTF/FlightHelmet.gltf');

export default LoadModles


export function Logo(props) {
  const { nodes, materials } = useGLTF('/models/model.gltf')
  const meshRef = useRef();

  useFrame(({ pointer }) => {
    if (meshRef.current) {
      // Rotate based on mouse movement
      // meshRef.current.rotation.x = pointer.y * -0.5; // Adjust tilt up/down
      meshRef.current.rotation.y = pointer.x * 0.5; // Adjust tilt left/right
    }
  });

  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={5} rotation-y={Math.PI * 0.5} 
    // rotation-x={Math.PI * -0.1}
    >
      <mesh
        ref={meshRef}
        receiveShadow
        geometry={nodes['tripo_node_110ac5ce-d42b-4bc0-8254-40f1258a77a1'].geometry}
      // material={materials['tripo_mat_110ac5ce-d42b-4bc0-8254-40f1258a77a1']}
      >
        {/* <meshStandardMaterial metalness={1} roughness={0.2} color="silver" /> */}
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0}
          color="silver"
          clearcoat={1} // Adds a glossy layer
          reflectivity={1} // Maximizes reflectivity
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/model.gltf')