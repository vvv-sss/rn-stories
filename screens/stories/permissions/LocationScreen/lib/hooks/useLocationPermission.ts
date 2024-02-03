import {useEffect} from 'react';

import {useAppState} from '@hooks_global';
import {useLazyLocationPermission} from './useLazyLocationPermission';

export const useLocationPermission = () => {
  const {isGranted, handleLocationPermission} = useLazyLocationPermission();

  const appState = useAppState();

  useEffect(() => {
    if (appState !== 'active') return;

    void handleLocationPermission();
  }, [appState]);

  return isGranted;
};
