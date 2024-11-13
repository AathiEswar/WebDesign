import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { ButtonProvider } from './hammenu-provider';


const HamMenu = forwardRef((props, ref) => {
  const { children, as, className, style, ...otherProps } = props;

  const StyledHamMenu = styled.section`
  background-color : red;
  `

  return (
    <ButtonProvider>
      <StyledHamMenu className={`${className}`} ref={ref} {...otherProps} style={style} >
        {
          children
        }
      </StyledHamMenu>
    </ButtonProvider>
  )
})

HamMenu.displayName = "HamMenu"

export default HamMenu
