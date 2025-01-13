import { AnimatePresence } from "framer-motion";
import React, { createContext, useContext } from "react";

const PageTransitionContext = createContext();

const usePageTransitionContext = () => useContext(PageTransitionContext);

const PageTransition = ({ children, TransitionProp }) => {
  return (
    <PageTransitionContext.Provider value={{}}>
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child) =>
          TransitionProp ? (
            <TransitionProp>{child}</TransitionProp>
          ) : (
            child
          )
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;