import { useRouter } from 'expo-router';
import React, {createContext, FC, PropsWithChildren} from 'react';

interface DynamicHeaderScreenContextValue {
  handleArrowLeftPress: () => void;
}

export const DynamicHeaderScreenContext = createContext<DynamicHeaderScreenContextValue>(
  {} as DynamicHeaderScreenContextValue,
);

const DynamicHeaderScreenProvider: FC<PropsWithChildren> = ({children}) => {
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
  const handleArrowLeftPress = () => {
    router.back();
  }

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: DynamicHeaderScreenContextValue = {
    handleArrowLeftPress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return (
    <DynamicHeaderScreenContext.Provider value={value}>
      {children}
    </DynamicHeaderScreenContext.Provider>
  );
};

export default DynamicHeaderScreenProvider;
