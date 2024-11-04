import React from 'react'
import styles from '../navigation/style.module.scss';
import Link from './link/index.jsx'
import CurveSvg from './curve-svg/index.jsx';
import { menuSlide } from './anim.js';
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
                  return <Link data={{ ...item, index }} />
                })
              }
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <a>Instagram</a>
          <a>Facebook</a>
          <a>Awwwards</a>
          <a>Dribble</a>
        </div>
        <CurveSvg />
      </div>
    </motion.div>
  )
}

export default index
