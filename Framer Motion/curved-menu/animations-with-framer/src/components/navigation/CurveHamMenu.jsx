import React, { useState } from 'react'
import { AnimatePresence , motion } from 'framer-motion';
import styled from 'styled-components';
import { slide , menuSlide , footerLinkPop } from './anim';
import CurveSvg from './curve';

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
const StyledMenuContainer = styled.div`
  position: fixed;
  width: 40%;
  top: 0;
  right: 0;
  height: 100dvh;
  background-color: rgb(29, 29, 29);
  color: white;
  z-index: 1;

  @media (max-width : 768px) {
    width: 100%;
  }

  .body{
    padding : 50px 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width : 768px) {
      padding: 60px;
    }

    @media (max-width : 425px) {
      padding: 40px;
    }

    .nav{
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 12px;
      font-size: 56px;
      .header{
        p{
          font-size: large;
          color: gray;
          margin-bottom: 40px;
          border-bottom: 1px solid gray;
          padding-bottom: 10px;
        }
      }

      a{
        text-decoration: none;
        color : white;
        font-weight: 300;
      }
    }

    .footer{
      flex-wrap: wrap;
      display: flex;
      gap: 16px;
      font-size: 16px;
    }
  }
`
const MotionDiv = motion.create(StyledMenuContainer);

function NavigationBar() {

  const links = [
    {
      title: "Home",
      href: '/',
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  const subLinks = ["Instagram", "Facebook", "Awwards", "Dribble"];

  
  return (
    <MotionDiv
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={`menu`}>
      <div className={`body`}>
        <div className={`nav`}>
          <div className={`header`}>
            <p>
              Navigation
            </p>
            <div>
              {
                links.map((data, index) => {
                  return (
                    <motion.div
                      key={index}
                      custom={data.index}
                      variants={slide}
                      animate="enter"
                      exit="exit"
                      initial="initial">
                      <a href={data.href}>
                        {data.title}
                      </a>
                    </motion.div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <motion.div
          className={`footer`}>
          {
            subLinks.map((linkName, index) => {
              return (<motion.a
                variants={footerLinkPop}
                initial="initial"
                animate="enter"
                exit="exit"
                key={index}
                custom={index}>
                {linkName}
              </motion.a>)
            })
          }
        </motion.div>
        <CurveSvg />
      </div>
    </MotionDiv>
  )
}

function CurveHamMenu({hamStyles}) {

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(!isActive)} style={hamStyles} >
        <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
      </Button>
      <AnimatePresence node="wait">
        {isActive && <NavigationBar />}
      </AnimatePresence>

    </div>
  )
}

export { CurveHamMenu };
