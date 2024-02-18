import React from 'react';

import TextInputsScreenProvider from './_context';
import TextInputsScreenLayout from './_layout';

const TextInputsScreen = () => {
  return (
    <TextInputsScreenProvider>
      <TextInputsScreenLayout />
    </TextInputsScreenProvider>
  );
};

export default TextInputsScreen;
// See at expo router:
// LINK app/stories/text-inputs/index.tsx
