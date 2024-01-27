import React from 'react';

import HideBarsOnScrollScreenProvider from './_context';
import HideBarsOnScrollScreenLayout from './_layout';

const HideBarsOnScrollScreen = () => {
  return (
    <HideBarsOnScrollScreenProvider>
      <HideBarsOnScrollScreenLayout />
    </HideBarsOnScrollScreenProvider>
  );
};

export default HideBarsOnScrollScreen;
// See at expo router:
// LINK app/stories/hide-bars-on-scroll/index.tsx
