import React from 'react'
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <nav className="sticky bg-white top-0 flex items-center justify-between mb-16 border-b-2 border-b-zinc-900 px-4 md:px-16 lg:px-32 2xl:px-48">
            <p className="text-2xl py-2 md:text-3xl lg:py-4">
                <span className="font-extrabold">JAXONHILL</span>
                .xyz
            </p>
            <div className="flex gap-6 items-center">
                <motion.a
                    whileHover={{ scale: 1.20 }}
                    whileTap={{ scale: 0.85 }}
                    href="https://github.com/jaxonhill"
                >
                    <img src="./svgs/github_logo.svg" alt="Github" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.20 }}
                    whileTap={{ scale: 0.85 }}
                    href="https://www.linkedin.com/in/jaxon-c-hill/"
                >
                    <img src="./svgs/linkedin_logo.svg" alt="LinkedIn" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.20 }}
                    whileTap={{ scale: 0.85 }}
                    href="mailto:jaxoncharleshill@gmail.com"
                >
                    <img src="./svgs/email_logo.svg" alt="Email" />
                </motion.a>
            </div>
        </nav>
    )
}

export default Navbar