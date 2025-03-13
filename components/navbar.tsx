"use client";

import React, {useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex flex-col bg-black/50 backdrop-blur-md shadow-lg">
            {/* Top Bar */}
            <div className="flex items-center justify-between h-20 px-5">
                {/* Logo / Brand */}
                <div>
                    <Link href="/" className="text-3xl text-white">
                        ILLUMINATED-INTERACTIVE
                    </Link>
                </div>

                {/* Desktop Menu (hidden on small screens) */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        href=""
                        className="text-white transition-colors duration-300 hover:text-gray-300 text-xl"
                    >
                        Noctlan
                    </Link>
                    <Link
                        href=""
                        className="text-white transition-colors duration-300 hover:text-gray-300 text-xl"
                    >
                        News & Updates
                    </Link>
                    <Link
                        href=""
                        className="text-white transition-colors duration-300 hover:text-gray-300 text-xl"
                    >
                        Media
                    </Link>
                    <Link
                        href="aboutus"
                        className="text-white transition-colors duration-300 hover:text-gray-300 text-xl"
                    >
                        About Us
                    </Link>
                </div>

                {/* Hamburger Icon (shown on small screens) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (conditional render) */}
            {isOpen && (
                <div className="md:hidden bg-black/80 text-white">
                    <ul className="flex flex-col items-center py-4 space-y-2">
                        <li>
                            <Link
                                href=""
                                className="transition-colors duration-300 hover:text-gray-300 text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Noctlan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="transition-colors duration-300 hover:text-gray-300 text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                News & Updates
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="transition-colors duration-300 hover:text-gray-300 text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="aboutus"
                                className="transition-colors duration-300 hover:text-gray-300 text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;