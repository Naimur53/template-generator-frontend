import { ISingleNavItem } from "@/interface";

export const navItemsFrontEnd: ISingleNavItem[] = [
  { icon: "/icons/react.png", title: "React", to: "/reactTem" },
  {
    icon: "/icons/react-redux.png",
    title: "React Redux",
    subNav: [
      { title: "Create Template", to: "/reactReduxTemplateCreator" },
      {
        title: "Api slice Folder creator",
        to: "/reactReduxApiFeatureCreator",
      },
    ],
  },
  { icon: "/icons/next.png", title: "Next js", to: "/nextTem" },
  {
    icon: "/icons/nextRedux.png",
    title: "Next Redux",
    subNav: [
      { title: "Create Template", to: "/nextReduxTemplateCreator" },
      { title: "Api slice Folder creator", to: "/nextApiFeatureCreator" },
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
        to: "/mongooseTemplateCreator",
      },
      { title: "Only Modules", to: "/mongooseModulesCreator" },
    ],
  },
  {
    icon: "/icons/prisma.png",
    title: "Postgres",
    subNav: [
      {
        title: "Template And Modules",
        to: "/postgresTemplateCreator",
      },
      { title: "Only Modules", to: "/postgresModulesCreator" },
    ],
  },
];
