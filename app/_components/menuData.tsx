type Menu = {
  id: number;
  title: string;
  label?: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    label: "Heim",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    label: "Über Uns",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    label: "Dienstleistungen",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Moving",
        label: "Umzug",
        path: "/services/moving",
        newTab: false,
      },
      {
        id: 32,
        title: "Cleaning",
        label: "Reinigung",
        path: "/services/cleaning",
        newTab: false,
      },
      {
        id: 33,
        title: "Painting",
        label: "Maler Arbeit im Innenbereich",
        path: "/services/painting",
        newTab: false,
      },
      {
        id: 34,
        title: "Furniture",
        label: "Möbel und Lampen Montag",
        path: "/services/furniture",
        newTab: false,
      },
      {
        id: 35,
        title: "Disposal",
        label: "Entsorgung und Räumungen",
        path: "/services/disposal",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: "Contact",
    label: "Kontakt",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
