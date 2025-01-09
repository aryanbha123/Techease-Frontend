import { Close, Menu, Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link as NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export default function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <header className='relative h-[80px] w-full'>
        <nav
          className={`fixed w-full flex justify-between ${
            !scroll ? 'px-4' : 'shadow-md px-6'
          } transition-all duration-200  items-center h-[80px] top-0  bg-white z-40`}
        >
          <div className='flex items-center gap-6'>
            <img src='/assets/logo.jpg' className='h-14' alt='' />
          </div>
          <div className='lg:flex hidden'>
            <div className='flex gap-2'>
              <div className='flex items-center gap-6 mr-5'>
                <ScrollLink
                  to={'about'}
                  smooth
                  duration={1000}
                  className='cursor-pointer'
                >
                  About Us
                </ScrollLink>
                <ScrollLink
                  to={'features'}
                  smooth
                  offset={-20}
                  duration={1000}
                  className='cursor-pointer'
                >
                  Features
                </ScrollLink>
                <ScrollLink
                  to={'content'}
                  smooth
                  offset={-60}
                  duration={1000}
                  className='cursor-pointer'
                >
                  Content
                </ScrollLink>
                <ScrollLink
                  to={'team'}
                  smooth
                  duration={1000}
                  className='cursor-pointer'
                >
                  Team
                </ScrollLink>
                {/* <Link>Practice</Link> */}
              </div>
              <NavLink
                to='/login'
                class='px-6 py-2 bg-gray-900  text-white font-medium rounded-lg shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200'
              >
                Login
              </NavLink>
              <NavLink
                to='/signup'
                class='px-6 py-2 bg-[#0149ad] text-white font-medium rounded-lg shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200'
              >
                Sign Up
              </NavLink>
            </div>
          </div>
          <div className='lg:hidden flex'>
            <IconButton onClick={toggleMenu}>
              <Menu />
            </IconButton>
          </div>
        </nav>

        {/* Small Screen Nab */}
        <header
          className={` ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }   fixed bg-white duration-300 transition-all z-40 h-screen left-0 top-0 w-[250px]`}
        >
          <div className='w-full absolute flex justify-end p-2'>
            <IconButton onClick={toggleMenu}>
              <Close />
            </IconButton>
          </div>
          <ul className='px-5 py-7 flex justify-between h-full flex-col'>
            <div className='flex flex-col gap-2 '>
              <img className='w-[45px]' src='/assets/logo.jpg' alt='' />
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </div>
            <div>
              <button className='button'>Login</button>
              <button className='button'>Sign Up</button>
            </div>
          </ul>
        </header>
      </header>
    </>
  )
}
