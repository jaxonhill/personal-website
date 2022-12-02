import React, { useState, useEffect } from 'react'
import ProjectTags from "./ProjectTags"
import ProjectCard from "./ProjectCard"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const projects = [
    {
        "id": 1,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
                 and Flask. The site is completely responsive, as well as interactive with \
                 the ability to filter projects by technology used. You can try it above by \
                 clicking on a tag!",
        "image": "bg-cyan",
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
        "image": "bg-dark-blue",
        "frontendTech": ["Typescript", "React", "Tailwind"],
        "backendTech": ["Python", "Flask"],
        "otherTech": ["Linux", "Git", "Figma"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
    {
        "id": 3,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
                 and Flask. The site is completely responsive, as well as interactive with \
                 the ability to filter projects by technology used. You can try it above by \
                 clicking on a tag!",
        "image": "bg-bright-pink",
        "frontendTech": ["Typescript", "React", "Tailwind"],
        "backendTech": ["Python", "Flask"],
        "otherTech": ["Linux", "Git", "Figma"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
    {
        "id": 4,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
                 and Flask. The site is completely responsive, as well as interactive with \
                 the ability to filter projects by technology used. You can try it above by \
                 clicking on a tag!",
        "image": "bg-gold",
        "frontendTech": ["Typescript", "React"],
        "backendTech": ["Python", "Flask"],
        "otherTech": ["Linux", "Git"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
    {
        "id": 5,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
                 and Flask. The site is completely responsive, as well as interactive with \
                 the ability to filter projects by technology used. You can try it above by \
                 clicking on a tag!",
        "image": "bg-bright-orange",
        "frontendTech": ["None"],
        "backendTech": ["Python"],
        "otherTech": ["Git"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
    {
        "id": 6,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built in React, Tailwind, \
                 and Flask. The site is completely responsive, as well as interactive with \
                 the ability to filter projects by technology used. You can try it above by \
                 clicking on a tag!",
        "image": "bg-cyan",
        "frontendTech": ["Tailwind"],
        "backendTech": ["Python"],
        "otherTech": ["Figma"],
        "liveSiteLink": "#",
        "githubLink": "#",
    },
]

const tags = [
    { "name": "Javascript", "bgColor": "bg-gold" },
    { "name": "Typescript", "bgColor": "bg-dark-blue" },
    { "name": "React", "bgColor": "bg-light-blue" },
    { "name": "Tailwind", "bgColor": "bg-cyan" },
    { "name": "Python", "bgColor": "bg-gold" },
    { "name": "Flask", "bgColor": "bg-green" },
    { "name": "Git", "bgColor": "bg-bright-orange" },
    { "name": "Linux", "bgColor": "bg-gold" },
    { "name": "Figma", "bgColor": "bg-green" },
]

const ProjectSection = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const handleSelect = (tagName) => {
        // First check if the selected tag is All, because then you remove all others
        if (tagName === "All") {
            setSelectedTags([]);
        }
        // If the tag is already selected, remove it
        else if (selectedTags.includes(tagName)) {
            setSelectedTags(selectedTags.filter((eachTag) => {
                return eachTag.toLowerCase() !== tagName.toLowerCase();
            }));
        }
        else {
            setSelectedTags([...selectedTags, tagName]);
        }
    }

    // Filter the projects every time the tags change
    useEffect(() => {
        let newProj = projects.filter((project) => {
            // If the selectedTags are empty, implying "All", then we just return every project
            if (selectedTags.length === 0) {
                return true;
            } else {
                // Create total technology array for each project to check for tags
                const projectTech = [].concat(project.frontendTech).concat(project.backendTech).concat(project.otherTech);
                // We want ALL tags to be included in the projects we filter, create array of t or f val if each tag present
                const isTagsThereArr = selectedTags.map((tag) => {
                    return projectTech.includes(tag);
                })
                // Return true if all those values where true (All tags we have selected are present)
                // This includes this project in the filtered copy
                return isTagsThereArr.every(isTagThere => isTagThere === true);
            }
        })

        setFilteredProjects(newProj);

    }, [selectedTags]);

    console.log(selectedTags);

    return (
        <section className="mb-16">
            <h1 className="font-extrabold text-4xl mb-3">Projects</h1>
            <ProjectTags tags={tags} handleSelect={handleSelect} selectedTags={selectedTags} />
            <div className="grid gap-6 grid-cols-project-cols">
                <AnimatePresence>
                    {filteredProjects.map((project) => {
                        return (
                            <ProjectCard key={project.id} project={project} />
                        )
                    })}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ProjectSection