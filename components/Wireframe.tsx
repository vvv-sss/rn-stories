import React from 'react';
import {Text, TextProps, Image, ImageProps} from './wireframes';

export const Wireframe = {
  Text: (props: TextProps) => <Text {...props} />,
  Image: (props: ImageProps) => <Image {...props} />,
};
