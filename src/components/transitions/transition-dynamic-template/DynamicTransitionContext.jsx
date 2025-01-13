import { createContext, useContext, useState } from "react";

const WrapperContext = createContext(null);

export const useWrapper = () => useContext(WrapperContext);

import React from 'react'
import SimpleTransition from "../Simple/SimpleTransition";
import { AnimatePresence } from "framer-motion";

function DynamicTransitionContext({ children }) {
  const [Transition, setTransition] = useState(() => SimpleTransition);
  const [activeButton, setActiveButton] = useState(0)
  const setTransitionType = (wrapper) => setTransition(() => wrapper)

  console.log(children)

  return (
    <WrapperContext.Provider value={{
      Transition,
      setTransitionType,
      activeButton,
      setActiveButton
    }}>
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child) => (
          <Transition>{child}</Transition>
        ))}
      </AnimatePresence>
    </WrapperContext.Provider>
  )
}

export default DynamicTransitionContext
