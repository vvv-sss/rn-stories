import React, {createContext, FC, PropsWithChildren} from 'react';
import {useRouter} from 'expo-router';

interface WelcomeScreenContextValue {
  handleGoBackPress: () => void;
  handleGetStartedPress: () => void;
}

export const WelcomeScreenContext = createContext<WelcomeScreenContextValue>(
  {} as WelcomeScreenContextValue,
);

const WelcomeScreenProvider: FC<PropsWithChildren> = ({children}) => {
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
  const handleGoBackPress = () => {
    router.back();
  };

  const handleGetStartedPress = () => {
    router.push('/stories/permissions/location');
  };

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: WelcomeScreenContextValue = {
    handleGoBackPress,
    handleGetStartedPress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return <WelcomeScreenContext.Provider value={value}>{children}</WelcomeScreenContext.Provider>;
};

export default WelcomeScreenProvider;
