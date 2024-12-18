import React, { createContext, useContext, useState } from 'react'

const insideContext = createContext();
export const useInsideContext = () => useContext(insideContext)

function InsideContext({ children }) {
  const [inside, setInside] = useState(false);

  const setInsideToFalse = () => {
    setInside(false);
  }
  const setInsideToTrue = () => {
    setInside(true);
  }

  const value = {
    inside,
    setInside,
    setInsideToFalse,
    setInsideToTrue,
  }
  return (
    <insideContext.Provider value={value}>
      {
        children
      }
    </insideContext.Provider>
  )
}

export default InsideContext
