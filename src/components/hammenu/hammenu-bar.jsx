import { forwardRef } from "react";
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import CurveSvg from './hammenu-curve';
import { useButtonContext } from "./hammenu-provider";

const StyledMenuContainer = styled.section`
  position: fixed;
  width: 40%;
  top: 0;
  right: 0;
  height: 100dvh;
  color: white;
  z-index: 1;

  @media (max-width : 1023px) {
    width: 100%;
  }

  .body{
    overflow-y : scroll;
    padding : 40px 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap : 12px;

    @media (max-width : 768px) {
      padding: 60px;
    }

    @media (max-width : 425px) {
      padding: 40px;
    }
  }
`

const MotionDiv = motion.create(StyledMenuContainer);

export const HamMenuBar = forwardRef((props, ref) => {
  const { children, className, as, style, motionProp, ...otherProps } = props;
  const { isActive, toggleActive, backgroundColor, toggleBackgroundColor } = useButtonContext();
  const Tag = as || 'section'
  const menuSlide = (motionProp || {
    initial: {
      x: 'calc(100% + 100px)'
    },
    enter: {
      x: '0',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: 'calc(100% + 100px)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  })

  if (style) {
    if (style.backgroundColor) {
      toggleBackgroundColor(style.backgroundColor)
    }
  }

  return (
    // <Component ref={ref} style={style} className={className} {...otherProps}>
      <AnimatePresence node="wait">
        {isActive &&
          <MotionDiv
            as={Tag}
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            ref={ref}
            style={style}
            className={className}
            {...otherProps}
          >
            <div className={`body`} style={{ backgroundColor: backgroundColor }}>
              {
                children
              }
              <CurveSvg />
            </div>
          </MotionDiv>
        }
      </AnimatePresence>
    // </Component>
  )
})

export default HamMenuBar;