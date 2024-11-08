import React from 'react'
import Scene from './Scene'
import styles from './assets/css/style.module.scss'
import { useNavigate } from 'react-router-dom';

function DonutMain() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.body} relative h-screen`}>
      <button className={`${styles.backButton}`} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        GO<br/>BACK
      </button>
      <p className={`${styles.heading} absolute text-white z-10`}>
        THE DONUT
      </p>
      <Scene />
    </div>
  )
}

export default DonutMain;
