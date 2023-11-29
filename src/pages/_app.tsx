import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "@/styles/FieldInputs.css";
import "@/styles/BackendCustomChart.css";
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
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
          <NextNProgress />
          <div className="fixed overflow-hidden inset-0 select-none">
            <Background></Background>
          </div>
          <UserLoading></UserLoading>
        </RootLayout>
      </Provider>
    </>
  );
}
