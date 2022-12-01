import React from 'react'

const Footer = () => {
    return (
        <div className="p-4 border-t-2 border-zinc-900">
            <div className="flex justify-center gap-4 items-center mb-2">
                <a href="https://github.com/jaxonhill">
                    <img src="./svgs/github_logo.svg" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/jaxon-c-hill/">
                    <img src="./svgs/linkedin_logo.svg" alt="LinkedIn" />
                </a>
                <a href="mailto:jaxoncharleshill@gmail.com">
                    <img src="./svgs/email_logo.svg" alt="Email" />
                </a>
            </div>
            <p className="text-center">&copy; 2022 &bull; Jaxon Hill</p>
        </div>
    )
}

export default Footer