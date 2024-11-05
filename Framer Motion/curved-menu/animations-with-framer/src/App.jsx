import { useState } from 'react'
import './App.css'
import styles from './assets/css/styles.module.scss'
import Nav from './components/navigation/index.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './animation-wrappers/magnetic.jsx';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={styles.body}>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}>
        </div>
      </div>
      <AnimatePresence node="wait">
        {isActive && <Nav />}
      </AnimatePresence>

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
