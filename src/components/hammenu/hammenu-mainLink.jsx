import { motion } from "framer-motion";
import { forwardRef } from "react";
import styled from "styled-components";
import { slide } from "./anim";

const Component = styled.a`
   font-size: 56px;
    color : white;
      @media (max-width : 1024px){
          font-size : 42px;
      }
      @media (max-width : 768px){
          font-size : 36px;
      }
  `

const MotionComponent = motion.create(Component)

const HamMenuMainLink = forwardRef((props, ref) => {
  const { children, className, as, style, index, ...otherProps } = props;
  const Tag = as || 'a';

  return (
    <MotionComponent as={Tag}
      ref={ref}
      style={style}
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