import { IFirebaseConfig } from "@/interface";
import Error from "next/error";
import React, { useState } from "react";

type Props = {};

const AuthBoxModal = (props: Props) => {
  const [jsonData, setJsonData] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState<null | string>(null);
  const allKeys = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
    "measurementId",
  ];
  const p = (parsed: any) => {
    for (const key in parsed) {
      if (typeof parsed[key] === "string" && allKeys.includes(key)) {
      } else {
        throw new Error("dfd");
      }
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    const replacedString = inputValue.replace(/^(\s*)([\w]+):/gm, '$1"$2":');
    console.log(replacedString);

    try {
      // Attempt to parse the JSON data
      const parsed = JSON.parse(replacedString);
      p(parsed);
      setParsedData(parsed);

      setError(null);
    } catch (e) {
      // If parsing fails, set an error
      setParsedData(null);
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An error occurred while parsing the JSON.");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-robot">
          Enter your Firebase Configuration
        </h2>
        <div>
          <button
            disabled={!Boolean(parsedData)}
            className="generator-button disabled:grayscale grayscale-0 transition-all"
          >
            Add
          </button>
        </div>
      </div>
      <p className="text-green-400 mt-2">{`Don't worry we won't save this information`}</p>
      <div>
        <textarea
          placeholder={`{
          apiKey:xxxxx,
          authDomain:yyyy,
          project:zzzz,
          storageBucket:kkkk,
          messagingSenderId: mmm,
          appId: jjjj,
          measurementId: ppp
}`}
          onChange={handleInputChange}
          className="w-full h-60 resize-none bg-secondary rounded px-2 py-3"
        ></textarea>

        {error && <p className="text-error-primary">{error}</p>}
      </div>
    </div>
  );
};

export default AuthBoxModal;
