import React from 'react';
import {AnimatedTestimonialsTeam} from "@/components/ui/team-testimonials";

const AboutUs = () => {
    return (
        <div className="w-full justify-center p-2 sm:p-10 items-center">
            <div className="mx-auto grid w-full max-w-7xl px-4 pt-24 md:px-8 md:py-40 text-center">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl py-5">Who are
                    we?</h1>
                <span className="">
                    <p className="text-center text-2xl ml-10 mr-10 pl-6 pr-6">
                        We Are Illuminated Interactive a Small Game studio based in Germany. We enjoy creating Games from Scratch with love
                    </p>
                </span>
            </div>
            <div className="text-center pt-10 md:py-20">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Get to Know
                    the Team</h1>
            </div>
            <div className="container mx-auto max-w-2xl text-center">
                <AnimatedTestimonialsTeam></AnimatedTestimonialsTeam>
            </div>
        </div>
    )
}
export default AboutUs
