"use client";

import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsTeam() {
    const testimonials = [
        {
            quote:
                "Hello, I'm Maximilian. I'm a 27-year-old programming enthusiast with a passion for creating innovative projects. I built this website, and together with my best friend Kevin, we are developing the game Noctlan",
            name: "Maximilian Leupold",
            designation: "Product Manager at TechFlow",
            src: "/team/Maximilian.webp",
            alt: "Maximilian Leupold",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Kevin Kuhn",
            designation: "CTO at InnovateSphere",
            src: "/team/Kevin.webp",
            alt: "Kevin Kuhn",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials}/>;
}