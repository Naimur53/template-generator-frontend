import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [downloadLink, setDownloadLink] = useState("");
  const handleDownload = () => {
    fetch("http://localhost:5001/mongoose/na", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Your request data here
        modules: [
          {
            name: "user",
            fields: [
              {
                fieldName: "name",
                type: "string",
                isRequired: true,
                length: 50,
              },
              { fieldName: "age", type: "number" },
            ],
            shouldAddPaginationAndQuery: true,
            searchTermFields: ["name"],
            exactMatchFields: ["age"],
          },
        ],
        apis: ["user", "book", "cow"],
        pages: ["home", "allUser", "dashboard"],
        technology: "js",
        firebaseAuth: {
          auth: ["google", "facebook"],
          config: {
            apiKey: "AIzaSyArSUM6DZMorKHFFjNdNBw8-TguG_FWwPk",
            authDomain: "user-loging.firebaseapp.com",
            projectId: "user-loging",
            storageBucket: "user-loging.appspot.com",
            messagingSenderId: "893515059715",
            appId: "1:893515059715:web:09c2a7a838e8880db47436",
            measurementId: "G-MG2PLSG86W",
          },
        },
        hooks: [
          "useCustomHook.ts",
          "useToggle.ts",
          "useTimeout.ts",
          "useDebounce.ts",
          "useUpdateEffect.ts",
          "useArray.ts",
          "usePrevious.ts",
          "useStateWithHistory.ts",
          "useStorage.ts",
          "useFetch.ts",
          "useEventListener.ts",
          "useOnScreen.ts",
          "useWindowSize.ts",
          "useWindowSize.ts",
          "useAsync.ts",
        ],
      }),
    })
      .then((response: Response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            // Check if the error response has a "message" property
            if (errorData && errorData.message) {
              console.log(errorData);
              throw new Error(`HTTP error! Status: ${errorData.message}`);
            } else {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
          });
        }
        return response.blob();
      })
      .then((blob: Blob) => {
        // Handle successful response here
        const url = window.URL.createObjectURL(blob);
        setDownloadLink(url);

        // Create a hidden link element
        const link = document.createElement("a");
        link.href = url;
        link.download = "mongoose.zip";

        // Trigger a click event on the link to initiate the download
        link.click();

        // Clean up: remove the link and revoke the object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error: Error) => {
        // Handle errors, including custom error responses
        console.error("Error while fetching:", error);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <button
        className="bg-green-900 rounded py-3 px-3 font-bold text-white "
        onClick={handleDownload}
      >
        Download Folder
      </button>
    </div>
  );
}
