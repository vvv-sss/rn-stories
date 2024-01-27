import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {withAlphaHex} from 'with-alpha-hex';
import {Entypo, Feather, Ionicons} from '@expo/vector-icons';

const iconColor = withAlphaHex('#000000', 0.5);

export const Footer: FC = () => {
  return (
    <View style={styles.container}>
      <Entypo
        name="home"
        size={30}
        color={iconColor}
      />
      <Feather
        name="search"
        size={30}
        color={iconColor}
      />
      <Ionicons
        name="add-circle"
        size={30}
        color={iconColor}
      />
      <Ionicons
        name="map-outline"
        size={30}
        color={iconColor}
      />
      <Ionicons
        name="bag-handle"
        size={30}
        color={iconColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
