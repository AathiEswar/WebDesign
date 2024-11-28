import { useEffect } from 'react';
import styles from './style.module.scss';
import Picture1 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
import Picture2 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
import Picture3 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
import Picture4 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
import Picture5 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
import Picture6 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
import Picture7 from '/src/components/scroll-animations/zoom-parallax/aot.jpg';
// import { useScroll, useTransform, motion} from 'framer-motion';
// import { useRef } from 'react';

// export default function ZoomParallax() {

//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end']
//     })

//     const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//     const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//     const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//     const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//     const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

//     const pictures = [
//         {
//             src: Picture1,
//             scale: scale4
//         },
//         {
//             src: Picture2,
//             scale: scale5
//         },
//         {
//             src: Picture3,
//             scale: scale6
//         },
//         {
//             src: Picture4,
//             scale: scale5
//         },
//         {
//             src: Picture5,
//             scale: scale6
//         },
//         {
//             src: Picture6,
//             scale: scale8
//         },
//         {
//             src: Picture7,
//             scale: scale9
//         }
//     ]

//     return (
//       <div>
//       <div className='h-screen bg-black'> </div>
//         <div ref={container} className={`${styles.container} h-[300dvh] relative bg-black`}>
//             <div className={styles.sticky}>
//                 {
//                     pictures.map( ({src, scale}, index) => {
//                         return <motion.div key={index} style={{scale}} className={styles.el}>
//                             <div className={styles.imageContainer}>
//                                 <img
//                                     src={src}
//                                     fill
//                                     alt="image"
//                                 />
//                             </div>
//                         </motion.div>
//                     })
//                 }
//             </div>
//         </div>
//         <div className='h-screen bg-black'></div>
//       </div>
//     )
// }

import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'
import { useRef } from 'react';

function ZoomParallax() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: Picture1,
            scale: scale4,
            top: 0,
            left: 0,
        },
        {
            src: Picture2,
            scale: scale5,
            top: "35dvh",
            left: 0,
        },
        {
            src: Picture3,
            scale: scale6,
            top: "20dvh",
            left: "56dvh",
        },
        {
            src: Picture4,
            scale: scale5,
            top: "-35dvh",
            left: "0dvh",
        },
        {
            src: Picture5,
            scale: scale6,
            top: '-20dvh',
            left: '-56dvh',
        },
        {
            src: Picture6,
            scale: scale5,
            top: '-15dvh',
            left: '56dvh',
        },
        {
            src: Picture7,
            scale: scale5,
            top: '15dvh',
            left: '-56dvh',
        }
    ]
    return (
        <main>
            <div className='h-screen bg-green-100'></div>
            <div ref={containerRef} className={`${styles.container} relative h-[300dvh] bg-green-200`}>
                <div className='h-screen bg-green-400 sticky top-0 overflow-hidden'>
                    {
                        pictures.map((picture, index) => {
                            return (<motion.div key={index} style={{ scale: picture.scale }} className='element h-full w-full absolute top-0 flex items-center justify-center'>
                                <div className={`imageContainer relative w-[25dvw] h-[25dvw] top-[${picture.top}] left-[${picture.left}] right-[${picture.right}] bottom-[${picture.bottom}]`}>
                                    <img src={picture.src} className='w-full h-full object-contain' />
                                </div>
                            </motion.div>)
                        })
                    }
                </div>
            </div>
            <div className='h-screen bg-green-100'></div>
        </main>
    )
}

export default ZoomParallax
