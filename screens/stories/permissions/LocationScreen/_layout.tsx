import React, {FC, useContext} from 'react';

import {MapPin} from 'lucide-react-native';
import {StyleSheet, View} from 'react-native';

import {Button, Container, HeaderWithSteps} from '../WelcomeScreen/components';
import {LocationScreenContext} from './_context';
import {TitleWithDescription} from './components';
import {useStatusBarStyle} from '@hooks_global';

const LocationScreenLayout: FC = () => {
  const {handleBackButtonPress, handleEnableLocationPress} = useContext(LocationScreenContext);

  void useStatusBarStyle('light');

  return (
    <Container>
      <HeaderWithSteps
        currentStep={2}
        totalSteps={4}
        handleBackButtonPress={handleBackButtonPress}
      />
      <View style={styles.view_1}>
        <MapPin
          size={40}
          color="white"
          strokeWidth={1}
          style={styles.icon_1}
        />
        <TitleWithDescription
          title="Keep it local"
          description="Elevate your experience by enabling location access. Discover nearby places and events tailored for you."
        />
      </View>
      <Button
        title="Enable location"
        handlePress={handleEnableLocationPress}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  view_1: {
    flex: 1,
    justifyContent: 'center',
  },
  icon_1: {
    marginLeft: 50,
    marginBottom: 6,
  },
});

export default LocationScreenLayout;
