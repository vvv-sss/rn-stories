import React, {FC, useContext} from 'react';

import {FadeInUp} from 'react-native-reanimated';
import {MotiView} from 'moti';
import {Stagger} from '@animatereactnative/stagger';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, Container, HeaderWithSteps} from './components';
import {WelcomeScreenContext} from './_context';
import {useStatusBarStyle} from '@hooks_global';

const WelcomeScreenLayout: FC = () => {
  const {handleGoBackPress, handleGetStartedPress} = useContext(WelcomeScreenContext);

  const insets = useSafeAreaInsets();

  void useStatusBarStyle('light');

  return (
    <Container>
      <HeaderWithSteps
        currentStep={1}
        totalSteps={4}
        handleBackButtonPress={handleGoBackPress}
      />
      <View style={styles.view_1}>
        <Stagger
          initialEnteringDelay={500}
          stagger={300}
          enterDirection={1}
          entering={() => FadeInUp}>
          <Text style={[styles.text_1, styles.text_2]}>Welcome to my stories</Text>
          <Text style={styles.text_1}>Excited to see you here.</Text>
        </Stagger>
      </View>
      <View style={[styles.view_2, {paddingBottom: insets.bottom}]}>
        <MotiView
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{type: 'timing', duration: 500, delay: 1000}}>
          <Button
            title="Get started"
            handlePress={handleGetStartedPress}
          />
        </MotiView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  view_1: {
    flex: 1,
    justifyContent: 'center',
  },
  view_2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  text_1: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
  },
  text_2: {
    marginBottom: 2,
  },
});

export default WelcomeScreenLayout;
