import { forwardRef } from "react";
import styled from "styled-components";

const HamMenuMainLink = forwardRef((props, ref) => {
  const { children, className, as, style, ...otherProps } = props;
  const Tag = as || 'a';

  const Component = styled(Tag)`
   font-size: 56px;
    color : white;
      @media (max-width : 1024px){
          font-size : 42px;
      }
      @media (max-width : 768px){
          font-size : 36px;
      }
  `

  return (
    <Component ref={ref}  {...otherProps} style={style} >
      {
        children
      }
    </Component>
  )
});

HamMenuMainLink.displayName = "HamMenuMainLink"

export default HamMenuMainLink