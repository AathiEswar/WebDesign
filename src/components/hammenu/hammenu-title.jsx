import React, { forwardRef } from 'react'
import styled from 'styled-components';

const Component = styled.p`
    font-size: large;
    color: gray;
    margin-bottom: 0px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    width : 100%;
`
const HamMenuTitle = forwardRef((props, ref) => {
  const { children, style, as, className, ...otherProps } = props;
  const Tag = as || 'p';

  return (
    <Component
      as={Tag}
      ref={ref}
      style={style}
      className={`${className}`}
      {...otherProps}>
      {
        children
      }
    </Component>
  )
})

HamMenuTitle.displayName = 'HamMenuTitle'


export default HamMenuTitle;
