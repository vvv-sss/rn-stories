import React, {createContext, FC, PropsWithChildren} from 'react';

interface AboutScreenContextValue {}

export const AboutScreenContext = createContext<AboutScreenContextValue>(
  {} as AboutScreenContextValue,
);

const AboutScreenProvider: FC<PropsWithChildren> = ({children}) => {
  // State, data, refs, variables, hooks etc.
  //__________________________________________________________

  // Effects
  //__________________________________________________________

  // Callbacks
  //__________________________________________________________

  // Context data
  //__________________________________________________________
  const value: AboutScreenContextValue = {};

  // Render
  //__________________________________________________________

  return <AboutScreenContext.Provider value={value}>{children}</AboutScreenContext.Provider>;
};

export default AboutScreenProvider;
