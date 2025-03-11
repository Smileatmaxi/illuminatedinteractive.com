import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed navbar top-0 z-50 flex backdrop-filter backdrop-blur-[5px] shadow-lg">
            <div className="mr-5 ml-5 w-full relative">
                <div className="float-left mr-5">
                    <Link className="text-3xl float-left" href="/">ILLUMINATED-INTERACTIVE</Link>
                </div>
                <div className="inline-block position-relative float-right w-full top-0 left-0 text-align-left">
                    <ul className="menu menu-horizontal float-right m-auto">
                        <li><Link className="link link-hover text-xl" href="">The Game</Link></li>
                        <li><Link className="link link-hover text-xl" href="">News</Link></li>
                        <li><Link className="link link-hover text-xl" href="">Media</Link></li>
                        <li><Link className="link link-hover text-xl" href="">AboutUs</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
