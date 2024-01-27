import {Href} from 'expo-router';

export type Item = {
  id: string;
  title: string;
  path: Href<string>;
};

type Section = {
  title: string;
  data: Item[];
};

export type ListData = Section[];

export const listData: ListData = [
  {
    title: '✨ UI Stories',
    data: [
      {
        id: '1',
        title: 'Scroll-responsive dynamic header and bottom bar visibility',
        path: '/stories/hide-bars-on-scroll/',
      },
    ],
  },
];
