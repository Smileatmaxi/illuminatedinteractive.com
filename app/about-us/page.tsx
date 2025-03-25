import React from 'react';
import {AnimatedTestimonialsTeam} from "@/components/ui/team-testimonials";

const AboutUs = () => {
    return (
        <div className="w-full justify-center p-2 sm:p-10 items-center">
            <div className="mx-auto grid w-full max-w-7xl px-4 pt-24 md:px-8 md:py-40 text-center">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl py-5">WHO ARE WE?</h1>
                <span className="">
                    <p className="text-center text-2xl pl-6 pr-6 pt-8">
                        We are two dedicated game developers based in Germany.
                        Our intimate team allows us to remain agile and
                        deeply involved in every aspect of our craft, ensuring that every detail of our work reflects
                        our artistic vision and commitment to quality.
                        Our current project, Noctlan, is a labor of love that invites players into a mysterious,
                        atmospheric world filled with rich lore and engaging gameplay. By blending innovative
                        storytelling with immersive design, we strive to create a gaming experience that not only
                        entertains but also sparks imagination and deep emotional connections.At IlluminatedInteractive,
                        we believe that great games are built on authenticity and creativity. Our small, focused team
                        embraces every challenge with enthusiasm, and we work closely together to transform our ideas
                        into a unique interactive adventure. Join us on this journey as we continue to push the
                        boundaries of game development, one inspired project at a time.
                    </p>
                </span>
            </div>
            <div className="text-center pt-20">
                <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-5xl">GET TO KNOW THE TEAM</h1>
            </div>
            <div className="container mx-auto max-w-2xl text-center">
                <AnimatedTestimonialsTeam></AnimatedTestimonialsTeam>
            </div>
        </div>
    )
}
export default AboutUs
