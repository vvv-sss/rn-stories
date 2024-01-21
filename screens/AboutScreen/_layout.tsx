import React, {FC, useContext} from 'react';
import {StyleSheet, Text} from 'react-native';

import {AboutScreenContext} from './_context';
import {GradientBackground} from '@components_global';

const AboutScreenLayout: FC = () => {
  const {} = useContext(AboutScreenContext);

  return (
    <GradientBackground>
      <Text>AboutScreen</Text>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutScreenLayout;
