import React from 'react'
import './style.scss'
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls , Environment, ContactShadows } from '@react-three/drei';
import CenterModel from './models/FleetCard1';
import IntroFS from './components/Intro/IntroFS';
import SnowGlobeModel from './components/snowglobe/SnowGlobe';
import SnowMain from './components/snowglobe/SnowMain';
import SnowGlobeJSX from './models/Snowglobe-transformed';
import ScaledSnowGlobe from './models/Resized-snowglobe';
function FleetCardMain() {
  const snowCount = 40;
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
        orthographic
        camera={{ zoom: 150, position: [0, 0, 10] }}
      >
        <OrbitControls enableZoom={false} />
        <Environment preset='city' />
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
          <ScaledSnowGlobe/>
        </Float>
      </Canvas>
    </div>
  )
}

export default FleetCardMain
