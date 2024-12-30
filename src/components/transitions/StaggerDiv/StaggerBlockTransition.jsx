import React from 'react'
import { motion } from 'framer-motion'

function StaggerBlockTransition({ children }) {
  const staggerDivCount = 10
  const ease = [0.22, 1, 0.36, 1]
  return (
    <>
      {children}
      <div className='flex'>
        {
          Array.from({ length: staggerDivCount }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-[25dvw] h-screen bg-black fixed top-0 left-[${(100 / staggerDivCount * index)}dvw] z-50 flex-1`}
              style={{ transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1, ease: ease, delay: ( (staggerDivCount - index) * 0.05) }}
            >
            </motion.div>
          ))
        }
      </div>
      <div className='flex'>
        {
          Array.from({ length: staggerDivCount }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-[25dvw] h-screen bg-black fixed top-0 left-[${(100 / staggerDivCount * index)}dvw] z-50 flex-1`}
              style={{ transformOrigin: 'bottom' }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: ease, delay: ((staggerDivCount - index) * 0.05) }}
            >
            </motion.div>
          ))
        }
      </div>
    </>
  )
}
export default StaggerBlockTransition
