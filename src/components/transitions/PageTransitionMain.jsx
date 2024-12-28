import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useWrapper } from './transition-dynamic-template/DynamicTransitionContext'
import SimpleTransition from './Simple/SimpleTransition'
import SimpleTransitionLR from './Simple-left-right/SimpleTransitionLR'

function PageTransitionMain() {
  const { setTransitionType } = useWrapper()

  console.log("Main Page : " , SimpleTransition);
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
      <button className={`${styles.navButtons}`} onClick={() => setTransitionType(SimpleTransition)}>Simple Transition</button>
      <button className={`${styles.navButtons}`} onClick={() => setTransitionType(SimpleTransitionLR)}>Simple Transition LR</button>
    </div>
  )
}
export default PageTransitionMain
