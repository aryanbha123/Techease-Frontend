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
                class='] mr-5 inline-block rounded-full bg-[#0149ad] px-6 py-4 text-center font-bold text-white transition hover:border-black hover:bg-white md:mr-6 lg:mr-8'
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
