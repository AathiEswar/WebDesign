import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

import MainModels from './components/3d-models/models.jsx';
import DonutMain from './components/3d-models/3d-donut/donut-main.jsx';
import Drag3D from './components/3d-models/3d-mouse-events/drag/drag.jsx';
import MouseFollow from './components/3d-models/3d-mouse-events/mouse-follow/follow.jsx';
import ScrollGesture from './components/3d-models/3d-mouse-events/scroll-gesture/scroll-gesture.jsx';
import WaveShader from './components/wave-shader/waveShader.jsx';
import DonutsMain from './components/3d-models/3d-donuts/donuts.jsx';
import ScrollMain from './components/scroll-animations/scroll-main.jsx';
import ZoomParallax from './components/scroll-animations/zoom-parallax/zoom-parallax.jsx';
import ThreeMain from './components/threejs/TheeMain.jsx';
import TheCube from './components/threejs/theCube/TheCube.jsx';
import AnimationCube from './components/threejs/theCube/AnimationCube.jsx';
import MouseMove from './components/threejs/theCube/MouseMove.jsx';
import OrbitCtrl from './components/threejs/theCube/OrbitControls.jsx';
import R3F from './components/R3F/R3F.jsx';
import BasicR3F from './components/R3F/BasicR3F.jsx';
import FleetStudioMain from './components/fleetstudio/FleetStudioMain.jsx';
import FleetLogo from './components/fleetstudio/fleet-logo/FleetLogo.jsx';
import Random from './components/R3F/Random.jsx';
import FleetCardMain from './components/fleetstudio/fleet-card/FleetCardMain.jsx';
import InsideContext from './components/fleetstudio/fleet-card/context/InsideContext.jsx';
import Textures from './components/threejs/Textures.jsx';
import App from './App.jsx';
import { AnimatePresence } from 'framer-motion';
import PageTransitionMain from './components/transitions/PageTransitionMain.jsx';
import DynamicPage from './components/transitions/transition-dynamic-template/DynamicPage.jsx';
import DynamicMain from './components/transitions/transition-dynamic-template/DynamicMain.jsx';
import DynamicPage2 from './components/transitions/transition-dynamic-template/DynamicPage2.jsx';
import DynamicTransitionContext from './components/transitions/transition-dynamic-template/DynamicTransitionContext.jsx';
import Materials from './components/threejs/Materials.jsx';

function RouterApp() {
  const location = useLocation();
  return (
      <DynamicTransitionContext>
        <Routes location={location} key={location.pathname}>
          <Route index element={<App />} />
          <Route path="/3dmodels" element={<MainModels />} />
          <Route path="/3dmodels/donut" element={<DonutMain />} />
          <Route path="/3dmodels/drag" element={<Drag3D />} />
          <Route path="/3dmodels/follow" element={<MouseFollow />} />
          <Route path="/3dmodels/scroll" element={<ScrollGesture />} />
          <Route path="/3dmodels/waveshader" element={<WaveShader />} />

          <Route path="/3dmodels/donuts" element={<DonutsMain />} />
          <Route path="/page-transitions" element={<PageTransitionMain />} />
          <Route path='/page-transitions/:transition' element={<DynamicMain />} key={location.pathname}></Route>
          <Route path="/page-transitions/:transition/page/1" element={<DynamicPage />} />
          <Route path="/page-transitions/:transition/page/2" element={<DynamicPage2 />} />

          <Route path="/buttons" element={<ScrollMain />} />
          <Route path="/buttons/zoom-parallax" element={<ZoomParallax />} />

          <Route path="/threejs" element={<ThreeMain />} />
          <Route path="/threejs/thecube" element={<TheCube />} />
          <Route path="/threejs/animatecube" element={<AnimationCube />} />
          <Route path="/threejs/mousecube" element={<MouseMove />} />
          <Route path="/threejs/orbit" element={<OrbitCtrl />} />
          <Route path="/threejs/fleet" element={<FleetStudioMain />} />
          <Route path="/threejs/textures" element={<Textures />} />
          <Route path="/threejs/materials" element={<Materials/>} />
          <Route path="/threejs/fleet/fleetlogo" element={<FleetLogo />} />
          
          <Route path="/r3f" element={<R3F />} />
          <Route path="/r3f/basic" element={<BasicR3F />} />
          <Route path="/r3f/random" element={<Random />} />
          <Route path="/r3f/fleetcard" element={<InsideContext><FleetCardMain /></InsideContext>} />
        </Routes>
      </DynamicTransitionContext>
  )
}

export default RouterApp
