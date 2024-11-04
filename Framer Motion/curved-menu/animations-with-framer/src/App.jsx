import { useState } from 'react'
import './App.css'
import styles from './assets/css/styles.module.scss'
import Nav from './components/navigation/index.jsx';
import {motion , AnimatePresence } from 'framer-motion';

function App() {
 const [isActive , setIsActive] = useState(false);

  return (
    <>
    <div onClick={()=>setIsActive(!isActive)} className={styles.button}>
      <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}>
      </div>
    </div>
    <AnimatePresence node="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}

export default App
