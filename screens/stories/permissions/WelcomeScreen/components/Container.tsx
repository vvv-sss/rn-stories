import React, {FC, PropsWithChildren} from 'react';

import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {withAlphaHex} from 'with-alpha-hex';

export const Container: FC<PropsWithChildren> = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.view_1}>
      <LinearGradient
        colors={[withAlphaHex('#000', 0.5), 'transparent']}
        style={styles.gradient_1}
      />
      <LinearGradient
        colors={['transparent', withAlphaHex('#000', 0.5)]}
        style={styles.gradient_2}
      />
      <View style={[styles.view_2, {paddingTop: insets.top + 20, paddingBottom: insets.bottom + 20}]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view_1: {
    flex: 1,
    backgroundColor: '#001a33',
  },
  view_2: {
    flex: 1,
    paddingHorizontal: 20,
  },
  gradient_1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '35%',
  },
  gradient_2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '35%',
  },
});
