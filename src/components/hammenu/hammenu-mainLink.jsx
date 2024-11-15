import { motion } from "framer-motion";
import { forwardRef } from "react";
import styled from "styled-components";

const Component = styled.a`
      font-size: 4dvw;
      text-decoration: none;
      display : block ;
      color : white;
      text-overflow: ellipsis;
      white-space: nowrap;        
      overflow: hidden;  
      @media (max-width : 1023px){
          font-size : 50px;
      }
      @media (max-width : 767px){
          font-size : 42px;
      }
      @media ( max-width : 424px){
        text-align : center;
        font-size : 40px;
      }
  `

const MotionComponent = motion.create(Component)

const HamMenuMainLink = forwardRef((props, ref) => {
  const { children, className, as, style, index, slide, ...otherProps } = props;
  const Tag = as || 'a';

  return (
    <MotionComponent
      ref={ref}
      style={style}
      className={className}
      as={Tag}
      key={index}
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      {...otherProps}
    >
      {
        children
      }
    </MotionComponent>
  )
});

HamMenuMainLink.displayName = "HamMenuMainLink"

export default HamMenuMainLink