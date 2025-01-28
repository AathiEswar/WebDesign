import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import "./expand.scss"

function ExpandMenu() {
  const [isActive, setActive] = useState(false);
  const [ screenDim , setScreenDim ] = useState({
    width : window.innerWidth,
    height : window.innerHeight,
  })

  const variants = {
    close: {
      height: 40,
      width: 100,
      top: "0px",
      right: "0px"
    },
    open: {
      width: screenDim.width <= 500 ? "calc(95dvw)" : 480,
      height:screenDim.height <= 500 ? "calc(95dvh)" : 620,
      top: "-20px",
      right: "-20px"
    }
  }

  useEffect(()=>{
    window.addEventListener("resize" , handleResize)

    return () => window.removeEventListener("resize" , handleResize)
  },[])

  function handleResize(){
    setScreenDim({
      width : window.innerWidth,
      height : window.innerHeight
    })

    console.log(screenDim);
  }

  return (
    <div className='em-header fixed top-[5%] right-[5%] '>

      <motion.div className='em-menu-bar relative bg-[#c9fd74] w-[480px] h-[650px] rounded-2xl'
        variants={variants}
        animate={isActive ? "open" : "close"}
        initial={"close"}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >

      </motion.div>

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

function DoublePara({ label }) {
  return (
    <div className='em-doublepara flex items-center justify-center h-full w-full'>
      <p>{label}</p>
      <p className='absolute'>{label}</p>
    </div>
  )
}

export default ExpandMenu
