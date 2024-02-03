import React, {createContext, FC, PropsWithChildren, useEffect} from 'react';

import {useRouter} from 'expo-router';

import {useNotificationPermission} from './lib';

interface NotificationsScreenContextValue {
  handleBackButtonPress: () => void;
  handleEnableNotificationsPress: () => Promise<void>;
}

export const NotificationsScreenContext = createContext<NotificationsScreenContextValue>(
  {} as NotificationsScreenContextValue,
);

const NotificationsScreenProvider: FC<PropsWithChildren> = ({children}) => {
  /*---------------------------------------------*
   * ⚛️ State, data, refs, variables, hooks etc.
   *---------------------------------------------*/
  const {isGranted, requestNotificationPermission} = useNotificationPermission();

  const router = useRouter();

  /*---------------------------------------------*
   * ⚡️ Effects
   *---------------------------------------------*/
  useEffect(() => {
    if (isGranted) {
      router.push('/stories/permissions/final');
    }
  }, [isGranted]);

  /*---------------------------------------------*
   * 🔄 Callbacks
   *---------------------------------------------*/
  const handleBackButtonPress = () => {
    router.back();
  };

  const handleEnableNotificationsPress = async () => {
    if (isGranted) {
      router.push('/stories/permissions/final');
    }

    await requestNotificationPermission();
  };

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: NotificationsScreenContextValue = {
    handleBackButtonPress,
    handleEnableNotificationsPress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return (
    <NotificationsScreenContext.Provider value={value}>
      {children}
    </NotificationsScreenContext.Provider>
  );
};

export default NotificationsScreenProvider;
