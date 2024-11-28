import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from  '../../assets/css/styles.module.scss'
import * as THREE from 'three';

function ThreeMain() {
  const links = [
    {
      to: 'thecube',
      text: 'Cube'
    },
  ]

  useEffect(()=>{
    console.log("THree object"+THREE);
  },[])
  return (
    <div className={styles.buttonBody}>
      {
        links.map(link => {
          return (<Link className={`${styles.navButtons}`} to={link.to}>{link.text}</Link>)
        })
      }
    </div>
  )
}

export default ThreeMain
