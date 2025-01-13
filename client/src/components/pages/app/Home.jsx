import React from 'react'
import Slider from 'react-slick'
import About from './About'
import Content from './Content'
import Features from './Features'
import Team from './Team'
import Hero from './Hero'
import Showcase from './Showcase'

export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <Showcase/>
      {/* <Features /> */}
      {/* <Team /> */}
      <Content />
    </>
  )
}
