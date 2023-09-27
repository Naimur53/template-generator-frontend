import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "@/styles/Sidebar.css";
import "@/Components/ToolsComponents/TechnologyBox/TechnologyBox.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
