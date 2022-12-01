import React from 'react'
import ProjectTags from "./ProjectTags"
import ProjectCard from "./ProjectCard"

const projects = [
    {
        "id": 1,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
        and Flask. The site is completely responsive, as well as interactive with \
        the ability to filter projects by technology used. You can try it above by \
        clicking on a tag!",
        "frontendTech": ["Javascript", "React", "Tailwind"],
        "backendTech": ["Python", "Flask"],
        "otherTech": ["Linux", "Git", "Figma"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
    {
        "id": 2,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
        and Flask. The site is completely responsive, as well as interactive with \
        the ability to filter projects by technology used. You can try it above by \
        clicking on a tag!",
        "frontendTech": ["Typescript", "React", "Tailwind"],
        "backendTech": ["Python", "Flask"],
        "otherTech": ["Linux", "Git", "Figma"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
]

const tags = ["All", "Javascript", "Typescript", "React", "Tailwind", "Python", "Flask", "Linux", "Git", "Figma"]

const ProjectSection = () => {
    return (
        <section className="px-4 mb-16">
            <h1 className="font-extrabold text-4xl mb-3">Projects</h1>
            <ProjectTags tags={tags} />
            <div className="grid gap-4 grid-cols-project-cols">
                {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
        </section>
    )
}

export default ProjectSection