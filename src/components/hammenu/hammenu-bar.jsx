import { forwardRef } from "react";
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { slide, menuSlide, footerLinkPop } from './anim';
import CurveSvg from './curve';
import { Button, StyledMenuContainer } from './styled-props';
import { useButtonContext } from "./hammenu-provider";

const MotionDiv = motion.create(StyledMenuContainer);

export const HamMenuBar = forwardRef(( props, ref ) => {
  const { children , className , as , style , ...otherProps } = props ;
  const Component = as || 'div';
  const { isActive , toggleActive } = useButtonContext();
  
  console.log(children)
  return (
    <Component ref={ref}>
       <AnimatePresence node="wait">
        {isActive &&
          <MotionDiv
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={`menu`}
            // style={menuStyles}
          >
            <div className={`body`}>
              <div className={`nav`}>
                <div className={`header`}>
                    {
                      children[0]
                    }
                  <div>
                    {
                      otherProps.links.map((data, index) => {
                        return (
                          <motion.div
                            key={index}
                            custom={index}
                            variants={slide}
                            animate="enter"
                            exit="exit"
                            initial="initial">
                            <a href={data.href}>
                              {data.title}
                            </a>
                          </motion.div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <motion.div
                className={`footer`}>
                {
                  otherProps.subLinks.map((data, index) => {
                    return (
                      <motion.a
                        variants={footerLinkPop}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        key={index}
                        custom={index}
                        href={data.href}>
                        {data.title}
                      </motion.a>
                    )
                  })
                }
              </motion.div>
              <CurveSvg />
            </div>
          </MotionDiv>
        }
      </AnimatePresence>
    </Component>
  )
})