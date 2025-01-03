import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useWrapper } from './transition-dynamic-template/DynamicTransitionContext'
import SimpleTransition from './Simple/SimpleTransition'
import SimpleTransitionLR from './Simple-left-right/SimpleTransitionLR'
import StaggerBlockTransition from './StaggerDiv/StaggerBlockTransition'
import StackOverLap from './Stack/StackOverLap'
import DennisPortfolio from './DennisPortfolio/DennisPortfolio'

function PageTransitionMain() {
  const { setTransitionType, Transition , activeButton , setActiveButton } = useWrapper()

  const links = [
    {
      to: 'simple-transition',
      text: 'Click For Navigation Play Ground'
    },
  ];

  const buttonProps = [
    {
      onClickProp: SimpleTransition,
      text: "Bottom To Top (Default)"
    },
    {
      onClickProp: SimpleTransitionLR,
      text: "Left To Right"
    },
    {
      onClickProp : StaggerBlockTransition,
      text : 'Stagger Div'
    },
    {
      onClickProp : StackOverLap,
      text : "Stack OverLap"
    },
    {
      onClickProp : DennisPortfolio,
      text : "Dennis Portfolio"
    }
  ]
  return (
    <Transition>
      <div className={`${styles.buttonBody} flex flex-col`}>
        {
          links.map((link, index) => {
            return (<Link key={index} className={`${styles.navButtons}`} to={link.to}>{link.text}</Link>)
          })
        }
        <h1>
          TYPES OF PAGE TRANSITIONS 
        </h1>
        <div className='flex flex-wrap gap-4  '>
          {
            buttonProps.map((buttonProp, index) => (
              <button
                key={index}
                className={`${styles.navButtons} ${activeButton == index ? styles.active : ""} `}
                onClick={() => { setTransitionType(buttonProp.onClickProp), setActiveButton(index) }} >
                {buttonProp.text}
              </button>
            ))
          }
        </div>
        {/* <button className={`${styles.navButtons}`} onClick={() => setTransitionType(SimpleTransition)}>Simple Transition (Default)</button>
        <button className={`${styles.navButtons}`} onClick={() => setTransitionType(SimpleTransitionLR)}>Simple Transition LR</button> */}
      </div>
    </Transition>
  )
}
export default PageTransitionMain
