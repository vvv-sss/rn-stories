import React, {FC, useContext} from 'react';
import {StyleSheet, Text} from 'react-native';

import {ContentScreenContext} from './_context';
import {GradientBackground} from '@components_global';

const ContentScreenLayout: FC = () => {
  const {} = useContext(ContentScreenContext);

  return (
    <GradientBackground>
      <Text>ContentScreen</Text>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContentScreenLayout;
