import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'expo-image';

const Background = require('../assets/images/gradient-bg.png');

export const GradientBackground: FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={styles.container}>
      <Image
        source={Background}
        transition={300}
        style={styles.bg}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
  },
});
