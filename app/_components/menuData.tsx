type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Transportation",
        path: "/services/transportation",
        newTab: false,
      },
      {
        id: 32,
        title: "Packing",
        path: "/services/packing",
        newTab: false,
      },
      {
        id: 33,
        title: "Moving",
        path: "/services/moving",
        newTab: false,
      },
      {
        id: 34,
        title: "Cleaning",
        path: "/services/cleaning",
        newTab: false,
      },
      {
        id: 35,
        title: "rubbish",
        path: "/services/rubbish",
        newTab: false,
      },
      {
        id: 36,
        title: "delivery",
        path: "/services/delivery",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
