import React from 'react'
import ProjectTagButton from "./ProjectTagButton"

const ProjectTags = () => {
    const tagsArr = ["All", "React", "Tailwind CSS", "Django", "Flask"]

    return (
        <div className="w-full flex flex-wrap gap-x-4 gap-y-3 pb-4 border-b-2 border-zinc-900">
            {tagsArr.map((tag) => {
                return <ProjectTagButton text={tag} />
            })}
        </div>
    )
}

export default ProjectTags