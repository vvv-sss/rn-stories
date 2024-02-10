import React, {FC, useContext} from 'react';
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft, BellPlus, Plus} from 'lucide-react-native';
import {DynamicHeaderScreenContext} from './_context';
import {useStatusBarStyle} from '../../../../lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {tasks} from './lib';
import {withAlphaHex} from 'with-alpha-hex';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
  scrollTo,
} from 'react-native-reanimated';

const {height} = Dimensions.get('screen');

const HeaderMaxHeight = height * 0.3;
const HeaderMinHeight = 80;
const ScrollDistance = 100;

const textColor = '#b9e2f5';
const surfaceColor = '#0e1111';

const DynamicHeaderScreenLayout: FC = () => {
  const {handleArrowLeftPress} = useContext(DynamicHeaderScreenContext);

  void useStatusBarStyle('dark');

  const insets = useSafeAreaInsets();

  const animatedRef = useAnimatedRef();

  const animatedContainerBackground = useSharedValue('#648CF6');
  const animatedHeaderHeight = useSharedValue(HeaderMaxHeight);
  const animatedTopDateTranslateY = useSharedValue(-100);
  const animatedMainDateOpacity = useSharedValue(1);
  const animatedTopDateOpacity = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      animatedContainerBackground.value = interpolateColor(
        e.contentOffset.y,
        [0, ScrollDistance],
        ['#648CF6', '#F3B4D8'],
      );
      animatedHeaderHeight.value = interpolate(
        e.contentOffset.y,
        [0, ScrollDistance * 3],
        [HeaderMaxHeight, HeaderMinHeight],
        Extrapolation.CLAMP,
      );
      animatedTopDateTranslateY.value = interpolate(
        e.contentOffset.y,
        [0, ScrollDistance * 3],
        [-100, 0],
        Extrapolation.CLAMP,
      );
      animatedMainDateOpacity.value = interpolate(
        e.contentOffset.y,
        [0, ScrollDistance * 1.5],
        [1, 0],
        Extrapolation.CLAMP,
      );
      animatedTopDateOpacity.value = interpolate(
        e.contentOffset.y,
        [ScrollDistance * 0.8, ScrollDistance],
        [0, 1],
        Extrapolation.CLAMP,
      );
    },
    onEndDrag: e => {
      if (e.contentOffset.y < ScrollDistance) {
        scrollTo(animatedRef, 0, 0, true);
        animatedHeaderHeight.value = withTiming(HeaderMaxHeight);
        animatedTopDateTranslateY.value = withTiming(-100);
      }

      if (e.contentOffset.y > ScrollDistance) {
        animatedHeaderHeight.value = withTiming(HeaderMinHeight);
        animatedTopDateTranslateY.value = withTiming(0);
      }
    },
    onMomentumEnd: e => {
      if (e.contentOffset.y < ScrollDistance) {
        scrollTo(animatedRef, 0, 0, true);
        animatedHeaderHeight.value = withTiming(HeaderMaxHeight);
        animatedTopDateTranslateY.value = withTiming(-100);
      }

      if (e.contentOffset.y > ScrollDistance) {
        animatedHeaderHeight.value = withTiming(HeaderMinHeight);
        animatedTopDateTranslateY.value = withTiming(0);
      }
    },
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {paddingTop: insets.top + 10, backgroundColor: animatedContainerBackground},
      ]}>
      <Animated.View style={[styles.header, {height: animatedHeaderHeight}]}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={handleArrowLeftPress}
            style={styles.iconButton}>
            <ArrowLeft
              size={30}
              color={textColor}
            />
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.dateContainer,
              {
                opacity: animatedTopDateOpacity,
                transform: [{translateY: animatedTopDateTranslateY}],
              },
            ]}>
            <Text style={styles.dateText}>Mar 27, Wed</Text>
          </Animated.View>
          <TouchableOpacity
            onPress={() => Alert.alert('Add new task')}
            style={styles.iconButton}>
            <Plus
              size={30}
              color={textColor}
            />
          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.mainDateContainer, {opacity: animatedMainDateOpacity}]}>
          <Text style={styles.mainDateText}>Wednesday</Text>
          <Text style={styles.subDateText}>27.03</Text>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        ref={animatedRef}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: HeaderMaxHeight}}>
        {tasks.map(task => {
          return (
            <View
              key={task.id}
              style={styles.taskContainer}>
              <View style={styles.taskContent}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <TouchableOpacity onPress={() => Alert.alert('Add reminder')}>
                  <BellPlus
                    size={24}
                    color={textColor}
                    strokeWidth={1}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.taskDetails}>
                <View>
                  <Text style={styles.detailText}>Start</Text>
                  <Text style={styles.detailText}>{task.start}</Text>
                </View>
                <View style={styles.durationBadge}>
                  <Text style={styles.durationText}>{task.duration}</Text>
                </View>
                <View style={styles.endTaskContainer}>
                  <Text style={styles.detailText}>End</Text>
                  <Text style={styles.detailText}>{task.end}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: surfaceColor,
  },
  dateContainer: {
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: withAlphaHex(surfaceColor, 0.2),
  },
  dateText: {
    color: surfaceColor,
    fontSize: 24,
    fontWeight: '600',
  },
  mainDateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mainDateText: {
    color: surfaceColor,
    fontSize: 40,
    fontWeight: '600',
  },
  subDateText: {
    color: surfaceColor,
    fontSize: 60,
    fontWeight: '500',
  },
  taskContainer: {
    height: 150,
    padding: 20,
    marginHorizontal: 15,
    marginTop: 5,
    borderRadius: 30,
    backgroundColor: surfaceColor,
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    color: textColor,
    fontWeight: '400',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  taskDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {
    color: textColor,
    fontSize: 18,
    fontWeight: '300',
  },
  durationBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 99,
    backgroundColor: withAlphaHex(textColor, 0.2),
  },
  durationText: {
    color: textColor,
    fontWeight: '300',
  },
  endTaskContainer: {
    alignItems: 'flex-end',
  },
});

export default DynamicHeaderScreenLayout;
