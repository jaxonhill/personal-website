import React from 'react'
import { motion } from "framer-motion"

const ProjectTagButton = ({ tag, handleSelect, selectedTags, baseStyles }) => {
    return (
        <motion.button
            whileHover={{
                y: 2,
                x: 2,
                boxShadow: "2px 2px 0 0 rgba(24, 24, 27, 1.00)",
            }}
            whileTap={{ scale: 0.85 }}
            onClick={() => handleSelect(tag.name)}
            className={selectedTags.includes(tag.name) ? baseStyles + tag.bgColor : baseStyles}
        >
            {tag.name}
        </motion.button>
    )
}

export default ProjectTagButton