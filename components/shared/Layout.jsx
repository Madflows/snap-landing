import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-full grid grid-cols-1'>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout