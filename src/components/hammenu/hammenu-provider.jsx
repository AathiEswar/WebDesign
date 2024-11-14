import React, { useState, createContext, useContext } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [backgroundColor , setBackgroundColor ] = useState('rgb(29,29,29)');
  const toggleActive = () => setIsActive((prev) => !prev);
  const toggleBackgroundColor = (backgroundColor) => setBackgroundColor(backgroundColor)
  const value = {
    isActive,
    toggleActive,
    backgroundColor ,
    toggleBackgroundColor
  }

  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => useContext(ButtonContext);
