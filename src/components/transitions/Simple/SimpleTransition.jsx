import { motion } from 'framer-motion'

const SimpleTransition = ({children}) => {
  return (
    <>
      <motion.div
        className='slide-in fixed top-0 left-0 w-screen h-screen bg-black'
        style={{transformOrigin : 'bottom'}}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
      <motion.div
        className='slide-out fixed top-0 left-0 w-screen h-screen bg-black'
        style={{transformOrigin : 'bottom'}}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default SimpleTransition
