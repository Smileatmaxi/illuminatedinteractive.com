import React from 'react';
import {AnimatedTestimonialsTeam} from "@/components/ui/team-testimonials";

const AboutUs = () => {
    return (
        <div className="h-screen mx-auto content-center">
            <div className="text-center mb-36">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Who are
                    we?</h1>
                <span className="">
                    <p>
                        We Are Illuminated Interactive a Small Game studio from Germany we enjoy creating Games most of them will be in the Genre of Horror
                        we really try our best to get as much Detail into our
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
