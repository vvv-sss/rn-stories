import React, {FC, useContext} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {HideBarsOnScrollScreenContext} from './_context';

const HideBarsOnScrollScreenLayout: FC = () => {
  const {} = useContext(HideBarsOnScrollScreenContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text>HideBarsOnScrollScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HideBarsOnScrollScreenLayout;
