import React, {createContext, FC, PropsWithChildren, useEffect} from 'react';

import {useRouter} from 'expo-router';

import {useLazyLocationPermission} from './lib';

interface LocationScreenContextValue {
  handleBackButtonPress: () => void;
  handleEnableLocationPress: () => Promise<void>;
}

export const LocationScreenContext = createContext<LocationScreenContextValue>(
  {} as LocationScreenContextValue,
);

const LocationScreenProvider: FC<PropsWithChildren> = ({children}) => {
  /*---------------------------------------------*
   * ⚛️ State, data, refs, variables, hooks etc.
   *---------------------------------------------*/
  const {isGranted, handleLocationPermission} = useLazyLocationPermission();

  const router = useRouter();

  /*---------------------------------------------*
   * ⚡️ Effects
   *---------------------------------------------*/
  useEffect(() => {
    if (isGranted) {
      router.push('/stories/permissions/notifications');
    }
  }, [isGranted]);

  /*---------------------------------------------*
   * 🔄 Callbacks
   *---------------------------------------------*/
  const handleBackButtonPress = () => {
    router.back();
  };

  const handleEnableLocationPress = async () => {
    if (isGranted) {
      router.push('/stories/permissions/notifications');
    }

    await handleLocationPermission();
  };

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: LocationScreenContextValue = {
    handleBackButtonPress,
    handleEnableLocationPress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return <LocationScreenContext.Provider value={value}>{children}</LocationScreenContext.Provider>;
};

export default LocationScreenProvider;
