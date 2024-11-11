import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: -99px ;
  width: 100px;
  height: 100%;
  fill: rgb(29, 29, 29);
  stroke: none;
`
function CurveSvg() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

  const pathAnimation = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }

    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <StyledSvg>
      <motion.path
        variants={pathAnimation}
        initial='initial'
        animate='enter'
        exit="exit"
        d={initialPath}>
      </motion.path>
    </StyledSvg>
  )
}

export default CurveSvg
