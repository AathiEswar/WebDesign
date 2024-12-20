import React, { useEffect, useRef } from 'react'
import './style.scss'
import gsap from 'gsap';
import FleetLogo from '../../../fleet-logo/FleetLogo';
import AnimatedSVG from '../svgAnime/AnimatedSvg';
import { useInsideContext } from '../../context/InsideContext';
function IntroFS(props) {

  const {inside} = useInsideContext();

  const introRef = useRef();

  	useEffect(() => {
		const timeOut = setTimeout(() => {
			gsap.to(introRef.current, {
				duration: 0.5,
				opacity: (inside ? 0 : 1),
				ease: "power2.out",
			});
		}, 500)

		return () => clearTimeout(timeOut);
	}, [inside]);

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
          delay: 11,
        }
      );
      gsap.fromTo(".intro-screen",{background : '#0b090a'}, {
        scale: (window.innerWidth <= 625 ? 0.4 : 0.2),
        left: window.innerWidth / 2 - introScreenRect.width * ( window.innerWidth <= 625 ? 0.5 : 0.1),
        top: window.innerHeight / 2 * -1 + introScreenRect.height *( window.innerHeight <= 625 ? 0.05 : 0.1),
        delay: 8,
        duration: 1.5,
        ease: "power3.inOut",
        background : "transparent"
      });
      // gsap.fromTo(
      //   ".logo-name",
      //   {
      //     y: 50,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 2,
      //     delay: 9,
      //   }
      // );
    }, introRef);

    return () => ctx.revert();

  }, []);
  return (
    <div ref={introRef} className='h-full w-full z-0'>
      <div className={`intro-screen flex items-center justify-center ${inside ? 'hidden' : 'flex'} `} >
        <div className={`intro-container`}>
          <FleetLogo />
        </div>
        <div className="loading-page">
          {/* <div className="name-container">
            <div className="logo-name">Welcome</div>
          </div> */}
          <AnimatedSVG/>
        </div>
      </div>
    </div>

  )
}

export default IntroFS
