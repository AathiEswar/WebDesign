import { createContext, useContext } from "react";

const WrapperContext = createContext(null);

export const useWrapper = () => useContext(WrapperContext);

import React from 'react'
import SimpleTransition from "../Simple/SimpleTransition";

function DynamicTransitionContext({children}) {
  return (
    <WrapperContext.Provider value={{SimpleTransition}}>
      {children}
    </WrapperContext.Provider>
  )
}

export default DynamicTransitionContext
