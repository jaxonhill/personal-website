import React from 'react'

const ProjectTagButton = ({ tag, handleSelect, selectedTags, baseStyles }) => {
    return (
        <button onClick={() => handleSelect(tag.name)} className={selectedTags.includes(tag.name) ? baseStyles + tag.bgColor : baseStyles}>{tag.name}</button>
    )
}

export default ProjectTagButton