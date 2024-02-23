export default function ErrorComponent({ error }: { error?: string }) {
    return (
        <div className="flex justify-center items-center text-red-900 font-bold text-2xl h-[50dvh]">
            <span>{error || "Something went wrong"}</span>
        </div>
    );
};
