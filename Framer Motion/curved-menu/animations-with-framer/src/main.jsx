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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/3dmodels',
    element: <MainModels/>,
  },
  {
    path : '/3dmodels/donut',
    element: <DonutMain/>
  },
  {
    path : '/3dmodels/drag',
    element : <Drag3D/>
  },
    {
    path : '/3dmodels/follow',
    element : <MouseFollow/>
  },
  {
    path : '3dmodels/scroll',
    element : <ScrollGesture/>
  },
  {
    path : '/buttons',
    element: <div>this is buttons</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
