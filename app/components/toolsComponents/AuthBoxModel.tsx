'use client'

import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addFirebaseConfig } from "@/redux/features/frontEndGen/frontEndGen";
import { useState } from "react";

type TAuthBoxModel = { onClose: (arg0: any) => void };

export default function AuthBoxModel({ onClose }: TAuthBoxModel) {
    const firebaseConfig = useAppSelector(
        (state) => state.frontEndGen.firebaseConfig
    );
    const dispatch = useAppDispatch();
    const [parsedData, setParsedData] = useState(null);
    const [error, setError] = useState<null | string>(null);
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        const replacedString = inputValue.replace(/^(\s*)([\w]+):/gm, '$1"$2":');
        if (!inputValue.length) {
            setParsedData(null);
            setError(null);
            return;
        }
        try {
            const allKeys = [
                "apiKey",
                "authDomain",
                "projectId",
                "storageBucket",
                "messagingSenderId",
                "appId",
                "measurementId",
            ];
            // Attempt to parse the JSON data
            const parsed = JSON.parse(replacedString);
            console.log(parsed);

            for (const key in parsed) {
                if (!(typeof parsed[key] === "string" && allKeys.includes(key))) {
                    setError(`In valid data ${key}`);
                    return;
                }
            }
            if (!Object.keys(parsed).length) {
                return;
            }
            setParsedData(parsed);

            setError(null);
        } catch (e) {
            // If parsing fails, set an error
            setParsedData(null);
            setError("An error occurred while parsing the JSON.");
        }
    };

    const handleAddConfig = () => {
        dispatch(addFirebaseConfig(parsedData || undefined));
        onClose(false);
    };
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-robot">
                    Enter your Firebase Configuration
                </h2>
            </div>
            <p className="text-green-400 my-2">{`Don't worry we won't save this information`}</p>
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
                    defaultValue={JSON.stringify(firebaseConfig)}
                    onChange={handleInputChange}
                    className="w-full h-60 resize-none bg-lightCyan rounded px-2 py-3"
                ></textarea>

                {error && <p className="text-error-primary">{error}</p>}
            </div>
            <div className="flex justify-end">
                <button
                    disabled={Boolean(error)}
                    onClick={handleAddConfig}
                    className="generator-button disabled:grayscale grayscale-0 transition-all"
                >
                    Save
                </button>
            </div>
        </div>
    );
};
