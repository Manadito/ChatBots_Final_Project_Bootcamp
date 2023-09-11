import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // This will provide state variables throughout the app (to the children)
  // We can add the state variable we will need, here
  const [instructor, setInstructor] = useState(null);
  return (
    <AppContext.Provider
      value={{
        instructor,
        setInstructor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// We will import useAppContext into the components that require specific states from this file
// We will import them like so: import { useAppContext } from '../contexts/AppContext'
export const useAppContext = () => {
  return useContext(AppContext);
};
