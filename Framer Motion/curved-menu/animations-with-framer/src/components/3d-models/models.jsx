import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './3d-donut/style.module.scss'

function MainModels() {
  return (
    <div className={styles.buttonBody}>
      <Link className={styles.navButtons} to={"donut"}>DONUT</Link>
    </div>
  )
}

export default MainModels
