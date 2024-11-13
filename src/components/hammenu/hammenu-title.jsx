import React, { forwardRef } from 'react'
import styled from 'styled-components';

const HamMenuTitle = forwardRef((props, ref) => {
  const { children, style, as, className, ...otherProps } = props;
  const Tag = as || 'p';

  const Component = styled(Tag)`
      font-size: large;
      color: gray;
      margin-bottom: 40px;
      border-bottom: 1px solid gray;
      padding-bottom: 10px;
      width : 100%;
  `

  return (
    <Component ref={ref} style={style} {...otherProps} className={`hammenu-title ${className}`}>
      {
        children
      }
    </Component>
  )
})

HamMenuTitle.displayName = 'HamMenuTitle'


export default HamMenuTitle;
