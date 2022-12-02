import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <div className="p-4 border-t-2 border-zinc-900">
            <div className="flex justify-center gap-4 items-center mb-2">
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
            <p className="text-center">&copy; 2022 &bull; Jaxon Hill</p>
        </div>
    )
}

export default Footer