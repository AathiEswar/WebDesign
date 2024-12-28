import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useWrapper } from './transition-dynamic-template/DynamicTransitionContext'
import SimpleTransition from './Simple/SimpleTransition'
import SimpleTransitionLR from './Simple-left-right/SimpleTransitionLR'

function PageTransitionMain() {
  const { setTransitionType, Transition } = useWrapper()

  const links = [
    {
      to: 'simple-transition',
      text: 'Simple'
    },
  ]
  return (
    <Transition>
      <div className={styles.buttonBody}>
        {
          links.map((link, index) => {
            return (<Link key={index} className={`${styles.navButtons}`} to={link.to}>{link.text}</Link>)
          })
        }
        <button className={`${styles.navButtons}`} onClick={() => setTransitionType(SimpleTransition)}>Simple Transition (Default)</button>
        <button className={`${styles.navButtons}`} onClick={() => setTransitionType(SimpleTransitionLR)}>Simple Transition LR</button>
      </div>
    </Transition>
  )
}
export default PageTransitionMain
