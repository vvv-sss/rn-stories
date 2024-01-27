import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Feather} from '@expo/vector-icons';

type Props = {};

export const SwipeableListItem: FC = () => {
  const renderLeftActions = () => {
    return <View style={[styles.dimensions, {backgroundColor: 'yellow'}]} />;
  };

  const renderRightActions = () => {
    return (
      <View style={[styles.dimensions, styles.rightActionContainer]}>
        <Feather
          name="trash-2"
          size={24}
          color="black"
        />
      </View>
    );
  };

  return (
    <Swipeable
      friction={1.5}
      containerStyle={styles.dimensions}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}>
      <View style={[styles.dimensions, {backgroundColor: 'red'}]}></View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  dimensions: {
    width: '100%',
    height: 65,
  },
  rightActionContainer: {
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  },
});
