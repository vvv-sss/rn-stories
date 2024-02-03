import React, {FC} from 'react';

import {Feather} from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  handlePress: () => void;
};

export const Button: FC<Props> = ({title, handlePress}) => {
  return (
    <TouchableOpacity
      style={styles.touchOpacity_1}
      onPress={handlePress}>
      <View style={styles.view_1}>
        <Feather
          name="arrow-down-right"
          size={24}
          color="black"
        />
        <Text style={styles.text_1}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchOpacity_1: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  view_1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text_1: {
    fontSize: 16,
    fontWeight: '500',
  },
});
