import React, {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AboutScreenContext} from './_context';
import {GradientBackground} from '@components_global';
import {SwipeableListItem} from './components/SwipeableListItem';

const AboutScreenLayout: FC = () => {
  const {} = useContext(AboutScreenContext);

  return (
    <GradientBackground>
      <View style={styles.container}>
        <SwipeableListItem />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreenLayout;
