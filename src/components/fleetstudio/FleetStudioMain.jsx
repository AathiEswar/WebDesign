import React from 'react'
import styles from  '../../assets/css/styles.module.scss'
import { Link } from 'react-router-dom'

function FleetStudioMain() {
  const links = [
    {
      to : 'fleetlogo',
      text : 'Fleet Glow In Dark'
    },
    {
      to : 'fleetlogo2',
      text : "Fleet Logo"
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
