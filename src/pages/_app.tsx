import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "@/styles/FieldInputs.css";
import "@/styles/Sidebar.css";
import "@/Components/ToolsComponents/TechnologyBox/TechnologyBox.css";
import "@/Components/ToolsComponents/FrameworkBox/FrameworkBox.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import RootLayout from "@/Layout/RootLayout/RootLayout";
import { AnimatePresence } from "framer-motion";
import Background from "@/Components/ToolsComponents/Background/Background";
import { TSingleBackground } from "@/interface/common";
export default function App({ Component, pageProps, router }: AppProps) {
  console.log(router.route);
  const initialLeft = { x: "-100%", y: "-100%", opacity: 0, rotate: 90 };
  const animateLeft = {
    x: "-50%",
    y: "-50%",
    opacity: 100,
    rotate: 0,
  };
  const initialRight = { x: "100%", y: "30%", rotate: 90, opacity: 0 };
  const animateRight = { x: "30%", y: "30%", rotate: 0, opacity: 1 };
  const shouldAnimate = (url: string[]) =>
    url.some((single) => single === router.route);

  const datas: TSingleBackground[] = [
    {
      initial: initialLeft,
      animate: animateLeft,
      exit: initialLeft,
      imgUrl: "/images/large-react.png",
      className: "left-0 top-1/3",
      imgClassName: "w-[3000px]",
      activeUrls: [
        "/tools/reactTem",
        "/tools/reactReduxTemplateCreator",
        "/tools/reactReduxApiFeatureCreator",
      ],
    },

    {
      initial: initialRight,
      animate: animateRight,
      exit: initialRight,
      imgUrl: "/icons/redux-icon.png",
      className: "bottom-0 right-0",
      activeUrls: [
        "/tools/reactReduxTemplateCreator",
        "/tools/nextTem",
        "/tools/reactReduxApiFeatureCreator",
      ],
    },
  ];
  const activeBgs = datas.filter((single) => {
    return shouldAnimate(single.activeUrls);
  });
  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} key={router.route} />
          <div className="fixed overflow-hidden inset-0">
            <>
              <Background></Background>
            </>
          </div>
        </RootLayout>
      </Provider>
    </>
  );
}
