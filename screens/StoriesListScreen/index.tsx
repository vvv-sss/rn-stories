import React from 'react';

import StoriesListScreenProvider from './_context';
import StoriesListScreenLayout from './_layout';

const StoriesListScreen = () => {
  return (
    <StoriesListScreenProvider>
      <StoriesListScreenLayout />
    </StoriesListScreenProvider>
  );
};

export default StoriesListScreen;
// See at expo router:
// LINK app/index.tsx
