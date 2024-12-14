import { Canvas, useThree } from '@react-three/fiber'
import React, { useRef, useEffect } from 'react'
import { ContactShadows, Environment, Float, OrbitControls, OrthographicCamera } from '@react-three/drei'
import FC1 from './FleetCard1'
import FS6 from './FleetCard6'
import './styles.scss'

function Random() {
  const snowCount = 40;

  return (
    <div className={`canvasContainer`} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {Array.from({ length: snowCount }).map((_, index) => (
        <div key={index} className="snowflake"></div>
      ))}
      <svg className='absolute left-10 top-10 rotate-[45deg]' height="52" width="52" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 47.94 47.94" xml:space="preserve">
        <path style={{ fill: 'white' }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"/>
      </svg>

      <svg className='absolute left-8 top-2 rotate-[30deg]' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="32" height="32" viewBox="0 0 569.806 569.806"
        xml:space="preserve">
        <g>
          <g>
            <path d="M526.472,180.661l-119.971-27.534L331.219,37.03c-10.979-16.934-27.858-26.646-46.31-26.646s-35.331,9.712-46.31,26.646
			l-75.288,116.097l-119.97,27.534c-20.184,4.633-35.074,17.466-40.863,35.214s-1.322,36.897,12.252,52.534l88.789,102.283
			l-13.495,126.88c-1.812,17.032,2.975,32.84,13.482,44.523c13.917,15.472,36.133,21.169,57.95,14.554l123.453-37.467
			l123.458,37.473c6.065,1.836,12.186,2.767,18.195,2.767c15.581,0,29.7-6.157,39.749-17.326
			c10.502-11.677,15.294-27.485,13.482-44.523l-13.5-126.88l88.788-102.289c13.568-15.643,18.036-34.786,12.246-52.534
			C561.545,198.127,546.656,185.293,526.472,180.661z M389.886,346.684l14.026,131.874l-119.003-36.12l-119.003,36.12
			l14.027-131.874l-88.33-101.75l117.137-26.885l76.164-117.449l76.169,117.449l117.137,26.885L389.886,346.684z"/>
          </g>
        </g>
      </svg>
      <Canvas
        className='!h-screen w-screen'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        orthographic
        camera={{ zoom: 150, position: [0, 0, 5] }}
      >
        {/* <Environment preset='city' /> */}
        <directionalLight position={[0, 0, 3]} intensity={10} color={'white'} />
        <FS6 />

      </Canvas>
      <Canvas
        className='!h-screen w-screen'
        style={{
          backgroundColor: "transparent",
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        orthographic
        camera={{ zoom: 150, position: [0, 0, 3] }}
      >
        <OrbitControls enableZoom={false} />
        <Environment preset='city' />
        <directionalLight position={[3, 0, 0]} intensity={1} color={'red'} />
        <directionalLight position={[0, 0, 3]} intensity={10} color={'purple'} />
        <directionalLight position={[0, 3, 0]} intensity={1} color={'blue'} />
        {/* <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color={"white"} position={[0, -1.3, 0]} /> */}
        <Float
          speed={5} // Animation speed, defaults to 1
          rotationIntensity={0} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.1, 0.1]} >
          <FC1 />
        </Float>
      </Canvas>
    </div>
  )
}

export default Random
