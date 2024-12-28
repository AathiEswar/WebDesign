import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
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
import OrbitControls from './components/threejs/theCube/OrbitControls.jsx';
import OrbitCtrl from './components/threejs/theCube/OrbitControls.jsx';
import R3F from './components/R3F/R3F.jsx';
import BasicR3F from './components/R3F/BasicR3F.jsx';
import FleetStudioMain from './components/fleetstudio/FleetStudioMain.jsx';
import FleetLogo from './components/fleetstudio/fleet-logo/FleetLogo.jsx';
import Random from './components/R3F/Random.jsx';
import FleetCardMain from './components/fleetstudio/fleet-card/FleetCardMain.jsx';
import InsideContext from './components/fleetstudio/fleet-card/context/InsideContext.jsx';
import Textures from './components/threejs/Textures.jsx';
import { AnimatePresence } from 'framer-motion';
import RouterApp from './Router.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path="/*" element={<RouterApp />} /> 
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);