import React, {createContext, FC, PropsWithChildren} from 'react';

interface HideBarsOnScrollScreenContextValue {}

export const HideBarsOnScrollScreenContext = createContext<HideBarsOnScrollScreenContextValue>(
  {} as HideBarsOnScrollScreenContextValue,
);

const HideBarsOnScrollScreenProvider: FC<PropsWithChildren> = ({children}) => {
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
  const value: HideBarsOnScrollScreenContextValue = {};

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return (
    <HideBarsOnScrollScreenContext.Provider value={value}>
      {children}
    </HideBarsOnScrollScreenContext.Provider>
  );
};

export default HideBarsOnScrollScreenProvider;
