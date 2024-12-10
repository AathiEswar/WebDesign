import React, { createContext, useContext, useEffect, useState } from 'react'

const isDesktopContext = createContext();
export const useScreenContext = () => useContext(isDesktopContext);

function Resize({ children }) {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 1023) {
      setIsDesktop(false);
    }
    else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  },[])
  

  const value = {
    isDesktop,
  }
  return (
    <isDesktopContext.Provider value={value}>
      {
        children
      }
    </isDesktopContext.Provider>
  )
}

export default Resize
