import React from 'react'
import { motion } from 'framer-motion'

export default function Hero () {
  return (
    <>
      <section className='relative p-14 overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-blue-50 '>
        <div class='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div class='text-center'>
            <p class='max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight'>
              AI-Powered Customer Service Chatbot
            </p>
            <h1 class='max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter'>
              Our AI-powered customer service chatbot is an innovative tool that
              can assist customers 24/7 with their inquiries, providing fast and
              accurate responses.
            </h1>
            <div class='px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9'>
              <a
                href='#'
                title=''
                class='mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                role='button'
              >
                Create a bot
              </a>
              <a
                href='#'
                class='inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                role='button'
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
