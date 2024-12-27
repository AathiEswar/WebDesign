import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/css/styles.module.scss'


function ThreeMain() {
  const links = [
    {
      to: 'thecube',
      text: 'Basic Cubes'
    },
    {
      to: 'animatecube',
      text: 'AnimateCube'
    },
    {
      to: 'mousecube',
      text: 'Mouse Move'
    },
    {
      to: 'orbit',
      text: 'Orbit Controls'
    },
    {
      to: 'fleet',
      text: 'Fleet Logo'
    },
    {
      to: 'textures',
      text: 'Textures'
    }
  ]


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
