import type {Metadata} from "next";
import {Exo} from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from 'sonner';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const exo = Exo({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "IlluminatedInteractive",
    description: "This is the Official IlluminatedInteractive Homepage",
};


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${exo.className} antialiased flex flex-col min-h-screen`}>
        <div className="">
            <Navbar></Navbar>
            <main>
                {children}
                <Toaster position="top-right" richColors/>
            </main>
        </div>
        <Footer></Footer>
        </body>
        </html>
    );
}
