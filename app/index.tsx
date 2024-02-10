import {StoriesListScreen} from '@screens';
import {Redirect} from 'expo-router';
import React from 'react';

const Screen = () => {
  // XXX: ______________________________
  return <Redirect href="/stories/dynamic-header/" />;

  return <StoriesListScreen />;
};

export default Screen;
