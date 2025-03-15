import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsTeam() {
    const testimonials = [
        {
            quote:
                "I am a 26-year-old programming enthusiast with a passion for innovation. I developed this website, and together with my best friend, we are currently working the game Noctlan.",
            name: "Maximilian Leupold",
            designation: "Founder & Lead Developer at IlluminatedInteractive",
            src: "/team/Maximilian.webp",
            alt: "Maximilian Leupold",
            instagram: "https://www.Instagram.com/Smileatmaxi",
            linkedin:"https://www.linkedin.com/in/maximilian-leupold-118873313",
            github: "https://github.com/Smileatmaxi",
        },
        {
            quote:
                "I am a 27-year-old self-taught artist who creates a diverse range of meticulously crafted game assets—from small objects to large structures—developed entirely from scratch for our game Noctlan",
            name: "Kevin Kuhn",
            designation: "Founder & Lead 3D Art Designer at IlluminatedInteractive",
            src: "/team/Kevin.webp",
            alt: "Kevin Kuhn",
            instagram: "https://www.instagram.com/madebykev1n/",
            linkedin: "https://www.linkedin.com/in/kevin-kuhn-42a5602b8/",
            github:"placeholder",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials}/>;
}