import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function MagneticContainer({ children , ...props }) {
  const magnetic = useRef(null);
  const amplitudeX = props.amplitudex;
  const periodX = props.periodx;

  const amplitudeY = props.amplitudey;
  const periodY = props.periody;

  useGSAP(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: `elastic.out(${(amplitudeX ? amplitudeX : 1)}, ${(periodX ? periodX : 0.3)})` })
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: `elastic.out(${(amplitudeY ? amplitudeY : 1)}, ${(periodY ? periodY : 0.3)})` })

    const mouseEnter = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x);
      yTo(y)
    }
    const mouseLeave = (e) => {
      xTo(0);
      yTo(0)
    }

    magnetic.current.addEventListener("mousemove", mouseEnter)
    magnetic.current.addEventListener("mouseleave", mouseLeave)

    return () => {
      magnetic.current.removeEventListener("mousemove", mouseEnter)
      magnetic.current.removeEventListener("mouseleave", mouseLeave)
    }
  }, [])

  return (
  <div ref={magnetic} {...props} >
      {
        children
      }
    </div>
  )
}
