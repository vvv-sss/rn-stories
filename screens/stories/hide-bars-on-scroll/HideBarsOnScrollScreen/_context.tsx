import {router, useRouter} from 'expo-router';
import React, {createContext, FC, PropsWithChildren} from 'react';

interface HideBarsOnScrollScreenContextValue {
  handleChevronLeftPress: () => void;
}

export const HideBarsOnScrollScreenContext = createContext<HideBarsOnScrollScreenContextValue>(
  {} as HideBarsOnScrollScreenContextValue,
);

const HideBarsOnScrollScreenProvider: FC<PropsWithChildren> = ({children}) => {
  /*---------------------------------------------*
   * ⚛️ State, data, refs, variables, hooks etc.
   *---------------------------------------------*/
  const router = useRouter();

  /*---------------------------------------------*
   * ⚡️ Effects
   *---------------------------------------------*/

  /*---------------------------------------------*
   * 🔄 Callbacks
   *---------------------------------------------*/
  const handleChevronLeftPress = () => {
    router.back();
  };

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: HideBarsOnScrollScreenContextValue = {
    handleChevronLeftPress,
  };

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
