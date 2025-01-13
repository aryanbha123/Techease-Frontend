import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeIn } from './Home'

export default function Hero () {
  return (
    <>
      <motion.section className='relative py-14 overflow-hidden bg-gradient-to-b from-indigo-50 via-transparent to-indigo-50'>
        <div className='text-gray-900 w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 space-y-8'>
          {/* Announcement Banner */}
          <div className='flex justify-center'>
            {/* <span className='group inline-flex items-center border border-gray-600 -100 p-1 ps-4 rounded-full shadow-md focus:outline-none'>
              <p className='me-2 text-sm'>Techease Quizes are live now!</p>
              <span className=' -100 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-[#] -100 font-semibold text-[#0149ab] -900 text-sm'>
                <svg
                  className='shrink-0 w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </span> */}
          </div>

          {/* Headline */}
          <div className='max-w-5xl text-center mx-auto'>
            <h1 className='block font-extrabold text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
              Ace Your Placements with Techease
            </h1>
          </div>

          {/* Subheadline */}
          <div className='max-w-3xl text-center mx-auto'>
            <p className='text-lg text-gray-600'>
              Build confidence and get placement with ease !
            </p>
          </div>

          {/* Call to Action */}
          <div className='text-center'>
            <Link
              to={'/signup'}
              className='inline-flex justify-center items-center gap-x-3 bg-[#0149ab] -600 hover:bg-[#0149ab] -700 text-white text-sm font-medium rounded-full shadow-md focus:outline-none focus:ring focus:ring-[#0149ab] -300 py-3 px-6'
            >
              Get Started
              <svg
                className='shrink-0 w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m9 18 6-6-6-6' />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  )
}
