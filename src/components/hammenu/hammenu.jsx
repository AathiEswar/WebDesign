import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { ButtonProvider } from './hammenu-provider';

const StyledHamMenu = styled.section`

`

const HamMenu = forwardRef((props, ref) => {
  const { children, as, className, style, ...otherProps } = props;
  const Tag = as || 'section';

  return (
    <ButtonProvider>
      <StyledHamMenu as={Tag} className={`${className}`} ref={ref} {...otherProps} style={style} >
        {
          children
        }
      </StyledHamMenu>
    </ButtonProvider>
  )
})

HamMenu.displayName = "HamMenu"

export default HamMenu