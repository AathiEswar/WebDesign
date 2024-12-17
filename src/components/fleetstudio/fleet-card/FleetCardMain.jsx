import React, { useState } from 'react'
import './style.scss'
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import CenterModel from './models/FleetCard1';
import IntroFS from './components/Intro/IntroFS';
import SnowGlobeModel from './components/snowglobe/SnowGlobe';
import SnowMain from './components/snowglobe/SnowMain';
import SnowGlobeJSX from './models/Snowglobe-transformed';
import ScaledSnowGlobe from './models/Resized-snowglobe';
import { EffectComposer, Bloom, HueSaturation, Vignette, SMAA, TiltShift2 } from '@react-three/postprocessing'
import GreetingCard from './components/greetingsCard/GreetingCard';

function FleetCardMain() {
  const snowCount = 40;
  const [inside, setInside] = useState(false);

  return (
    <div className={`canvasContainer`} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Intro */}
  
      {Array.from({ length: snowCount }).map((_, index) => (
        <div key={index} className="snowflake"></div>
      ))}

      {/* Model 1 */}
      {/* <IntroFS/> */}
      <Canvas
        className='!h-screen w-screen'
        style={{
          backgroundColor: "transparent",
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        // camera={{  position: [0, 0, 10] }}
        camera={{
          fov: 75,          // Field of View
          position: [0, 0, 5], // Camera position (x, y, z)
          near: 0.1,        // Near clipping plane
          far: 1000         // Far clipping plane
        }}
      >
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2 * -1}  // Restrict downward rotation (90 degrees)
          minPolarAngle={Math.PI / 2}
        />
        <Environment preset='studio' />
        {/* <directionalLight position={[0, 0, 0]} intensity={1} color={'red'} />
        <directionalLight position={[0, 0, 3]} intensity={1} color={'purple'} />
        <directionalLight position={[0, 0, -3]} intensity={1} color={'blue'} /> */}
        <Float
          speed={5}
          rotationIntensity={0}
          floatIntensity={1}
          floatingRange={[-0.1, 0.1]} >
          {/* <CenterModel />
          <SnowMain /> */}
          {/* <SnowGlobeJSX/> */}
          <ScaledSnowGlobe inside={inside} />
        </Float>
      </Canvas>
      <button onClick={() => {
        setInside(!inside);
      }} className='bg-black text-[var(--accent)] text-lg p-4 rounded-[10%] absolute bottom-4 left-0 right-0'>
        Click me
      </button>
      <GreetingCard inside={inside}/>
    </div>
  )
}

export default FleetCardMain
