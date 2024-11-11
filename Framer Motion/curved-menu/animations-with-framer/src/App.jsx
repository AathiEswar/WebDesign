import { useState } from 'react'
import './App.css'
import styles from './assets/css/styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import MagneticContainer from './animation-wrappers/magnetic.jsx'
import { Outlet, Link } from "react-router-dom";
import { CurveHamMenu } from './components/navigation/CurveHamMenu.jsx';
 
function App() {

  return (
    <section className={styles.body}>
      <CurveHamMenu/>

      <div className={styles.buttonBody}>
        <Link className={`${styles.navButtons} threejs `} to={`3dmodels`}>3d Animations</Link>
        <Link className={`${styles.navButtons} scrollAni`} to={`buttons`}>Scroll Animations</Link>
      </div>

      <div amplitudex={3} amplitudey={3} periodx={0.1} periody={0.1} className={styles.magnetButton}>
          <p>
            Hover Me!
          </p>
      </div>
    </section>
  )
}

export default App
