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
    // setMenuOpen(!menuOpen)
  }
  return (
    <>
      <header className='relative h-[83px] w-full'>
        <nav
          className={`fixed w-full flex justify-between 
           shadow-lg px-10
           transition-all duration-200  items-center h-[83px] top-0  bg-white z-40`}
        >
          <div className='flex items-center gap-6'>
            <img src='/assets/logo.jpg' className='h-12' alt='' />
          </div>
          <div className='lg:flex hidden'>
            <div className='flex gap-2'>
              <div className='flex items-center gap-6 mr-5'>
                <ScrollLink
                  to={'about'}
                  smooth
                  duration={1000}
                  className='cursor-pointer nav-link'
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to={'features'}
                  smooth
                  offset={-20}
                  duration={1000}
                  className='cursor-pointer nav-link'
                >
                  Features
                </ScrollLink>
                <ScrollLink
                  to={'content'}
                  smooth
                  offset={-60}
                  duration={1000}
                  className='cursor-pointer nav-link'
                >
                  Content
                </ScrollLink>
                <ScrollLink
                  to={'team'}
                  smooth
                  duration={1000}
                  className='cursor-pointer nav-link'
                >
                  Services
                </ScrollLink>
                {/* <Link>Practice</Link> */}
              </div>
              <NavLink
                to='/login'
                class='flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white bg-slate-800 hover:border-slate-800 hover:text-slate-700 hover:bg-white focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                Login
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  class='w-4 h-4 ml-1.5'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
                    clip-rule='evenodd'
                  />
                </svg>
              </NavLink>
              <NavLink
                to='/signup'
                class='flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white bg-[#0149ad] hover:border-slate-800 hover:text-slate-700 hover:bg-white focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                Sign Up
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  class='w-4 h-4 ml-1.5'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
                    clip-rule='evenodd'
                  />
                </svg>
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
