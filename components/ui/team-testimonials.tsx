import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsTeam() {
    const testimonials = [
        {
            quote:
                "I am Maximilian Leupold, a 27-year-old programming enthusiast with a passion for innovation. I developed this website, and together with my best friend Kevin, we are currently developing the game Noctlan.",
            name: "Maximilian Leupold",
            designation: "Founder & Lead Developer at IlluminatedInteractive",
            src: "/team/Maximilian.webp",
            alt: "Maximilian Leupold",
            instagram: "https://www.Instagram.com/Smileatmaxi",
            linkedin:"https://www.linkedin.com/in/maximilian-leupold-118873313"
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Kevin Kuhn",
            designation: "Founder & Lead 3D Art Designer at IlluminatedInteractive",
            src: "/team/Kevin.webp",
            alt: "Kevin Kuhn",
            instagram: "https://www.instagram.com/madebykev1n/",
            linkedin: "https://www.linkedin.com/in/kevin-kuhn-42a5602b8/",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials}/>;
}