import React, {FC} from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';
import {Octicons} from '@expo/vector-icons';
import {withAlphaHex} from 'with-alpha-hex';

export type ImageProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  backgroundColor?: string;
};

export const Image: FC<ImageProps> = ({
  width = '100%',
  height = '100%',
  borderRadius = 15,
  backgroundColor = 'gainsboro',
}) => {
  return (
    <View style={[styles.image, {width, height, borderRadius, backgroundColor}]}>
      <Octicons
        name="image"
        size={30}
        color={withAlphaHex('#000000', 0.2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
