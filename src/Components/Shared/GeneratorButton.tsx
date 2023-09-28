import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faDownload } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/app/store";
type Props = {
  url: string;
};

const GeneratorButton = ({ url }: Props) => {
  const [downloadLink, setDownloadLink] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    name,
    technology,
    pages,
    cssFrameWork,
    npmPackages,
    hooks,
    auths,
    firebaseConfig,
  } = useAppSelector((state) => state.frontEndGen);

  const handleGenerate = () => {
    setLoading(true);
    fetch(url, {
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
        pages,
        technology,
        firebaseAuth: {
          auth: auths.length ? auths : undefined,
          config: firebaseConfig,
        },
        hooks: hooks.length ? hooks : undefined,
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
        // const link = document.createElement("a");
        // link.href = url;
        // link.download = "mongoose.zip";

        // Trigger a click event on the link to initiate the download
        // link.click();

        // Clean up: remove the link and revoke the object URL
        // document.body.removeChild(link);
        // window.URL.revokeObjectURL(url);
        toast.success("successfully generated");
      })
      .catch((error: Error) => {
        // Handle errors, including custom error responses
        console.error("Error while fetching:", error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  console.log(downloadLink);
  return (
    <div
      className={`flex transition-all gap-2 ${
        loading && "blur-sm pointer-events-none"
      } `}
    >
      {downloadLink ? (
        <a
          href={downloadLink}
          download={`${name || "demo"}.zip`}
          className="download-button"
        >
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          <span>Download</span>
        </a>
      ) : (
        <></>
      )}
      <button onClick={handleGenerate} className="generator-button">
        <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        <span>{downloadLink ? "Re" : "Start"} Generator</span>
      </button>
    </div>
  );
};

export default GeneratorButton;
