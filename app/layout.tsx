import type { Metadata } from "next";
import { Exo} from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import { Toaster } from 'sonner';

const exo = Exo ({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Illuminated Interactive",
    description: "This is the Official of Illuminated Interactive",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${exo.className} antialiased flex flex-col min-h-screen`}>
        <nav className="bg-neutral-100/25 text-white shadow-lg sticky top-0 z-50">
            <div className="navbar">
                <div className="flex-1">
                    <Link className="text-3xl" href="/">ILLUMINATED-INTERACTIVE</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal mx-5">
                        <li><Link className="link link-hover text-xl" href="">Info</Link></li>
                        <li><Link className="link link-hover text-xl" href="">News</Link></li>
                        <li><Link className="link link-hover text-xl" href="">Media</Link></li>
                        <li><Link className="link link-hover text-xl" href="AboutUs">AboutUs</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <main className="grow">
            <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
                <div className="home-content">
                </div>
            </div>
            {children}
            <Toaster position="top-right" richColors/>
        </main>
            <footer className="footer footer-center bg-neutral-900 text-base-content rounded p-5">
                <nav className="grid grid-flow-col gap-4">
                    <Link href="AboutUs">About Us</Link>
                    <Link href="Contact">Contact Us</Link>
                    <Link className="link link-hover" href="">Press kit</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by IlluminatedInteractive</p>
                </aside>
            </footer>
        </body>
        </html>
    );
}
