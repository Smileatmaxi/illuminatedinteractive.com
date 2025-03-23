import type {Metadata} from "next";
import {Exo} from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from 'sonner';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

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
        <head>
            <Script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-draft="true" data-settings-id="XUJm6tLW5us2K1" async></Script>
        </head>
        <body className={`${exo.className} antialiased flex flex-col min-h-screen`}>
        <div className="">
            <Navbar></Navbar>
            <main>
                <Toaster position="top-right" duration={3000} richColors/>
                {children}
            </main>
        </div>
        <Footer></Footer>
        </body>
        </html>
    );
}
