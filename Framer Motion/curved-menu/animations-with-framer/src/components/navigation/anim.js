export const menuSlide = {
  initial: {
    x: 'calc(100% + 100px)'
  },
  enter: {
    x: '0',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
}

export const slide = {
  initial: {
    x: "80px"
  },
  enter: (i) => ({
    x: '0',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05 }
  }),
  exit: (i) => ({
    x: '80px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * -0.05 }
  })
}
export const footerLinkPop = {
  initial: {
    opacity: 0,
    transition: { duration: 1 }

  },
  enter:(i)=> ({
    opacity: 100,
    transition: {duration: 2 , delay : i*0.3}

  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  }
}