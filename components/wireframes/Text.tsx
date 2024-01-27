import React, {FC} from 'react';
import {DimensionValue, View} from 'react-native';

export type TextProps = {
  height?: DimensionValue;
  width?: DimensionValue;
  borderRadius?: number;
  backgroundColor?: string;
};

export const Text: FC<TextProps> = ({
  height = 20,
  width = '100%',
  borderRadius = 5,
  backgroundColor = 'gainsboro',
}) => {
  return (
    <View
      style={{
        height,
        width,
        borderRadius,
        backgroundColor,
      }}
    />
  );
};
