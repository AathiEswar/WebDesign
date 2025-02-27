import React, { forwardRef } from "react";
import styled from "styled-components";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 12px;
`
const HamMenuContents = forwardRef((props, ref) => {
  const { children, as, style, className, animateDelay, motionProp, ...otherProps } = props;
  const Tag = as || 'div';

  const slide = ( motionProp || {
    initial: {
      x: "80px"
    },
    enter: (i) => ({
      x: '0',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * (animateDelay || 0.05) }
    }),
    exit: (i) => ({
      x: '80px',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * (-1 * (animateDelay || 0.05)) }
    })
  })


  return (
    <Component
      as={Tag}
      ref={ref}
      className={className}
      style={style}
      {...otherProps}>
      {
        React.Children.map(children, (child, index) => {
          return (
            child && React.cloneElement(child, { index, slide })
          )
        })
      }
    </Component>
  )
})
HamMenuContents.displayName = 'HamMenuContents'
export default HamMenuContents;