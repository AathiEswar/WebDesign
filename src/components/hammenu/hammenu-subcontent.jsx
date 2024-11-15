import React, { forwardRef } from "react";
import styled from "styled-components";

const Component = styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 16px;
`;

const HamMenuSubContent = forwardRef((props, ref) => {
  const { children, as, className, style, animateDelay, motionProp, ...otherProps } = props;
  const Tag = as || 'div';

  const footerLinkPop = (motionProp || {
    initial: {
      opacity: 0,
      transition: { duration: 1 }

    },
    enter: (i) => ({
      opacity: 100,
      transition: { duration: 2, delay: i * (animateDelay || 0.3) }

    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    }
  })

  return (
    <Component
      as={Tag}
      ref={ref}
      style={style}
      className={className}
      {...otherProps} >
      {
        React.Children.map(children, (child, index) => {
          return (
            child && React.cloneElement(child, { index, footerLinkPop })
          )
        })
      }
    </Component>
  )
})

export default HamMenuSubContent;