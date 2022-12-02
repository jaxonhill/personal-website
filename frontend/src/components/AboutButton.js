import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const AboutButton = ({ aboutButton }) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <a href={aboutButton.href}>
            <motion.button
                whileHover={{
                    y: 2,
                    x: 2,
                    boxShadow: "2px 2px 0 0 rgba(24, 24, 27, 1.00)",
                }}
                whileTap={{ scale: 0.85 }}
                className={`${aboutButton.bgColor} flex items-center p-4 md:py-2 md:px-5 gap-2 border-2 rounded-2xl border-zinc-900 shadow-neubrutalism-medium`}
            >
                {windowWidth >= 640 && <span className="font-extrabold">{aboutButton.name}</span>}
                <img src={aboutButton.svgPath} alt={aboutButton.name} />
            </motion.button>
        </a>
    )
}

export default AboutButton