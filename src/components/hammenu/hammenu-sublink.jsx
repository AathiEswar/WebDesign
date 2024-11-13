import { forwardRef } from "react";
import styled from "styled-components";

const HamMenuSubLink = forwardRef((props, ref) => {
  const { children, className, style, as, ...otherProps } = props;
  const Tag = as || 'a';
  const Component = styled(Tag)`
        font-size: 16px;
        text-decoration: none;
        display : block ;
        color : white;
        font-weight: 300;
        text-overflow: ellipsis;
        white-space: nowrap;        
        overflow: hidden;          
        text-overflow: ellipsis;  
  `
  return (
    <Component ref={ref} style={style} className={className}>
      {
        children
      }
    </Component>
  )
})

export default HamMenuSubLink;