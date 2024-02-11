import {useRouter, Href} from 'expo-router';
import React, {createContext, FC, PropsWithChildren} from 'react';
import {Alert} from 'react-native';

interface StoriesListScreenContextValue {
  handleItemPress: (path: Href<string>) => void;
  handleItemInfoPress: (description: string) => void;
}

export const StoriesListScreenContext = createContext<StoriesListScreenContextValue>(
  {} as StoriesListScreenContextValue,
);

const StoriesListScreenProvider: FC<PropsWithChildren> = ({children}) => {
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
  const handleItemPress = (path: Href<string>) => {
    router.push(path);
  };

  const handleItemInfoPress = (description: string) => {
    Alert.alert('Description', description);
  };

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: StoriesListScreenContextValue = {
    handleItemPress,
    handleItemInfoPress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/

  return (
    <StoriesListScreenContext.Provider value={value}>{children}</StoriesListScreenContext.Provider>
  );
};

export default StoriesListScreenProvider;
