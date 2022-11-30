import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between mb-16 border-b-2 border-b-zinc-900">
            <p className="text-3xl py-2 pl-4">
                <span className="font-extrabold">JAXONHILL</span>
                .xyz
            </p>
            <button className="bg-zinc-900 self-stretch flex items-center pl-4 pr-3">
                <svg className="" width="33" height="28" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.428467 2.57143C0.428467 1.15128 1.57975 0 2.9999 0H38.9999C40.4201 0 41.5713 1.15128 41.5713 2.57143C41.5713 3.99158 40.4201 5.14286 38.9999 5.14286H2.9999C1.57975 5.14286 0.428467 3.99158 0.428467 2.57143Z" fill="#FFFFFF" />
                    <path d="M0.428467 33.4284C0.428467 32.0082 1.57975 30.8569 2.9999 30.8569H38.9999C40.4201 30.8569 41.5713 32.0082 41.5713 33.4284C41.5713 34.8486 40.4201 35.9998 38.9999 35.9998H2.9999C1.57975 35.9998 0.428467 34.8486 0.428467 33.4284Z" fill="#FFFFFF" />
                    <path d="M18.4286 15.4287C17.0084 15.4287 15.8572 16.5799 15.8572 18.0001C15.8572 19.4203 17.0084 20.5716 18.4286 20.5716H39C40.4202 20.5716 41.5715 19.4203 41.5715 18.0001C41.5715 16.5799 40.4202 15.4287 39 15.4287H18.4286Z" fill="#FFFFFF" />
                </svg>
            </button>
        </nav>
    )
}

export default Navbar