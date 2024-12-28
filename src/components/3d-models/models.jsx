import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './styles.module.scss'

function MainModels() {
  const links = [
    {
      to: 'donut',
      text: 'Donut'
    },
    {
      to: 'drag',
      text: 'Drag'
    },
    {
      to: 'follow',
      text: 'Mouse Follow'
    }, {
      to: 'scroll',
      text: 'Scroll Gesture'
    },
    {
      to: 'waveshader',
      text: 'Wave Shader'
    },
    {
      to: 'donuts',
      text: 'Donuts'
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

export default MainModels
