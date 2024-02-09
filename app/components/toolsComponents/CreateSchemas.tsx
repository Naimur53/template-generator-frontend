import { useAppSelector } from "@/redux/app/store";
import Image from "next/image";
import SingleMongooseSchemaCreator from "./SingleMongooseSchemaCreator";

export default function CreateSchemas() {

    const allModule = useAppSelector((state) => state.backendGen);

    return (
        <div>
            <div className="commonBox">
                <div className="commonBox-title-wrap">
                    <Image
                        width={32}
                        height={26}
                        src="/icons/schema-icon.png"
                        alt="code"
                    />
                    <h4>Create Schemas</h4>
                </div>
                <div>
                    {allModule.map((single) => (
                        <SingleMongooseSchemaCreator key={single.name} {...single} />
                    ))}
                </div>
            </div>
        </div>
    );
};
