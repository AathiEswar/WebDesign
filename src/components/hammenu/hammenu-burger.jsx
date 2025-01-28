import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components';
import { useButtonContext } from './hammenu-provider';

const StyledHamMenu = styled.button`
	position: fixed;
	right: 0;
	top: 0; 
	margin: 20px;
	margin-top : 100px; 
	height: 80px;
	width: 80px;
	border-radius: 50%;
	background-color: var(--accent);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 2;
	box-shadow: 0 0 5px 0 rgb(45, 45, 45);

	@media (max-width: 768px) {
		margin : 10px;
		height: 50px;
		width: 50px;
	}

	.burger {
		width: 100%;
		&::after,
		&::before {
			display: block;
			content: "";
			width: 40%;
			position: relative;
			background-color: rgb(0, 0, 0);
			height: 2px;
			margin: auto;
			transition: all 0.5s;
		}
		&::after {
			top: 5px;
		}
		&::before {
			top: -5px;
		}
	}

	.burgerActive {
		&::after {
			top: -1px;
			transform: rotate(45deg);
		}
		&::before {
			top: 1px;
			transform: rotate(-45deg);
		}
	}
`
const HamMenuBurger = forwardRef((props, ref) => {
	const { children, as, className, style, ...otherProps } = props;
	const { isActive, toggleActive } = useButtonContext();

	return (
		<StyledHamMenu className={`${className}`} ref={ref} {...otherProps} style={style} onClick={toggleActive}>
			<div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
		</StyledHamMenu>
	)
})

HamMenuBurger.displayName = 'HamMenuBurger'

export default HamMenuBurger
