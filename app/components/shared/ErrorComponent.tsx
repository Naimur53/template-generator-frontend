export default function ErrorComponent({ error }: { error?: string }) {
    return (
        <div className="flex justify-center items-center text-red-900 font-bold text-xl">
            <span>{error || "Something went wrong"}</span>
        </div>
    );
};
