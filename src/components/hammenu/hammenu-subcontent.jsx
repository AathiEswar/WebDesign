import React, { forwardRef } from "react";
import styled from "styled-components";

const Component = styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 16px;
`;

const HamMenuSubContent = forwardRef((props, ref) => {
  const { children, as, className, style, ...otherProps } = props;
  const Tag = as || 'div';
  return (
    <Component as={Tag} ref={ref} style={style} >
      {
        React.Children.map(children, (child, index) => {
          return (
            child && React.cloneElement(child, { index })
          )
        })
      }
    </Component>
  )
})

export default HamMenuSubContent;