import React from "react";

import WelcomeScreenProvider from "./_context";
import WelcomeScreenLayout from "./_layout";

const WelcomeScreen = () => {
  return (
    <WelcomeScreenProvider>
      <WelcomeScreenLayout />
    </WelcomeScreenProvider>
  );
};

export default WelcomeScreen;
// See at expo router:
// LINK app/stories/permissions/index.tsx
