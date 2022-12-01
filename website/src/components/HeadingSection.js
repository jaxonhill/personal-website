import React from 'react'
import AboutButton from './AboutButton';

const HeadingSection = () => {

    const aboutButtonArr = [
        {
            "id": 1,
            "name": "Github",
            "href": "https://github.com/jaxonhill",
            "icon": (
                <i>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C10.4241 0 8.86371 0.318095 7.4078 0.936124C5.95189 1.55415 4.62902 2.46001 3.51472 3.60198C1.26428 5.90829 0 9.03631 0 12.2979C0 17.7336 3.444 22.3453 8.208 23.981C8.808 24.0793 9 23.6981 9 23.3661C9 23.0832 9 22.3084 9 21.2877C5.676 22.0256 4.968 19.6398 4.968 19.6398C4.416 18.2132 3.636 17.832 3.636 17.832C2.544 17.0695 3.72 17.0941 3.72 17.0941C4.92 17.1802 5.556 18.3608 5.556 18.3608C6.6 20.2301 8.364 19.6767 9.048 19.3815C9.156 18.5822 9.468 18.0411 9.804 17.7336C7.14 17.4262 4.344 16.3685 4.344 11.683C4.344 10.318 4.8 9.22344 5.58 8.35029C5.46 8.04284 5.04 6.76386 5.7 5.10364C5.7 5.10364 6.708 4.77159 9 6.35803C9.948 6.08747 10.98 5.9522 12 5.9522C13.02 5.9522 14.052 6.08747 15 6.35803C17.292 4.77159 18.3 5.10364 18.3 5.10364C18.96 6.76386 18.54 8.04284 18.42 8.35029C19.2 9.22344 19.656 10.318 19.656 11.683C19.656 16.3808 16.848 17.4139 14.172 17.7213C14.604 18.1025 15 18.8527 15 19.9964V23.3661C15 23.6981 15.192 24.0916 15.804 23.981C20.568 22.333 24 17.7336 24 12.2979C24 10.6829 23.6896 9.08376 23.0866 7.59171C22.4835 6.09966 21.5996 4.74395 20.4853 3.60198C19.371 2.46001 18.0481 1.55415 16.5922 0.936124C15.1363 0.318095 13.5759 0 12 0Z" fill="#18181B" />
                    </svg>
                </i>
            ),
            "bgColor": "bg-cyan",
        },
        {
            "id": 2,
            "name": "LinkedIn",
            "href": "https://www.linkedin.com/in/jaxon-c-hill/",
            "icon": (
                <i>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2223 0H1.77167C0.793667 0 0 0.775 0 1.72933V22.2683C0 23.224 0.793667 24 1.77167 24H22.2223C23.201 24 24 23.224 24 22.2683V1.72933C24 0.775 23.201 0 22.2223 0ZM7.118 20.4513H3.55667V8.99833H7.118V20.4513ZM5.33733 7.43233C4.19633 7.43233 3.274 6.50767 3.274 5.36767C3.274 4.22933 4.19633 3.30467 5.33733 3.30467C6.47567 3.30467 7.40033 4.22933 7.40033 5.36767C7.40033 6.50767 6.47567 7.43233 5.33733 7.43233ZM20.45 20.4513H16.8943V14.882C16.8943 13.5533 16.8683 11.845 15.044 11.845C13.1913 11.845 12.909 13.292 12.909 14.7857V20.4517H9.35067V8.99833H12.7657V10.5623H12.8143C13.2897 9.66233 14.451 8.71267 16.183 8.71267C19.785 8.71267 20.4503 11.084 20.4503 14.169V20.4513H20.45Z" fill="#18181B" />
                    </svg>
                </i>
            ),
            "bgColor": "bg-light-blue",
        },
        {
            "id": 3,
            "name": "Email",
            "href": "mailto:jaxoncharleshill@gmail.com",
            "icon": (
                <i>
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.25 0C23.3211 0 25 1.67893 25 3.75V16.25C25 18.3211 23.3211 20 21.25 20H3.75C1.67893 20 0 18.3211 0 16.25V3.75C0 1.67893 1.67893 0 3.75 0H21.25ZM22.5 4.16L13.3231 12.1907C12.8911 12.5687 12.2638 12.6002 11.7993 12.2852L11.6769 12.1907L2.5 4.16125V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H21.25C21.9404 17.5 22.5 16.9404 22.5 16.25V4.16ZM20.6 2.5H4.3975L12.5 9.58904L20.6 2.5Z" fill="#18181B" />
                    </svg>
                </i>
            ),
            "bgColor": "bg-bright-orange",
        },
    ];

    return (
        <div className="px-4 flex flex-col mb-24">
            <h1 className="text-6xl mb-6">Hey &#128075; I'm <span className="font-extrabold">Jaxon Hill</span></h1>
            <div className="mb-8 leading-relaxed">
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
            <div className="flex gap-4 flex-wrap">
                {aboutButtonArr.map((aboutButton, index) => <AboutButton key={index} aboutButton={aboutButton} />)}
            </div>
        </div>
    )
}

export default HeadingSection