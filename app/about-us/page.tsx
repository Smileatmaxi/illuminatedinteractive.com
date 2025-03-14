import React from 'react';
import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Maximilian Leupold",
            designation: "CEO",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Kevin Kuhn",
            designation: "CTO",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}

const AboutUs = () => {
    return (
        <div className="h-screen mx-auto content-center">
            <div className="text-center">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Who are we?</h1>
            </div>
            <div className="text-center">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Get to Know the Team</h1>
            </div>
            <div className="container mx-auto max-w-2xl text-center">
            </div>
        </div>
    )
}
export default AboutUs
