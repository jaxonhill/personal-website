import React from 'react'
import ProjectTagButton from "./ProjectTagButton"
import { motion } from "framer-motion";

const baseStyles = "font-extrabold px-6 py-1 border-2 border-zinc-900 rounded-xl shadow-neubrutalism-medium ";

const ProjectTags = ({ tags, handleSelect, selectedTags }) => {
    return (
        <div className="w-full flex flex-wrap gap-x-3 gap-y-3 mb-6 pb-4 border-b-2 border-zinc-900">
            <motion.button
                whileHover={{
                    y: 2,
                    x: 2,
                    boxShadow: "2px 2px 0 0 rgba(24, 24, 27, 1.00)",
                }}
                whileTap={{ scale: 0.85 }}
                onClick={() => handleSelect("All")}
                className={selectedTags.length === 0 ? baseStyles + "bg-cyan" : baseStyles}
            >
                All
            </motion.button>
            {tags.map((tag, index) => {
                return <ProjectTagButton key={index} tag={tag} handleSelect={handleSelect} selectedTags={selectedTags} baseStyles={baseStyles} />
            })}
        </div>
    )
}

export default ProjectTags