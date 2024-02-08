import {
  IContent,
  ICssFrameworks,
  INpmPackage,
  IWrap,
} from "@/interface/common";

const generateCssFrameWorkInfo = (
  activeFrameWork: ICssFrameworks | undefined,
  forNextJs?: boolean
) => {
  let wrapsForCss: IWrap[] = [];
  let npmPackageForCss: INpmPackage[] = [];
  let othersFileFolderForCss: IContent[] = [];

  if (!activeFrameWork) {
    return {
      wrapsForCss,
      npmPackageForCss,
      othersFileFolderForCss,
    };
  }
  switch (activeFrameWork) {
    case ICssFrameworks.MaterialUi:
      npmPackageForCss = [
        { name: "@mui/material", version: "5.14.12" },
        { name: "@mui/icons-material", version: "5.14.12" },
        {
          name: "@emotion/react",
          version: "^11.7.1",
        },
        {
          name: "@emotion/styled",
          version: "^11.6.0",
        },
      ];
      break;
    case ICssFrameworks.Bootstrap:
      npmPackageForCss = [
        { name: "react-bootstrap", version: "^2.9.0" },
        { name: "bootstrap", version: "^5.3.2" },
      ];
      wrapsForCss = [
        {
          importFrom: "import 'bootstrap/dist/css/bootstrap.min.css'",
        },
      ];
      break;
    case ICssFrameworks.AntDesign:
      npmPackageForCss = [{ name: "antd", version: "^5.9.4" }];
      break;
    case ICssFrameworks.ChakraUi:
      npmPackageForCss = [
        { name: "@chakra-ui/icons", version: "1.0.7" },
        { name: "@chakra-ui/react", version: "1.4.1" },
        { name: "@emotion/react", version: "11.1.5" },
        { name: "@emotion/styled", version: "11.1.5" },
        { name: "framer-motion", version: "4.0.3" },
      ];
      wrapsForCss = [
        {
          importFrom: "import { ChakraProvider } from '@chakra-ui/react' ",
          wrapperNameFirst: "ChakraProvider",
          wrapperNameLast: "ChakraProvider",
        },
      ];
      if (forNextJs) {
        npmPackageForCss = [
          ...npmPackageForCss,
          { name: "@chakra-ui/next-js", version: "^2.1.5" },
        ];
      }
      break;
    case ICssFrameworks.Tailwind:
      if (!forNextJs) {
        npmPackageForCss = [
          {
            name: "tailwindcss",
            version: "^3.3.3",
            addToDevDependencies: true,
          },
        ];
        othersFileFolderForCss = [
          {
            fileName: "tailwind.config.js",
            filePath: "tailwind.config.js",
            content: ` /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }`,
          },
          {
            fileName: "index.css",
            filePath: "src\\index.css",
            content: `@tailwind base;
              @tailwind components;
              @tailwind utilities; `,
          },
        ];
      } else {
        npmPackageForCss = [
          {
            name: "tailwindcss",
            version: "^3.3.3",
            addToDevDependencies: true,
          },
          { name: "postcss", version: "^8.4.31", addToDevDependencies: true },
          {
            name: "autoprefixer",
            version: "10.4.16",
            addToDevDependencies: true,
          },
        ];
        othersFileFolderForCss = [
          {
            fileName: "tailwind.config.js",
            filePath: "tailwind.config.js",
            content: `  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
              `,
          },
          {
            fileName: "globals.css",
            filePath: "src\\styles\\globals.css",
            content: `@tailwind base;
              @tailwind components;
              @tailwind utilities; `,
          },
          {
            fileName: "postcss.config.js",
            filePath: "postcss.config.js",
            content: `module.exports = {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              }
               `,
          },
        ];
      }
      break;

    default:
      break;
  }
  return {
    npmPackageForCss,
    wrapsForCss,
    othersFileFolderForCss,
  };
};

export default generateCssFrameWorkInfo;
