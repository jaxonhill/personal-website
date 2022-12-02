import React from 'react'
import ProjectTagButton from "./ProjectTagButton"

const ProjectTags = ({ tags }) => {
    return (
        <div className="w-full flex flex-wrap gap-x-3 gap-y-3 mb-6 pb-4 border-b-2 border-zinc-900">
            <button className="font-extrabold px-6 bg-cyan py-1 border-2 border-zinc-900 rounded-xl shadow-neubrutalism-medium">All</button>
            {tags.map((tag, index) => {
                return <ProjectTagButton key={index} text={tag} />
            })}
        </div>
    )
}

export default ProjectTags