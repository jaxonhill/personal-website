import React from 'react'

const AboutButton = ({ aboutButton }) => {
    return (
        <a href={aboutButton.href}>
            <button className={`${aboutButton.bgColor} flex items-center py-2 px-6 gap-2 border-2 rounded-full border-zinc-900 shadow-neubrutalism`}>
                <span className="font-extrabold">{aboutButton.name}</span>
                {aboutButton.icon}
            </button>
        </a>
    )
}

export default AboutButton