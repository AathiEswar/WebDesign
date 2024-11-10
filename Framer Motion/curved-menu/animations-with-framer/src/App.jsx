import { useState } from 'react'
import './App.css'
import styles from './assets/css/styles.module.scss'
import Nav from './components/navigation/index.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticContainer} from './animation-wrappers/magnetic.jsx';
import { Outlet, Link } from "react-router-dom";
import { Magnet } from 'aventure'

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={styles.body}>
      <MagneticContainer onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}>
          </div>
      </MagneticContainer>
      <AnimatePresence node="wait">
        {isActive && <Nav />}
      </AnimatePresence>

      <div className={styles.buttonBody}>
        <Link className={`${styles.navButtons} threejs `} to={`3dmodels`}>3d Animations</Link>
        <Link className={`${styles.navButtons} scrollAni`} to={`buttons`}>Scroll Animations</Link>
      </div>

      <MagneticContainer amplitudex={1} periodx={0.3} amplitudey={1} periody={0.3} className={styles.magnetButton}>
          <p>
            Hover Me!
          </p>
      </MagneticContainer>
    </section>
  )
}

export default App
