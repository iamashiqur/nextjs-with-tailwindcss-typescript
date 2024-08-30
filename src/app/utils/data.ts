import { IHeaderNavItems } from "./type";

export const headerNavItems: IHeaderNavItems[] = [
  {
    id: 1,
    name: "OUR MODELS",
    path: "/our-models",
    dropdown: [
      {
        id: 1,
        name: "Something",
        path: "/some-thing",
      },
    ],
  },

  {
    id: 2,
    name: "HOW IT’S DONE",
    path: "/how-its-done",
    dropdown: [],
  },

  {
    id: 3,
    name: "WHAT IT COST",
    path: "/what-it-cost",
    dropdown: [],
  },
  {
    id: 4,
    name: "SOLAR",
    path: "/solar",
    dropdown: [],
  },
  {
    id: 5,
    name: "ABOUT US",
    path: "/about-us",
    dropdown: [],
  },
  {
    id: 6,
    name: "BLOG",
    path: "/blog",
    dropdown: [],
  },
];
