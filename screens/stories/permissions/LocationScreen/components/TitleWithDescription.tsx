import React, {FC} from 'react';

import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  description: string;
}

export const TitleWithDescription: FC<Props> = ({title, description}) => {
  return (
    <View>
      <Text style={styles.text_1}>{title}</Text>
      <Text style={styles.text_2}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text_1: {
    marginBottom: 5,
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
  },
  text_2: {
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.2,
  },
});
