import React, { lazy, Suspense } from 'react'
import './style.scss'
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import IntroFS from './components/Intro/IntroFS';
import GreetingCard from './components/greetingsCard/GreetingCard';
import { useInsideContext } from './context/InsideContext';
const ScaledSnowGlobe = lazy(() => import('./models/Resized-snowglobe'))

function FleetCardMain() {
  const snowCount = 40;
  const { inside, setInside } = useInsideContext();
  return (

    <div className={`canvasContainer`} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {Array.from({ length: snowCount }).map((_, index) => (
        <div key={index} className="snowflake"></div>
      ))}
      <IntroFS />
      <Suspense fallback={<div>Fleet Studio</div>}>
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
            fov: 75,
            position: [0, 0, 5],
            near: 0.1,
            far: 1000
          }}
        >
          <OrbitControls enableZoom={false}
            maxPolarAngle={Math.PI / 2 * -1}  // Restrict downward rotation (90 degrees)
            minPolarAngle={Math.PI / 2}
          />
          <Environment preset='studio' />
          <Float
            speed={5}
            rotationIntensity={0}
            floatIntensity={1}
            floatingRange={[-0.1, 0.1]} >
            <ScaledSnowGlobe />
          </Float>
        </Canvas>
      </Suspense>
      <div className='w-full absolute bottom-0 flex justify-center'>
        <button onClick={() => {
          setInside(!inside);
        }} className="button" type="button">
          {inside ? "Click to Move Out" : "Click Me for a Suprise"}
          <img className="button-hat" src="https://assets.codepen.io/4175254/santa-hat-test-9.png" alt="" />
        </button>
      </div>
      <GreetingCard />
    </div>
  )
}

export default FleetCardMain
