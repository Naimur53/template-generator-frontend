import GeneratorButton from "@/app/components/toolsComponents/GeneratorButton";
import ReduxApiSliceCreatorBox from "@/app/components/toolsComponents/ReduxApiSliceCreatorBox";
import TechnologyBox from "@/app/components/toolsComponents/TechnologyBox";
import { allUrls } from "@/utils/allUrl";

export default function page() {
    return (
        <div>
            <div className="page-upper-content-wrap">
                <div className="flex gap-3">
                    <h1 className="text-3xl font-semibold font-robot">
                        Create Redux Features
                    </h1>
                </div>
                <div>
                    <GeneratorButton
                        url={allUrls.reduxFeatureGenURL()}
                    />
                </div>
            </div>
            <div className="grid gap-4  grid-cols-1 xl:grid-cols-4">
                <TechnologyBox />

                <div className="col-span-3">
                    <ReduxApiSliceCreatorBox />
                </div>
            </div>
        </div>
    );
};
