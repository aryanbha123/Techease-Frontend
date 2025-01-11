import React from 'react'
import { motion } from 'framer-motion'

export default function Hero () {
  return (
    <>
      <section className='relative p-10 overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-blue-50 '>
        {/* <img src="/assets/Start Now.png" alt="" /> */}
       <img className='h-72' src="/icons/hero.png" alt="" />
      </section>
    </>
  )
}
