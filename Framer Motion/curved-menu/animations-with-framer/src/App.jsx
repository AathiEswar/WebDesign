import { useState } from 'react'
import './App.css'
import styles from './assets/css/styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './animation-wrappers/magnetic.jsx';
import { Outlet, Link } from "react-router-dom";
import { Button, Magneto } from 'aventure';
import { CurveHamMenu } from './components/navigation/CurveHamMenu.jsx';

function App() {


  return (
    <section className={styles.body}>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}>
        </div>
      </div>
      <AnimatePresence node="wait">
        {isActive && <Nav />}
      </AnimatePresence>

      <div className={styles.buttonBody}>
        <Link className={`${styles.navButtons} threejs `} to={`3dmodels`}>3d Animations</Link>
        <Link className={`${styles.navButtons} scrollAni`} to={`buttons`}>Scroll Animations</Link>
      </div>

      <Magnetic>
        <div className={styles.magnetButton}>
          <p>
            Hover Me!
          </p>
        </div>
      </Magnetic>
    </section>
  )
}

export default App
