import React from 'react'

const SkillsCard = ({ skill }) => {
    return (
        <div className="shadow-neubrutalism-large flex gap-2 py-4 border-2 border-zinc-900 rounded-2xl justify-center items-center">
            <span className="font-extrabold">{skill}</span>
        </div>
    )
}

export default SkillsCard