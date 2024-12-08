import React from 'react'
import styles from  '../../assets/css/styles.module.scss'
import { Link } from 'react-router-dom'

function FleetStudioMain() {
  const links = [
    {
      to: 'thecube',
      text: 'Basic Cubes'
    },
    {
      to : 'animatecube',
      text : 'AnimateCube'
    },
    {
      to : 'mousecube',
      text : 'Mouse Move'
    },
    {
      to : 'orbit',
      text : 'Orbit Controls'
    },
    {
      to : 'fleetlogo',
      text : 'Fleet'
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

export default FleetStudioMain
