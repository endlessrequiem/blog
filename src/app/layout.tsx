import type {Metadata} from "next";
import {Geist_Mono} from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Austin White, Software Engineer",
    description: "Portfolio of Austin White, Software Engineer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={geistMono.variable}>
        {children}
        </body>
        </html>
    );
}
