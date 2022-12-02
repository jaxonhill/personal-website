import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const ProjectCard = ({ project }) => {
    return (

        <motion.div key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col border-2 rounded-2xl shadow-neubrutalism-large border-zinc-900 overflow-hidden"
        >
            <div className={`w-full ${project.image} h-48`}></div>
            <div className="p-6">
                <p className="mb-4 font-extrabold text-2xl">{project.name}</p>
                <p className="mb-4">{project.info}</p>
                <p className="mb-8">
                    <span className="font-bold">Frontend:</span> {project.frontendTech.join(", ")}
                    <br />
                    <span className="font-bold">Backend:</span> {project.backendTech.join(", ")}
                    <br />
                    <span className="font-bold">Other Technologies:</span> {project.otherTech.join(", ")}
                </p>
                <div className="flex gap-6">
                    <a className="flex gap-2 items-center" href={project.liveSiteLink}>
                        <span className="font-bold">Live Website</span>
                        <i>
                            <img src="./svgs/arrow_svg.svg" alt="Arrow Link" />
                        </i>
                    </a>
                    <a className="flex gap-2 items-center" href={project.githubLink}>
                        <span className="font-bold">Github</span>
                        <i>
                            <img src="./svgs/arrow_svg.svg" alt="Arrow Link" />
                        </i>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard