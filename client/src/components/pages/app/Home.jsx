import React from 'react'
import Slider from 'react-slick'
import About from './About'
import Content from './Content'
import Features from './Features'
import Team from './Team'
import Hero from './Hero'
import Showcase from './Showcase'

export default function Home () {
  return (
    <>
      <Hero />
      <Showcase/>
      <About />
      <Features />
      <Team />
      <Content />
    </>
  )
}
