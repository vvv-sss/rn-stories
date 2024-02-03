import React from 'react';

import LocationScreenProvider from './_context';
import LocationScreenLayout from './_layout';

const LocationScreen = () => {
  return (
    <LocationScreenProvider>
      <LocationScreenLayout />
    </LocationScreenProvider>
  );
};

export default LocationScreen;
// See at expo router:
// LINK app/stories/permissions/location.tsx
