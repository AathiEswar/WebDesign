import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useEffect, useRef, useState } from 'react'
import { fragment, vertex } from './wave-shader-module'
import { OrbitControls, useAspect, useTexture } from '@react-three/drei'
import { transform, useMotionValue, useScroll, useSpring , motion } from 'framer-motion'
import * as THREE from 'three';

function WaveShader() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main className='bg-green-200' >
      <div className='h-[300dvh]' ref={container}>
        <div className='sticky h-screen top-0'>
          <Canvas>
            <WaveModel scrollYProgress={scrollYProgress} />
          </Canvas>
        </div>
      </div>
      <div className='h-screen'></div>
    </main>
  )
}

function WaveModel({ scrollYProgress }) {

   const [targetWaveLength, setTargetWaveLength] = useState(5);
  const [targetAmplitude, setTargetAmplitude] = useState(0.3);
  
  const texture = useTexture('/src/components/wave-shader/aot.jpg')
  const { width, height } = texture.image;
  const scale = useAspect(
    width,
    height,
    0.4
    )
    const { viewport } = useThree();
    
  const options = {
    damping: 20,
  }

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }
  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouse.x.set(-0.5 + (clientX / innerWidth));
    mouse.y.set(-0.5 + (clientY / innerHeight));
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [])
  
  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.3, min: 0, max: 2, step: 0.05 },
    waveLength: { value: 5, min: 1, max: 20, step: 1 },
  })

  const uniforms = useRef({
    uVuvScale : { value: new THREE.Vector2(0,0) },
    uTexture: { value: texture },
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength }
  })

  const plane = useRef();

  useFrame(() => {
    // const scaleX = transform(scrollYProgress.get(), [0, 1], [scale[0], viewport.width])
    // const scaleY = transform(scrollYProgress.get(), [0, 1], [scale[1], viewport.height])
    // plane.current.scale.x = scaleX;
    // plane.current.scale.y = scaleY;
    plane.current.rotation.y = transform(mouse.x.get() , [-0.5 , 0.5] , [-0.3 , 0.3]); 
    plane.current.rotation.x = transform(mouse.y.get() , [-0.5 , 0.5] , [-0.3 , 0.3]); 

    // const imageAspect = width / height  ;
    // const screenAspect = scaleX / scaleY;
    // plane.current.material.uniforms.uVuvScale.value.set( 1 , imageAspect / screenAspect );

    // const modifiedAmp = transform(scrollYProgress.get(), [0, 1], [amplitude, 0]);
    plane.current.material.uniforms.uTime.value += 0.04;
    // plane.current.material.uniforms.uWaveLength.value = waveLength
    // plane.current.material.uniforms.uAmplitude.value = modifiedAmp;

  })
const handleMeshMouseEnter = () => {
    setTargetWaveLength(uniforms.current.uWaveLength.value + 3);
    setTargetAmplitude(uniforms.current.uAmplitude.value + 0.2);
  };

  const handleMeshMouseLeave = () => {
    setTargetWaveLength(uniforms.current.uWaveLength.value - 3);
    setTargetAmplitude(uniforms.current.uAmplitude.value - 0.2);
  };

  useFrame(() => {
    uniforms.current.uWaveLength.value = THREE.MathUtils.lerp(
      uniforms.current.uWaveLength.value,
      targetWaveLength,
      0.1
    );

    uniforms.current.uAmplitude.value = THREE.MathUtils.lerp(
      uniforms.current.uAmplitude.value,
      targetAmplitude,
      0.1
    );

    uniforms.current.uTime.value += 0.02;
  });


  return (
    <group>
      <motion.mesh ref={plane} scale={scale} 
       onPointerOver={handleMeshMouseEnter}
        onPointerOut={handleMeshMouseLeave}
      > 
        <planeGeometry args={[1, 1, 45, 45]} />
        {/* <boxGeometry args={[1 , 1 ,1] } /> */}
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          wireframe={false}
          uniforms={uniforms.current}
        />
      </motion.mesh>
    </group>
  )
}

export default WaveShader


// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { useControls } from 'leva'
// import React, { useRef } from 'react'
// import { fragment, vertex } from './wave-shader-module'
// import { useAspect, useTexture } from '@react-three/drei'
// import { transform, useScroll } from 'framer-motion'
// import * as THREE from 'three';

// function WaveShader() {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end']
//   })

//   return (
//     <main className='bg-green-200'>
//       <div className='h-[300dvh]' ref={container}>
//         <div className='sticky h-screen top-0 bg-green-300'>
//           <Canvas>
//             <WaveModel scrollYProgress={scrollYProgress} />
//           </Canvas>
//         </div>
//       </div>
//       <div className='h-screen'></div>
//     </main>
//   )
// }

// function WaveModel({ scrollYProgress }) {
//   const texture = useTexture('/src/components/wave-shader/aot.jpg')
//   const { width, height } = texture.image;
//   const scale = useAspect(
//     width,
//     height,
//     0.5
//   )
//   const { viewport } = useThree();
  
//   const { amplitude, waveLength } = useControls({
//     amplitude: { value: 0.3, min: 0, max: 2, step: 0.05 },
//     waveLength: { value: 15, min: 1, max: 20, step: 1 },
//   })

//   const uniforms = useRef({
//     uVuvScale : { value: new THREE.Vector2(0,0) },
//     uTexture: { value: texture },
//     uTime: { value: 0 },
//     uAmplitude: { value: amplitude },
//     uWaveLength: { value: waveLength }
//   })

//   const plane = useRef();

//   useFrame(() => {
//     const scaleX = transform(scrollYProgress.get(), [0, 1], [scale[0], viewport.width])
//     const scaleY = transform(scrollYProgress.get(), [0, 1], [scale[1], viewport.height])
//     plane.current.scale.x = scaleX;
//     plane.current.scale.y = scaleY;

//     const imageAspect = width / height  ;
//     const screenAspect = scaleX / scaleY;
//     plane.current.material.uniforms.uVuvScale.value.set( 1 , imageAspect / screenAspect );

//     const modifiedAmp = transform(scrollYProgress.get(), [0, 1], [amplitude, 0]);
//     plane.current.material.uniforms.uTime.value += 0.04;
//     plane.current.material.uniforms.uWaveLength.value = waveLength
//     plane.current.material.uniforms.uAmplitude.value = modifiedAmp;
//   })

//   return (
//     <group>
//       <mesh ref={plane} scale={scale}>
//         <planeGeometry args={[1, 1, 45, 45]} />
//         <shaderMaterial
//           vertexShader={vertex}
//           fragmentShader={fragment}
//           wireframe={false}
//           uniforms={uniforms.current}
//         />
//       </mesh>
//     </group>
//   )
// }

// export default WaveShader
