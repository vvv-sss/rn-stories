import React, {FC, useContext} from 'react';
import {SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StoriesListScreenContext} from './_context';
import {GradientBackground} from '@components_global';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {withAlphaHex} from 'with-alpha-hex';
import {Item, listData} from './lib';
import {Feather} from '@expo/vector-icons';
import {useStatusBarStyle} from '@lib_global';

const StoriesListScreenLayout: FC = () => {
  const {handleItemPress} = useContext(StoriesListScreenContext);

  const insets = useSafeAreaInsets();

  useStatusBarStyle('dark');

  return (
    <GradientBackground>
      <View
        style={[
          styles.container,
          {paddingTop: insets.top + 20, paddingBottom: insets.bottom + 110},
        ]}>
        <SectionList
          sections={listData}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>{title}</Text>
            </View>
          )}
          renderItem={({item}: {item: Item}) => {
            return (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleItemPress(item.path)}>
                <Feather
                  name="arrow-down-right"
                  size={30}
                  color={withAlphaHex('#000', 0.3)}
                />
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitleContainer: {
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: withAlphaHex('#000', 0.2),
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemText: {
    width: '90%',
    fontSize: 16,
    color: 'white',
  },
});

export default StoriesListScreenLayout;
