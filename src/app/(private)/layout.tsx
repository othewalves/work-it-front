import Menubar from "../components/menubar";

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <Menubar />
            {children}
        </div>
    );
}
