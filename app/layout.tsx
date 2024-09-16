import React from "react";
import Navigation from "@/app/_components/Navigation";
import {Metadata} from "next";
import Logo from "@/app/_components/Logo";

import '@/app/_styles/globals.css'

export const metadata: Metadata = {
    // title: "The Wild Oasis",
    title: {
        template: "%s | The Wild Oasis",
        default: "Welcome | The Wild Oasis",
    },
    description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
            <Logo/>
            <Navigation/>
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
        </body>
        </html>
    );
}
