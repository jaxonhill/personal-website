import React from 'react'

const SkillsCard = ({ skill }) => {
    return (
        <div className="shadow-neubrutalism-large flex flex-col gap-4 py-4 border-2 border-zinc-900 rounded-2xl justify-center items-center">
            <img src={skill.svgPath} alt="pic" />
            <span className="font-extrabold">{skill.name}</span>
        </div>
    )
}

export default SkillsCard