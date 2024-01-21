import React, {createContext, FC, PropsWithChildren} from 'react';

interface ContentScreenContextValue {}

export const ContentScreenContext = createContext<ContentScreenContextValue>(
  {} as ContentScreenContextValue,
);

const ContentScreenProvider: FC<PropsWithChildren> = ({children}) => {
  // State, data, refs, variables, hooks etc.
  //__________________________________________________________

  // Effects
  //__________________________________________________________

  // Callbacks
  //__________________________________________________________

  // Context data
  //__________________________________________________________
  const value: ContentScreenContextValue = {};

  // Render
  //__________________________________________________________

  return <ContentScreenContext.Provider value={value}>{children}</ContentScreenContext.Provider>;
};

export default ContentScreenProvider;
