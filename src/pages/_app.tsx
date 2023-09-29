import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "@/styles/Sidebar.css";
import "@/Components/ToolsComponents/TechnologyBox/TechnologyBox.css";
import "@/Components/ToolsComponents/FrameworkBox/FrameworkBox.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer
        position="bottom-center"
        theme={"dark"}
        pauseOnHover={false}
        hideProgressBar={true}
        limit={2}
        autoClose={2000}
      />
    </>
  );
}
