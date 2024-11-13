import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { slide, menuSlide, footerLinkPop } from './anim';
import CurveSvg from './curve';
import { Button, StyledMenuContainer } from './styled-props';


const MotionDiv = motion.create(StyledMenuContainer);

function CurveHamMenu({ children, hamStyles, menuStyles, links, subLinks }) {

  const [isActive, setIsActive] = useState(false);
  React.Children.toArray(children).forEach(child => {
    console.log(child.type.displayName);
  })


  return (
    <div>
      <Button onClick={() => setIsActive(!isActive)} style={hamStyles} >
        <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
      </Button>
      <AnimatePresence node="wait">
        {isActive &&
          <MotionDiv
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={`menu`}
            style={menuStyles}
          >
            <div className={`body`}>
              <div className={`nav`}>
                <div className={`header`}>
                  <p>
                    {
                      children[0]
                    }
                  </p>
                  <div>
                    {
                      links.map((data, index) => {
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
                  subLinks.map((data, index) => {
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
    </div>
  )
}

export { CurveHamMenu };
