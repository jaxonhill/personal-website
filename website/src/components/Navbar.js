import React, { useState, useEffect } from 'react'

const Navbar = () => {
    return (
        <nav className="sticky bg-white top-0 flex items-center justify-between mb-16 border-b-2 border-b-zinc-900 pl-4 md:px-16 lg:px-32 2xl:px-48">
            <p className="text-3xl py-2 md:pl-0 lg:py-4">
                <span className="font-extrabold">JAXONHILL</span>
                .xyz
            </p>

            <div className="self-stretch flex">
                <ul className="flex list-none">
                    <li>
                        <a id="skills" href="">
                            <button className="h-full px-4 lg:px-8 border-l-2 border-zinc-900">Skills</button>
                        </a>
                    </li>
                    <li>
                        <a id="projects" href="">
                            <button className="h-full px-4 text-white lg:px-8 bg-zinc-900 ">Projects</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar