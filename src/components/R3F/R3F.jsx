import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/css/styles.module.scss'


function R3F() {
  const links = [
    {
      to: 'basic',
      text: 'Basic'
    },
    {
      to: 'random',
      text: 'Random'
    },
    {
      to: 'fleetcard',
      text: 'Fleet Card'
    },
    {
      to: 'basicr3f',
      text: 'Basic R3F'
    },
    {
      to: 'r3drei',
      text: 'Drei'
    },
     {
      to: 'mouseCanvas',
      text: 'Mouse Follow'
    },
    {
      to : 'envandstag',
      text : "Environment and Stagging"
    },
     {
      to : 'load-models',
      text : "Model Loading"
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
export default R3F
