import { List } from 'phosphor-react'
import React, { useState } from 'react';

const menuItems = [
    {
        title: 'Features',
        hasMenu: true,
        menuOpen: false,
        subItems: [
            {
                title: 'Todo List',
                icon: '/images/icon-todo.svg'
            },
            {
                title: 'Calendar',
                icon: '/images/icon-calendar.svg'
            },
            {
                title: 'Reminders',
                icon: '/images/icon-reminders.svg'
            },
            {
                title: 'Planning',
                icon: '/images/icon-planning.svg'
            },
        ]
    },
    {
        title: 'Company',
        hasMenu: true,
        menuOpen: false,
        subItems: [
            {
                title: 'History',
            },
            {
                title: 'Our Team',
            },
            {
                title: 'Blog',
            },
        ]
    },
    {
        title: 'Careers',
        hasMenu: false
    },
    {
        title: 'About',
        hasMenu: false
    },

]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <nav className='w-full py-4'>
            <div className="container flex items-center justify-between">
                <div><img src="/images/logo.svg" alt="Snap Logo" /></div>

                <button onClick={() => setIsOpen(!isOpen)} className='z-50'>
                    {
                        isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                                <g fill="current" fillRule="evenodd">
                                    <path d="M2.393.98l22.628 22.628-1.414 1.414L.979 2.395z" strokeLinecap='round' strokeWidth={4} ></path>
                                    <path d="M.98 23.607L23.609.979l1.414 1.414L2.395 25.021z"></path>
                                </g>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="18">
                                <path
                                    fill="current"
                                    fillRule="evenodd"
                                    d="M0 0h32v2H0zm0 8h32v2H0zm0 8h32v2H0z"
                                ></path>
                            </svg>
                        )
                    }
                </button>
            </div>
            {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        </nav>
    )
}

const MobileMenu = ({ setIsOpen }) => {
    return (
        <div className='bg-mid-white backdrop:bg-black/30 w-[200px] min-h-screen absolute top-0 right-0 pt-[70px]'>
            <ul className='w-full py-2 px-8 flex flex-col gap-2'>
                {
                    menuItems.map((item, index) => (
                        <li key={index} className="cursor-pointer text-mid-gray py-2">
                            <MenuItem item={item} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

function MenuItem({ item }) {
    const { hasMenu, title, menuOpen } = item;

    if (hasMenu) {
        return (
            <div className="flex items-center justify-between text-mid-gray">
                {title}
                <div>{
                    menuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6">
                        <path
                            fill="none"
                            className='stroke-current'
                            strokeWidth="2"
                            d="M1 5l4-4 4 4"
                        ></path>
                    </svg>) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6">
                            <path
                                fill="none"
                                className='stroke-current'
                                strokeWidth="2"
                                d="M1 1l4 4 4-4"
                            ></path>
                        </svg>
                    )
                }</div>
            </div>
        )
    }

    return (
        <div>{title}</div>
    )
}

export default Navbar