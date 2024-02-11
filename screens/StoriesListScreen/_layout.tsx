import React, {FC, useContext} from 'react';
import {SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StoriesListScreenContext} from './_context';
import {GradientBackground} from '@components_global';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {withAlphaHex} from 'with-alpha-hex';
import {Item, listData} from './lib';
import {Feather} from '@expo/vector-icons';
import {useStatusBarStyle} from '@hooks_global';
import {Entypo} from '@expo/vector-icons';

const StoriesListScreenLayout: FC = () => {
  const {handleItemPress, handleItemInfoPress} = useContext(StoriesListScreenContext);

  const insets = useSafeAreaInsets();

  useStatusBarStyle('light');

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
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.itemTitleContainer}
                  onPress={() => handleItemPress(item.path)}>
                  <Feather
                    name="arrow-down-right"
                    size={30}
                    color={withAlphaHex('#fff', 0.3)}
                  />
                  <Text style={styles.itemText}>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleItemInfoPress(item.description)}>
                  <Entypo
                    name="info-with-circle"
                    size={24}
                    color={withAlphaHex('#fff', 0.3)}
                  />
                </TouchableOpacity>
              </View>
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
    borderBottomColor: withAlphaHex('#fff', 0.2),
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingTop: 10,
    marginRight: 20,
  },
  itemText: {
    width: '90%',
    fontSize: 16,
    color: 'white',
  },
});

export default StoriesListScreenLayout;
