import React from 'react';

import AboutScreenProvider from './_context';
import AboutScreenLayout from './_layout';

const AboutScreen = () => {
  return (
    <AboutScreenProvider>
      <AboutScreenLayout />
    </AboutScreenProvider>
  );
};

export default AboutScreen;
// See at expo router:
// LINK <relative_path_to_screen>
