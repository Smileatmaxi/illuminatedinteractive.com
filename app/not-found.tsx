import React from 'react'
import {Spotlight} from "@/components/ui/spotlight-new";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="bg-gray-950 relative block overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed">
            <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
                <Spotlight/>
                <h1 className="font-bold text-9xl pb-10">404</h1>
                <h2 className="font-bold text-3xl pb-10">It seems like you&apos;ve found a Place of Silence</h2>
                <Link href="/">
                    <button
                        className="rounded-lg bg-transparent flex items-center justify-center px-6 py-3 text-lg text-white gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-arrow-left-square-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                        </svg>
                        <p className="font-bold">GO BACK HOME</p>
                    </button>
                </Link>
            </div>
        </section>
    )
}
export default NotFound
