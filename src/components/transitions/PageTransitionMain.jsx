import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

function PageTransitionMain() {
  const links = [
    {
      to: 'simple-transition',
      text: 'Simple'
    },
  ]
  return (
      <div className={styles.buttonBody}>
        {
          links.map((link, index) => {
            return (<Link key={index} className={`${styles.navButtons}`} to={link.to}>{link.text}</Link>)
          })
        }
      </div>
  )
}
export default PageTransitionMain
