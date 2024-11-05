import React from 'react'
import styles from '../navigation/style.module.scss';
import Link from './link/index.jsx'
import CurveSvg from './curve-svg/index.jsx';
import { footerLinkPop, menuSlide } from './anim.js';
import { motion } from "framer-motion";


function index() {

  const navItems = [
    {
      title: "Home",
      href: '/',
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>
              Navigation
            </p>
            <div>
              {
                navItems.map((item, index) => {
                  return <Link key={index} data={{ ...item, index }} />
                })
              }
            </div>
          </div>
        </div>
        <motion.div
          className={styles.footer}>
          {
            ["Instagram", "Facebook", "Awwards", "Dribble"].map((linkName, index) => {
              return (<motion.a
                variants={footerLinkPop}
                initial="initial"
                animate="enter"
                exit="exit"
                key={index}
                custom={index}>
                {linkName}
              </motion.a>)
            })
          }
        </motion.div>
        <CurveSvg />
      </div>
    </motion.div>
  )
}

export default index
