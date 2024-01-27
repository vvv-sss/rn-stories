import React, {createContext, FC, PropsWithChildren} from 'react';

interface ContentScreenContextValue {}

export const ContentScreenContext = createContext<ContentScreenContextValue>(
  {} as ContentScreenContextValue,
);

const ContentScreenProvider: FC<PropsWithChildren> = ({children}) => {
  /*---------------------------------------------*
   * ⚛️ State, data, refs, variables, hooks etc.
   *---------------------------------------------*/

  /*---------------------------------------------*
   * ⚡️ Effects
   *---------------------------------------------*/

  /*---------------------------------------------*
   * 🔄 Callbacks
   *---------------------------------------------*/

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: ContentScreenContextValue = {};

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/

  return <ContentScreenContext.Provider value={value}>{children}</ContentScreenContext.Provider>;
};

export default ContentScreenProvider;
