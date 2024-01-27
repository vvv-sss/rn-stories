import React from 'react';

import ContentScreenProvider from './_context';
import ContentScreenLayout from './_layout';

const ContentScreen = () => {
  return (
    <ContentScreenProvider>
      <ContentScreenLayout />
    </ContentScreenProvider>
  );
};

export default ContentScreen;
// See at expo router:
// LINK <relative_path_to_screen>
