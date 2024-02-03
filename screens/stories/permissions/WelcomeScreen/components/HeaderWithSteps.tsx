import React, {FC} from 'react';

import {Feather} from '@expo/vector-icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface Props {
  totalSteps: number;
  currentStep: number;
  handleBackButtonPress?: () => void;
}

export const HeaderWithSteps: FC<Props> = ({
  totalSteps = 0,
  currentStep = 0,
  handleBackButtonPress,
}) => {
  return (
    <View style={styles.view_1}>
      {handleBackButtonPress ? (
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Feather
            name="arrow-left"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View style={styles.view_2}>
        {Array.from({length: totalSteps}).map((_, index) => (
          <View
            key={index}
            style={[
              styles.view_3,
              {
                height: index + 1 === currentStep ? 6 : 2,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view_2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  view_3: {
    width: 20,
    margin: 2,
    backgroundColor: 'white',
  },
});
