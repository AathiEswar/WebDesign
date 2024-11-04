import React from 'react'
import styles from '../link/style.module.scss';
import { slide } from '../anim';
import { motion } from "framer-motion";


function index({data}) {
  return (
    <motion.div 
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}>
      <a href={data.href}>
        {data.title}
      </a>
    </motion.div>
  )
}

export default index
