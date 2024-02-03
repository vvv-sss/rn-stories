import React, {createContext, FC, PropsWithChildren} from 'react';

import {Alert, Linking} from 'react-native';
import {useRouter} from 'expo-router';

interface FinalScreenContextValue {
  handleGoBackPress: () => void;
  handleCompletePress: () => void;
}

export const FinalScreenContext = createContext<FinalScreenContextValue>(
  {} as FinalScreenContextValue,
);

const FinalScreenProvider: FC<PropsWithChildren> = ({children}) => {
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

  const handleCompletePress = () => {
    Alert.alert(
      'Thank you!',
      'You can reset the permissions in the settings and go through the flow again or go to the home screen.',
      [
        {
          text: 'Settings',
          onPress: () => {
            Linking.openSettings();
            router.push('/stories/permissions/');
          },
        },
        {
          text: 'Home',
          onPress: () => {
            router.push('/');
          },
        },
      ],
    );
  };

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: FinalScreenContextValue = {
    handleGoBackPress,
    handleCompletePress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return <FinalScreenContext.Provider value={value}>{children}</FinalScreenContext.Provider>;
};

export default FinalScreenProvider;
