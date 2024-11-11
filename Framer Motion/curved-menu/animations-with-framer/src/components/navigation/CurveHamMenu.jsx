import React, { useState } from 'react'
import Nav from '../navigation/index';
import { AnimatePresence } from 'framer-motion';
import styles from '../../assets/css/styles.module.scss'
import styled from 'styled-components';

const Button = styled.button`
 		position: fixed;
		right: 0;
		top: 0;
		margin: 20px;
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
`;


function CurveHamMenu({hamStyles}) {

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(!isActive)} style={hamStyles} >
        <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
      </Button>
      <AnimatePresence node="wait">
        {isActive && <Nav />}
      </AnimatePresence>

    </div>
  )
}

export { CurveHamMenu };
