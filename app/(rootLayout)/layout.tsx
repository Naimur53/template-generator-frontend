import Navbar from "../components/shared/Navbar";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=''>
            <Navbar />
            {children}
        </div>
    );
};
