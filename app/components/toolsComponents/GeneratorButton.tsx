import { authKey } from "@/constants/storageKey";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppSelector } from "@/redux/app/store";
import generateCssFrameWorkInfo from "@/utils/generateCssFrameWorkInfo";
import { getFromLocalStorage } from "@/utils/local-storage";
import { faDownload, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function GeneratorButton({ url, isNextJs }: { url: string, isNextJs?: boolean }) {

    const [downloadLink, setDownloadLink] = useState("");
    const [loading, setLoading] = useState(false);
    const { name, technology } = useAppSelector((state) => state.basicInfo);
    const modules = useAppSelector((state) => state.backendGen);
    const {
        pages,
        cssFrameWork,
        npmPackages,
        hooks,
        auths,
        apis,
        firebaseConfig,
    } = useAppSelector((state) => state.frontEndGen);
    const debouncedValue = useDebounce<string>(name || "demo", 500);

    // add css framework
    const { wrapsForCss, npmPackageForCss, othersFileFolderForCss } =
        useMemo(() => {
            return generateCssFrameWorkInfo(cssFrameWork, isNextJs);
        }, [cssFrameWork, isNextJs]);

    // handle generate button click
    const handleGenerate = () => {
        const camelCase = /^[a-z][a-zA-Z]*$/;
        if (!camelCase.test(debouncedValue)) {
            toast.error(
                "Please enter project name in pure word no special character, space, or number allowed ",
                { autoClose: 5000 }
            );
            return;
        }
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: getFromLocalStorage(authKey) || "",
            },
            body: JSON.stringify({
                // for front end generator
                apis: apis.length ? apis : undefined,
                pages,
                technology,
                firebaseAuth: {
                    auth: auths.length ? auths : undefined,
                    config: firebaseConfig,
                },
                hooks: hooks.length ? hooks : undefined,
                npmPackages: [...npmPackages, ...npmPackageForCss],
                wrappers: [...wrapsForCss],
                othersFileFolder: [...othersFileFolderForCss],
                // only for backend
                modules: modules,
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
    return (
        <div
            className={`flex transition-all gap-2 ${loading && "blur-sm pointer-events-none"
                } `}
        >
            {downloadLink ? (
                <a
                    href={downloadLink}
                    download={`${name || "demo"}.zip`}
                    className="download-button"
                >
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Download</span>
                </a>
            ) : (
                <></>
            )}
            <button onClick={handleGenerate} className="generator-button">
                <FontAwesomeIcon icon={faGear} />
                <span>{downloadLink ? "Re" : "Start"} Generator</span>
            </button>
        </div>
    );
};
