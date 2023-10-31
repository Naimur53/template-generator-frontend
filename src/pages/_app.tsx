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
import UserLoading from "@/Components/LoadingCom/UserLoading";
export default function App({ Component, pageProps, router }: AppProps) {
  console.log(router.route);

  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} key={router.route} />
          <div className="fixed overflow-hidden inset-0">
            <Background></Background>
          </div>
          <UserLoading></UserLoading>
        </RootLayout>
      </Provider>
    </>
  );
}
