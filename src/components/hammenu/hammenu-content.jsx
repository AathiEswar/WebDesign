import React, { forwardRef } from "react";
import styled from "styled-components";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 12px;
`
const HamMenuContents = forwardRef((props, ref) => {
  const { children, as, style, className, ...otherProps } = props;
  const Tag = as || 'div';

  return (
    <Component as={Tag} ref={ref}>
      {
        React.Children.map(children, (child, index) => {
          return (
            child && React.cloneElement(child, { index })
          );
        })
      }
    </Component>  
  )
})
HamMenuContents.displayName = 'HamMenuContents'
export default HamMenuContents;