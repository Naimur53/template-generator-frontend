import { ISingleNavItem } from "@/interface";

export const navItemsFrontEnd: ISingleNavItem[] = [
  { icon: "/icons/react.png", title: "React", to: "/react-template" },
  {
    icon: "/icons/react-redux.png",
    title: "React Redux",
    subNav: [
      { title: "Create Template", to: "/react-redux-template-creator" },
      {
        title: "Api slice Folder creator",
        to: "/react-redux-feature-creator",
      },
    ],
  },
  { icon: "/icons/next.png", title: "Next js", to: "/nextJs-template" },
  {
    icon: "/icons/nextRedux.png",
    title: "Next Redux",
    subNav: [
      { title: "Create Template", to: "/next-redux-template-creator" },
      { title: "Api slice Folder creator", to: "/next-api-feature-creator" },
    ],
  },
];

export const navItemsBackend: ISingleNavItem[] = [
  {
    icon: "/icons/mongodb.png",
    title: "Mongoose",
    subNav: [
      {
        title: "Template And Modules",
        to: "/mongoose-template-creator",
      },
      { title: "Only Modules", to: "/mongoose-modules-creator" },
    ],
  },
  {
    icon: "/icons/prisma.png",
    title: "Postgres",
    subNav: [
      {
        title: "Template And Modules",
        to: "/postgres-template-creator",
      },
      { title: "Only Modules", to: "/postgres-modules-creator" },
    ],
  },
];
