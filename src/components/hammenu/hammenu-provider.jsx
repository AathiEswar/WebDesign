import React, { useState, createContext, useContext } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive((prev) => !prev);

  return (
    <ButtonContext.Provider value={{ isActive, toggleActive }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => useContext(ButtonContext);
