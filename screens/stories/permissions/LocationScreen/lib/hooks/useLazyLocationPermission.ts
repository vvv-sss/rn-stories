import {useState} from 'react';

import {Alert, Linking} from 'react-native';

import * as Location from 'expo-location';

export const useLazyLocationPermission = () => {
  const [isGranted, setIsGranted] = useState(false);

  const handleLocationPermission = async () => {
    const status = await Location.getForegroundPermissionsAsync();

    if (status?.canAskAgain && !status.granted) {
      const {granted} = await Location.requestForegroundPermissionsAsync();

      if (!granted) {
        return;
      }
    }

    if (status && !status.canAskAgain) {
      Alert.alert(
        'You denied location permission.',
        'Please grant location permissions in your phone settings.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ],
      );

      return;
    }

    setIsGranted(true);
  };

  return {isGranted, handleLocationPermission};
};
