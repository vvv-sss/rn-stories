import React from 'react';

import FinalScreenProvider from './_context';
import FinalScreenLayout from './_layout';

const FinalScreen = () => {
  return (
    <FinalScreenProvider>
      <FinalScreenLayout />
    </FinalScreenProvider>
  );
};

export default FinalScreen;
// See at expo router:
// LINK app/stories/permissions/final.tsx
