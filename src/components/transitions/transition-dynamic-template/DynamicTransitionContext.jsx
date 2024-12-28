import { createContext, useContext, useState } from "react";

const WrapperContext = createContext(null);

export const useWrapper = () => useContext(WrapperContext);

import React from 'react'
import SimpleTransition from "../Simple/SimpleTransition";
import { AnimatePresence } from "framer-motion";

function DynamicTransitionContext({ children }) {
  const [Transition, setTransition] = useState(()=> SimpleTransition);

  const setTransitionType = (wrapper) => setTransition(() => wrapper)

  return (
    <WrapperContext.Provider value={{
      Transition,
      setTransitionType
    }}>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </WrapperContext.Provider>
  )
}

export default DynamicTransitionContext
