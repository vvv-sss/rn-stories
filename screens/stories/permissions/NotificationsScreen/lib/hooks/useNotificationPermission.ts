import {useState} from 'react';
import {Alert, Linking} from 'react-native';
import * as Notifications from 'expo-notifications';

export const useNotificationPermission = () => {
  const [isGranted, setIsGranted] = useState(false);

  const requestNotificationPermission = async () => {
    const {status} = await Notifications.requestPermissionsAsync();

    if (status === 'denied') {
      Alert.alert(
        'You denied notification permissions.',
        'Please grant permissions in your phone settings to receive important notifications.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }

    if (status === 'granted') {
      setIsGranted(true);
    }
  };

  return {
    isGranted,
    requestNotificationPermission,
  };
};
