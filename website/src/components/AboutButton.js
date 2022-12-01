import React from 'react'

const AboutButton = ({ aboutButton }) => {
    return (
        <a href={aboutButton.href}>
            <button className={`${aboutButton.bgColor} flex items-center py-2 px-5 gap-2 border-2 rounded-2xl border-zinc-900 shadow-neubrutalism-medium`}>
                <span className="font-extrabold">{aboutButton.name}</span>
                <img src={aboutButton.svgPath} alt={aboutButton.name} />
            </button>
        </a>
    )
}

export default AboutButton