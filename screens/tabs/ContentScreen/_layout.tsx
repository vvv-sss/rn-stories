import React, {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ContentScreenContext} from './_context';
import {GradientBackground} from '@components_global';

const ContentScreenLayout: FC = () => {
  const {} = useContext(ContentScreenContext);

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text>ContentScreen</Text>
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

export default ContentScreenLayout;
