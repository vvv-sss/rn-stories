import React, {FC, useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {GradientBackground} from '@components_global';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Footer, Header, ListItem} from './components';
import {useStatusBarStyle} from '@lib_global';

const SCROLL_DISTANCE = 70;

const HideBarsOnScrollScreenLayout: FC = () => {
  const insets = useSafeAreaInsets();

  useStatusBarStyle('dark');

  /*---------------------------------------------*
   * ANIMATION LOGIC
   *---------------------------------------------*/
  const scrollY = useRef(new Animated.Value(0)).current;
  const offsetAnim = useRef(new Animated.Value(0)).current;

  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      offsetAnim,
    ),
    0,
    SCROLL_DISTANCE,
  );

  const headerTranslate = clampedScroll.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [0, -SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const opacity = clampedScroll.interpolate({
    inputRange: [0, SCROLL_DISTANCE - 20, SCROLL_DISTANCE],
    outputRange: [1, 0.05, 0],
    extrapolate: 'clamp',
  });

  const bottomTabTranslate = clampedScroll.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [0, SCROLL_DISTANCE * 2],
    extrapolate: 'clamp',
  });

  let _clampedScrollValue = 0;
  let _offsetValue = 0;
  let _scrollValue = 0;

  useEffect(() => {
    scrollY.addListener(({value}) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(Math.max(_clampedScrollValue + diff, 0), SCROLL_DISTANCE);
    });
    offsetAnim.addListener(({value}) => {
      _offsetValue = value;
    });
  }, []);

  let scrollEndTimer: NodeJS.Timeout | undefined = undefined;

  const onMomentumScrollBegin = () => {
    clearTimeout(scrollEndTimer);
  };

  const onMomentumScrollEnd = () => {
    const toValue =
      _scrollValue > SCROLL_DISTANCE && _clampedScrollValue > SCROLL_DISTANCE / 2
        ? _offsetValue + SCROLL_DISTANCE
        : _offsetValue - SCROLL_DISTANCE;

    Animated.timing(offsetAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const onScrollEndDrag = () => {
    scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
  };

  /*---------------------------------------------*
   * RENDER
   *---------------------------------------------*/
  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* HEADER */}
        <Animated.View
          style={[
            styles.headerContainer,
            {paddingTop: insets.top, opacity, transform: [{translateY: headerTranslate}]},
          ]}>
          <Header />
        </Animated.View>
        {/* LIST */}
        <Animated.FlatList
          contentContainerStyle={{paddingTop: insets.top + 60}}
          data={Array.from({length: 100}).map((_, i) => i.toString())}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={() => <ListItem />}
          bounces={false}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
            useNativeDriver: true,
          })}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
          scrollEventThrottle={1}
        />
        {/* BOTTOM TAB */}
      </View>
      <Animated.View
        style={[
          styles.footerContainer,
          {
            paddingBottom: insets.bottom,
            opacity,
            transform: [{translateY: bottomTabTranslate}],
          },
        ]}>
        <Footer />
      </Animated.View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  contentContainer: {
    paddingTop: 60,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});

export default HideBarsOnScrollScreenLayout;
