import React from 'react'
import AboutButton from './AboutButton';

const HeadingSection = () => {

    const aboutButtonArr = [
        {
            "id": 1,
            "name": "Github",
            "href": "https://github.com/jaxonhill",
            "svgPath": "./svgs/github_logo.svg",
            "bgColor": "bg-cyan",
        },
        {
            "id": 2,
            "name": "LinkedIn",
            "href": "https://www.linkedin.com/in/jaxon-c-hill/",
            "svgPath": "./svgs/linkedin_logo.svg",
            "bgColor": "bg-light-blue",
        },
        {
            "id": 3,
            "name": "Email",
            "href": "mailto:jaxoncharleshill@gmail.com",
            "svgPath": "./svgs/email_logo.svg",
            "bgColor": "bg-bright-orange",
        },
    ];

    return (
        <div className="flex flex-col mb-24">
            <div>
                <h1 className="text-6xl mb-6 max-w-sm md:max-w-none">Hey I'm <span className="font-extrabold">Jaxon Hill</span></h1>
                <div className="mb-8 leading-relaxed md:max-w-4xl">
                    <p>
                        I'm a computer science student with a passion for designing
                        and coding interactive applications. I always enjoy learning
                        new technologies and originally started my coding journey as a
                        self-taught programmer.
                    </p>
                    <br />
                    <p>
                        My current focus is designing and building for web development,
                        but in the coming years I'm looking forward to learning game
                        development and machine learning, in and outside of school.
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                {aboutButtonArr.map((aboutButton, index) => <AboutButton key={index} aboutButton={aboutButton} />)}
            </div>
        </div>
    )
}

export default HeadingSection