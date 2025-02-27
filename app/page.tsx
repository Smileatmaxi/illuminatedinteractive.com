"use client"

import React from "react";

export default function Home() {
    return (
        <section className="w-full block relative overflow-hidden bg-no-repeat bg-fixed bg-center bg-cover">
            <div className="min-h-screen flex items-center pt-6.5 pb-6.5">
                <div className="w-full relative text-center">
                    <div></div>
                    <div className="mt-5">
                    </div>
                    <h1 className="opacity-85 text-7xl text-center pb-20 font-bold">Survive the Ancient Aztec Horrors</h1>
                    <p className="opacity-85 text-center text-2xl pb-20">Ancient Survival Horror Adventure</p>
                    <div className="flex justify-center gap-10">
                        <p className="opacity-85 text-center pb-20">Coming soon to Steam</p>
                        <p className="opacity-85 text-center pb-20">Coming soon to Epic Games</p>
                    </div>
                    <p className="opacity-85 text-center">Powered by Unreal Engine</p>
                </div>
            </div>
        </section>
    );
}
