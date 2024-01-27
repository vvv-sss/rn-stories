import React, {FC, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons, FontAwesome6} from '@expo/vector-icons';
import {withAlphaHex} from 'with-alpha-hex';
import {Wireframe} from '@components_global';
import {HideBarsOnScrollScreenContext} from '../_context';

const iconColor = withAlphaHex('#000000', 0.5);

export const Header: FC = () => {
  const {handleChevronLeftPress} = useContext(HideBarsOnScrollScreenContext);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleChevronLeftPress}>
          <FontAwesome6
            name="circle-chevron-left"
            size={30}
            color={iconColor}
          />
        </TouchableOpacity>
        <Wireframe.Text width={120} />
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="bell-circle"
          size={30}
          color={iconColor}
        />
        <MaterialIcons
          name="account-circle"
          size={30}
          color={iconColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    fontFamily: 'Georgia',
    color: withAlphaHex('#000000', 0.5),
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
