import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
function ScrollMain() {
  const links = [
    {
      to: 'zoom-parallax',
      text: 'Zoom Parallax'
    },
    {
      to : "horizontal-gallery",
      text : "Horizontal Gallery"
    }
  ]
  return (
    <div className={styles.buttonBody}>
      {
        links.map(link => {
          return (<Link className={`${styles.navButtons}`} to={link.to}>{link.text}</Link>)
        })
      }
      <Outlet/>
    </div>
  )
}
export default ScrollMain
