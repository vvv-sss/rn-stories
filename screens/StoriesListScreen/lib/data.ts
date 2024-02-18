import {Href} from 'expo-router';

export type Item = {
  id: string;
  title: string;
  description: string;
  path: Href<string>;
};

type Section = {
  title: string;
  data: Item[];
};

export type ListData = Section[];

export const listData: ListData = [
  {
    title: '✨ RN Stories ✨',
    data: [
      {
        id: '1',
        title: 'Scroll-responsive dynamic header and bottom bar visibility',
        description:
          'This story will show you how to hide the header and bottom bar when the user scrolls down and show them again when the user scrolls up.',
        path: '/stories/hide-bars-on-scroll/',
      },
      {
        id: '2',
        title: 'Permissions handling flow',
        description:
          'This flow is used to handle permissions in your app. It will check if the user has granted the required permissions and if not, it will request them.',
        path: '/stories/permissions/',
      },
      {
        id: '3',
        title: 'Dynamic header and custom scroll animation',
        description:
          'In this example the header will change its size and content based on the scroll position of the screen. Background is interpolated while user scrolls the view. There is also a custom animation for the scroll items to make it look more dynamic.',
        path: '/stories/dynamic-header/',
      },
      {
        id: '4',
        title: 'Text inputs handling',
        description:
          'This flow is used to handle text inputs in your app. The focus is on the following: handling the text input view and its appearance; handling the keyboard avoiding view; handling the text input value and its validation using React Hook Form; handling the text input error message and its appearance.',
        path: '/stories/text-inputs/',
      },
    ],
  },
];
