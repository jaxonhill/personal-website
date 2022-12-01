import React from 'react'
import SkillsCard from "./SkillsCard"

const SkillsSection = () => {
    const skills = ["Javascript", "React", "Tailwind CSS", "Python", "Flask", "Git", "Linux", "Figma"]
    const skillsCardInfo = [
        {
            "id": 1,
            "name": "Javascript",
            "svg_path": "./svgs/javascript_svg.svg",
            "icon_element": (
                <i>
                    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_29_6)">
                            <path d="M0 0H96V96H0V0Z" fill="#F7DF1E" />
                            <path d="M25.2419 80.2246L32.5884 75.7785C34.0057 78.2915 35.295 80.4176 38.3876 80.4176C41.352 80.4176 43.221 79.258 43.221 74.7475V44.0732H52.2425V74.8751C52.2425 84.2191 46.7654 88.4722 38.7743 88.4722C31.5574 88.4722 27.3682 84.7344 25.2417 80.2238" fill="black" />
                            <path d="M57.1431 79.2578L64.4887 75.0047C66.4225 78.1626 68.9357 80.4823 73.3818 80.4823C77.1199 80.4823 79.5036 78.6134 79.5036 76.0357C79.5036 72.9425 77.055 71.8469 72.9306 70.0432L70.6759 69.0758C64.1669 66.3054 59.8492 62.8256 59.8492 55.4792C59.8492 48.7129 65.0044 43.5574 73.0599 43.5574C78.7952 43.5574 82.9194 45.5552 85.8833 50.7751L78.8592 55.2857C77.3125 52.5149 75.6375 51.4196 73.06 51.4196C70.4179 51.4196 68.7423 53.095 68.7423 55.2857C68.7423 57.9923 70.4179 59.088 74.2839 60.7636L76.5392 61.7302C84.2078 65.0169 88.5255 68.3674 88.5255 75.9068C88.5255 84.0269 82.1459 88.4729 73.5754 88.4729C65.1981 88.4729 59.7849 84.4778 57.1432 79.2578" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_29_6">
                                <rect width="96" height="96" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </i>
            )
        },
        {
            "id": 2,
            "name": "React",
            "svg_path": "./svgs/react_svg.svg",
        },
        {
            "id": 3,
            "name": "Tailwind CSS",
            "svg_path": "./svgs/tailwind_svg.svg",
        },
        {
            "id": 4,
            "name": "Python",
            "svg_path": "./svgs/python_svg.svg",
        },
        {
            "id": 5,
            "name": "Flask",
            "svg_path": "./svgs/flask_svg.svg",
        },
        {
            "id": 6,
            "name": "Git",
            "svg_path": "./svgs/git_svg.svg",
        },
        {
            "id": 7,
            "name": "Linux",
            "svg_path": "./svgs/linux_svg.svg",
        },
        {
            "id": 8,
            "name": "Figma",
            "svg_path": "./svgs/figma_svg.svg",
        }
    ]

    return (
        <section className="px-4 mb-16">
            <h1 className="font-extrabold text-4xl mb-3 pb-4 border-b-2 border-zinc-900">Skills</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* {skillsCardInfo.map((skill) => <SkillsCard key={skill.id} skill={skill} />)} */}
                {skills.map((skill, index) => <SkillsCard key={index} skill={skill} />)}
            </div>
        </section >
    )
}

export default SkillsSection