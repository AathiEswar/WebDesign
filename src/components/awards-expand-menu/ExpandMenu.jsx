import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import "./expand.scss"
import { perspective } from './anim';


function ExpandMenu() {
  const [isActive, setActive] = useState(false);
  const [screenDim, setScreenDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const variants = {
    close: {
      height: 40,
      width: 100,
      top: "0px",
      right: "0px",
      borderWidth: "0px"
    },
    open: {
      width: screenDim.width <= 500 ? "calc(95dvw)" : 480,
      height: screenDim.height <= 500 ? "calc(95dvh)" : 620,
      top: "-20px",
      right: "-20px",
      borderWidth: "1px"
    }
    ,
    opacityOn: {
      opacity: 1,
    },
    opacityOff: {
      opacity: 0
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function handleResize() {
    setScreenDim({
      width: window.innerWidth,
      height: window.innerHeight
    })

    console.log(screenDim);
  }

  return (
    <div className='em-header fixed top-[5%] right-[5%] '>

      <MenuBar variants={variants} isActive={isActive} />

      <div onClick={(e) => setActive(!isActive)} className='em-button shadow-lg h-10 w-[100px] rounded-2xl cursor-pointer overflow-hidden absolute top-0 right-0'>

        <motion.div className='em-slider relative w-full h-full'
          animate={{ top: isActive ? "-100%" : "0" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >

          <div className='em-el h-full w-full bg-[#c9fd74] flex items-center justify-center '>
            <p>
              MENU
            </p>
          </div>
          <div className='em-el h-full w-full bg-black text-white absolute top-[100%] flex items-center justify-center'>
            <p>
              CLOSE
            </p>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

function MenuBar({ variants, isActive }) {
  const links = [
    {
      text: "HOME",
      href: "#"
    },
    {
      text: "EVENTS",
      href: "#"
    },
    {
      text: "CONTACT",
      href: "#"
    },
    {
      text: "CREDITS",
      href: "#"
    },
  ]
  return (
    <motion.div
      className='em-menu-bar relative bg-[#c9fd74] w-[480px] h-[650px] flex flex-col items-center justify-center rounded-2xl text-[60px] border border-2 border-black gap-4'
      variants={variants}
      animate={isActive ? "open" : "close"}
      initial={"close"}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      {isActive &&
        links.map((link, index) => {
          return (
            <motion.div
              key={index}
              className='em-link-div'
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a
                className='em-link font-["PPBook"]'
                href={`${link.href}`}
                aria-label={`${link.text}`} >
                {link.text}

              </a>
            </motion.div>
          )
        })
      }
    </motion.div>
  )
}

function DoublePara({ label }) {
  return (
    <div className='em-doublepara flex items-center justify-center h-full w-full'>
      <p>{label}</p>
      <p className='absolute'>{label}</p>
    </div>
  )
}

export default ExpandMenu
