import React, {FC, useContext} from 'react';

import {BellDot} from 'lucide-react-native';
import {StyleSheet, View} from 'react-native';

import {Button, Container, HeaderWithSteps} from '../WelcomeScreen/components';
import {NotificationsScreenContext} from './_context';
import {TitleWithDescription} from '../LocationScreen/components';
import {useStatusBarStyle} from '@hooks_global';

const NotificationsScreenLayout: FC = () => {
  const {handleBackButtonPress, handleEnableNotificationsPress} = useContext(
    NotificationsScreenContext,
  );

  void useStatusBarStyle('light');

  return (
    <Container>
      <HeaderWithSteps
        currentStep={3}
        totalSteps={4}
        handleBackButtonPress={handleBackButtonPress}
      />
      <View style={styles.view_1}>
        <BellDot
          size={40}
          color="white"
          strokeWidth={1}
          style={styles.icon_1}
        />
        <TitleWithDescription
          title="Get important updates"
          description="Stay in the loop! Enable notifications to receive timely and important updates. Be the first to know about new features, exciting announcements, and community happenings."
        />
      </View>
      <Button
        title="Enable notifications"
        handlePress={handleEnableNotificationsPress}
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
    marginLeft: 100,
    marginBottom: 6,
  },
});

export default NotificationsScreenLayout;
