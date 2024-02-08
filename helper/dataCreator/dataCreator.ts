import { ICssFrameworks } from "@/interface/common";
type ISingleTechnology = {
  name: string;
  icon: string;
};
const cssItems: ISingleTechnology[] = [
  {
    name: ICssFrameworks.MaterialUi,
    icon: "/images/mui.png",
  },
  {
    name: ICssFrameworks.Tailwind,
    icon: "/images/tailwind.png",
  },
  {
    name: ICssFrameworks.Bootstrap,
    icon: "/images/bootstrap.png",
  },
  {
    name: ICssFrameworks.ChakraUi,
    icon: "/images/charka.png",
  },
  {
    name: ICssFrameworks.AntDesign,
    icon: "/images/ant.png",
  },
];

const languages: ISingleTechnology[] = [
  {
    name: "Javascript",
    icon: "/images/javascript-img.png",
  },
  {
    name: "Typescript",
    icon: "/images/typescript-img.png",
  },
];
const jsFrameWorks: ISingleTechnology[] = [
  {
    name: "React",
    icon: "/images/large-react.png",
  },
  {
    name: "Next",
    icon: "/images/large-next-white.png",
  },
];

let allFrontendAnimationPossibleData: ISingleTechnology[][] = [];
cssItems.forEach((cssItem, index) => {
  let items: ISingleTechnology[][] = [];
  languages.forEach((singleLang, i) => {
    jsFrameWorks.forEach((singleFrameWork) => {
      [0, 1].forEach((singleRedux) => {
        const innerData = [
          singleLang,
          cssItem,
          { name: "Hooks", icon: "/icons/hooks-icon.png" },
          { name: "Firebase", icon: "/icons/firebase-icon.png" },
          { name: "Redux", icon: "/icons/redux-icon.png" },
          singleFrameWork,
        ];
        items.push(innerData);
      });
    });
  });
  allFrontendAnimationPossibleData.push(...items);
});

export const dataCreator = {
  allFrontendAnimationPossibleData,
};
