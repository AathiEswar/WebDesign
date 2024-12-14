import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/3dmodels',
    element: <MainModels />,
  },
  {
    path: '/3dmodels/donut',
    element: <DonutMain />
  },
  {
    path: '/3dmodels/drag',
    element: <Drag3D />
  },
  {
    path: '/3dmodels/follow',
    element: <MouseFollow />
  },
  {
    path: '3dmodels/scroll',
    element: <ScrollGesture />
  },
  {
    path: '3dmodels/waveshader',
    element: <WaveShader />
  },
  {
    path: '3dmodels/donuts',
    element: <DonutsMain />
  },
  {
    path: '/buttons',
    element: <ScrollMain />,
  },
  {
    path: '/buttons/zoom-parallax',
    element: <ZoomParallax />
  },
  {
    path: '/threejs',
    element: <ThreeMain />
  },
  {
    path: '/threejs/thecube',
    element: <TheCube />
  },
  {
    path: '/threejs/animatecube',
    element: <AnimationCube />
  },
  {
    path: '/threejs/mousecube',
    element: <MouseMove />
  },
  {
    path: '/threejs/orbit',
    element: <OrbitCtrl />
  },
  {
    path: '/threejs/fleet',
    element: <FleetStudioMain />
  }, 
  {
    path: '/threejs/fleet/fleetlogo',
    element: <FleetLogo />
  },
  {
    path: '/r3f',
    element: <R3F />
  },
  {
    path: '/r3f/basic',
    element: <BasicR3F />
  },
    {
    path: '/r3f/random',
    element: <Random />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
