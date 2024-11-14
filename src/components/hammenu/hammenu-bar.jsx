import { forwardRef } from "react";
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { slide, menuSlide, footerLinkPop } from './hammenu-anim';
import CurveSvg from './hammenu-curve';
import { useButtonContext } from "./hammenu-provider";

const StyledMenuContainer = styled.div`
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
    padding : 50px 80px;
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
  const { children, className, as, style, ...otherProps } = props;
  const Component = as || 'div';
  const { isActive, toggleActive, backgroundColor, toggleBackgroundColor } = useButtonContext();

  if (style) {
    if (style.backgroundColor) {
      toggleBackgroundColor(style.backgroundColor)
    }
  }

  return (
    <Component ref={ref} style={style} className={className} {...otherProps}>
      <AnimatePresence node="wait">
        {isActive &&
          <MotionDiv
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
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
    </Component>
  )
})

export default HamMenuBar;