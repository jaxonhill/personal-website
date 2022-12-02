import React, { useState, useEffect } from 'react'
import ProjectTags from "./ProjectTags"
import ProjectCard from "./ProjectCard"
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        "id": 1,
        "name": "jaxonhill.xyz",
        "info": "jaxonhill.xyz is my personal website built with React and Tailwind. \
                 I hosted the site using Firebase Hosting. The site is completely responsive \
                 for mobile, tablet, and desktop form. I also utilized the Framer Motion framework \
                 to create satisfying animations for the buttons and project filtering. \
                 Try it out by clicking on the filters above!",
        "image": "./images/personal_site.png",
        "frontendTech": ["Javascript", "React", "Tailwind", "Framer Motion"],
        "backendTech": ["Firebase"],
        "otherTech": ["Linux", "Git", "Figma"],
        "liveSiteLink": "#",
        "githubLink": "https://github.com/jaxonhill/personal-website",
    },
]

const tags = [
    { "name": "Javascript", "bgColor": "bg-gold" },
    { "name": "React", "bgColor": "bg-light-blue" },
    { "name": "Tailwind", "bgColor": "bg-cyan" },
    { "name": "Framer Motion", "bgColor": "bg-purple" },
    { "name": "Firebase", "bgColor": "bg-bright-orange" },
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