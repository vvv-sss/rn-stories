import {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';

export const useAppState = () => {
  const appStateRef = useRef(AppState.currentState);
  const [appState, setAppState] = useState(appStateRef.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appStateRef.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }

      appStateRef.current = nextAppState;
      setAppState(appStateRef.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};
