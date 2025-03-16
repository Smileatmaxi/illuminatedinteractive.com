import React from 'react';
import {AnimatedTestimonialsTeam} from "@/components/ui/team-testimonials";

const AboutUs = () => {
    return (
        <div className="h-screen mx-auto content-center items-start">
            <div className="text-center mb-36">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Who are
                    we?</h1>
                <span className="">
                    <p className="text-center text-2xl ml-10 mr-10 pl-6 pr-6">
                        We Are Illuminated Interactive a Small Game studio based in Germany. We enjoy creating Games from Scratch with love
                    </p>
                </span>
            </div>
            <div className="text-center">
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
