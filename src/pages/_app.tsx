import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "@/styles/FieldInputs.css";
import "@/styles/Sidebar.css";
import "@/Components/ToolsComponents/TechnologyBox/TechnologyBox.css";
import "@/Components/ToolsComponents/FrameworkBox/FrameworkBox.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import RootLayout from "@/Layout/RootLayout/RootLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </>
  );
}
