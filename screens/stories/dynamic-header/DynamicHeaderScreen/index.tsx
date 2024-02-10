import React from 'react';

import DynamicHeaderScreenProvider from './_context';
import DynamicHeaderScreenLayout from './_layout';

const DynamicHeaderScreen = () => {
  return (
    <DynamicHeaderScreenProvider>
      <DynamicHeaderScreenLayout />
    </DynamicHeaderScreenProvider>
  );
};

export default DynamicHeaderScreen;
// See at expo router:
// LINK app/stories/dynamic-header/index.tsx
