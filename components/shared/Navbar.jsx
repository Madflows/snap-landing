import { motion, AnimatePresence } from 'framer-motion';
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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='w-full py-4'>
            <div className="container flex items-center justify-between">
                <div><img src="/images/logo.svg" alt="Snap Logo" /></div>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden z-50'>
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
                <DesktopMenu />
            </div>
            <AnimatePresence>
                {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </nav>
    )
}



const DesktopMenu = () => {
    return (
        <div className='hidden md:flex items-center justify-between px-4 w-full'>
            <div className='flex items-center gap-2 text-sm '>
                {
                    menuItems.map((item, index) => (
                        <div key={index}>
                            <DesktopMenuItem item={item} />
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-3'>
                <button className='px-3 py-2 rounded-lg text-gray-700 hover:text-black border-2 border-transparent'>Login</button>
                <button className='px-3 py-2 rounded-lg text-gray-700 hover:text-black border-2 border-gray-700'>Register</button>

            </div>
        </div>
    )
}

function DesktopMenuItem({ item }) {
    const { hasMenu, title, menuOpen, subItems } = item;
    const [subOpen, setSubOpen] = useState(menuOpen);
    if (hasMenu) {
        return (
            <button onMouseEnter={() => setSubOpen(true)} onMouseLeave={() => setSubOpen(false)} className='relative flex text-mid-gray group items-center gap-2 py-1 px-2 rounded-lg '>
                <p className='group-hover:text-black font-semibold'>{title}</p>
                <MenuArrow open={subOpen} />
                <AnimatePresence>
                    {subOpen && <DesktopSubMenu subItems={subItems} />}
                </AnimatePresence>
            </button>
        )
    }
    return (
        <button className='py-1 px-2 rounded-lg text-mid-gray hover:text-black font-semibold'>{title}</button>
    )
}

function DesktopSubMenu({ subItems }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='px-4 absolute top-[100%] bg-white rounded-lg  w-[150px] shadow-2xl flex flex-col gap-3 py-4'>
            {subItems.map((sub, index) => {
                if (sub.icon) {
                    return (
                        <div key={index} className='flex hover:text-black w-full items-center gap-3'>
                            <img src={sub.icon} alt={sub.title} />
                            <p className='text-sm'>{sub.title}</p>
                        </div>
                    )
                }
                return (
                    <div key={index} className='flex hover:text-black w-full items-center gap-3'>
                        <p className='text-sm'>{sub.title}</p>
                    </div>
                )
            })}
        </motion.div>
    )
}






const MobileMenu = ({ setIsOpen }) => {
    return (
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }} className='bg-mid-white md:hidden origin-right navbar backdrop:bg-black/30 w-[250px] min-h-screen px-4 absolute top-0 right-0 pt-[70px]'>
            <ul className='w-full py-2 px-4 flex flex-col gap-2'>
                {
                    menuItems.map((item, index) => (
                        <li key={index} className="cursor-pointer text-mid-gray py-2">
                            <MenuItem item={item} />
                        </li>
                    ))
                }
            </ul>
            <div className='w-full px-2 flex flex-col gap-2'>
                <button className='w-full py-2 rounded-lg text-mid-gray border-2 border-transparent'>Login</button>
                <button className='w-full py-2 rounded-lg text-mid-gray border-2 border-mid-gray'>Register</button>
            </div>
        </motion.div>
    )
}

function MenuItem({ item }) {
    const { hasMenu, title, menuOpen, subItems } = item;
    const [subOpen, setSubOpen] = useState(menuOpen);

    if (hasMenu) {
        return (
            <div onClick={() => setSubOpen(!subOpen)} className="flex transition-all flex-col gap-2  relative  text-mid-gray">
                <div className="flex justify-between items-center max-w-[110px] w-full">
                    {title}
                    <MenuArrow open={subOpen} />
                </div>
                {subOpen && <SubMenu subItems={subItems} />}
            </div>
        )
    }

    return (
        <div>{title}</div>
    )
}

function SubMenu({ subItems }) {
    return (
        <motion.div className='pl-4 origin-top flex flex-col gap-3 py-2'>
            {subItems.map((sub, index) => {
                if (sub.icon) {
                    return (
                        <div key={index} className='flex w-full items-center gap-3'>
                            <img src={sub.icon} alt={sub.title} />
                            <p className='text-sm'>{sub.title}</p>
                        </div>
                    )
                }
                return (
                    <div key={index} className='flex w-full items-center gap-3'>
                        <p className='text-sm'>{sub.title}</p>
                    </div>
                )
            })}
        </motion.div>
    )
}

function MenuArrow({ open }) {
    return (
        <div>{
            open ? (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6">
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
    )
}

export default Navbar