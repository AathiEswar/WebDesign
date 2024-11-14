import { forwardRef } from "react";
import styled from "styled-components";
import { footerLinkPop } from "./hammenu-anim";
import { motion } from "framer-motion";
const Component = styled.a`
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
const MotionComponent = motion.create(Component);

const HamMenuSubLink = forwardRef((props, ref) => {
  const { children, className, style, as,index, ...otherProps } = props;
  const Tag = as || 'a';
  return (
    <MotionComponent ref={ref}
      style={style}
      className={className}
      as={Tag}
      variants={footerLinkPop}
      initial="initial"
      animate="enter"
      exit="exit"
      key={index}
      custom={index}
      {...otherProps}
    >
      {
        children
      }
    </MotionComponent>
  )
})

export default HamMenuSubLink;