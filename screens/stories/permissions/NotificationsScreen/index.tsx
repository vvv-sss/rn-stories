import React from 'react';

import NotificationsScreenProvider from './_context';
import NotificationsScreenLayout from './_layout';

const NotificationsScreen = () => {
  return (
    <NotificationsScreenProvider>
      <NotificationsScreenLayout />
    </NotificationsScreenProvider>
  );
};

export default NotificationsScreen;
// See at expo router:
// LINK app/stories/permissions/notifications.tsx
