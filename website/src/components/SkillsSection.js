import React from 'react'
import SkillsCard from "./SkillsCard"

const SkillsSection = () => {
    const skills = ["Javascript", "React", "Tailwind CSS", "Python", "Flask", "Git", "Linux", "Figma"]
    const skillsCardInfo = [
        {
            "id": 1,
            "name": "Javascript",
            "svgPath": "./svgs/javascript_svg.svg",
        },
        {
            "id": 2,
            "name": "React",
            "svgPath": "./svgs/react_svg.svg",
        },
        {
            "id": 3,
            "name": "Tailwind CSS",
            "svgPath": "./svgs/tailwind_svg.svg",
        },
        {
            "id": 4,
            "name": "Python",
            "svgPath": "./svgs/python_svg.svg",
        },
        {
            "id": 5,
            "name": "Flask",
            "svgPath": "./svgs/flask_svg.svg",
        },
        {
            "id": 6,
            "name": "Git",
            "svgPath": "./svgs/git_svg.svg",
        },
        {
            "id": 7,
            "name": "Linux",
            "svgPath": "./svgs/linux_svg.svg",
        },
        {
            "id": 8,
            "name": "Figma",
            "svgPath": "./svgs/figma_svg.svg",
        }
    ]

    return (
        <section className="mb-24">
            <h1 className="font-extrabold text-4xl mb-3 pb-4 border-b-2 border-zinc-900">Skills</h1>
            <div className="grid grid-cols-skills-cols gap-4 grid-flow-row">
                {skillsCardInfo.map((skill) => <SkillsCard key={skill.id} skill={skill} />)}
            </div>
        </section >
    )
}

export default SkillsSection