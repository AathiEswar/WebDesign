import React, { useEffect, useRef } from 'react'
import './style.scss'
import gsap from 'gsap';
import FleetLogo from '../../../fleet-logo/FleetLogo';
import { motion } from 'framer-motion'
import AnimatedSVG from '../svgAnime/AnimatedSvg';
function IntroFS() {

  const introRef = useRef();
  useEffect(() => {

    let ctx = gsap.context(() => {
      const introScreen = document.querySelector('.intro-container')
      const introScreenRect = introScreen.getBoundingClientRect();
      gsap.fromTo(
        ".loading-page",
        { opacity: 1 },
        {
          opacity: 0,
          display: "none",
          duration: 2.5,
          delay: 13,
        }
      );
      gsap.fromTo(".intro-screen",{backgroundColor : '#0b090a'}, {
        scale: 0.2,
        left: window.innerWidth / 2 - introScreenRect.width * 0.1,
        top: window.innerHeight / 2 * -1 + introScreenRect.height * 0.1,
        delay: 12,
        duration: 1.5,
        ease: "power3.inOut",
        backgroundColor : "#419ccb"
      });
      gsap.fromTo(
        ".logo-name",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 9,
        }
      );
    }, introRef);

    return () => ctx.revert();

  }, []);
  return (
    <div ref={introRef} className='h-full w-full'>
      <div className="intro-screen flex items-center justify-center" >
        <div className={`intro-container`}>
          <FleetLogo />
        </div>
        <div className="loading-page">
          <div className="name-container">
            <div className="logo-name">Welcome</div>
          </div>
          <AnimatedSVG/>
        </div>
      </div>
    </div>

  )
}

export default IntroFS
