import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {withAlphaHex} from 'with-alpha-hex';
import {Wireframe} from '@components_global';

export const ListItem: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Wireframe.Image />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={[styles.textContainer, styles.gap]}>
          <View style={styles.gap}>
            <Wireframe.Text width="80%" />
            <Wireframe.Text width="60%" />
            <Wireframe.Text width="60%" />
          </View>
          <Wireframe.Text width="90%" />
        </View>
        <View>
          <Feather
            name="bookmark"
            size={24}
            color={withAlphaHex('#000000', 0.4)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 150,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  imageContainer: {
    flex: 1,
  },
  descriptionContainer: {
    flex: 2,
    flexDirection: 'row',
    gap: 5,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  gap: {
    gap: 5,
  },
});
