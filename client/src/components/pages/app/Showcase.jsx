import React, { useState } from 'react'

export default function Showcase () {
  const projects = [
    {
      id: 1,
      title: 'Pactice Quizes',
      content: 'Branding Design',
      image:
        'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-01.jpg'
    },
    {
      id: 2,
      title: 'Roadmaps',
      content: 'Best Marketing Tips',
      image:
        'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg'
    },
    {
      id: 3,
      title: 'Mentorship',
      content: 'Web Design Trend',
      image:
        'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-03.jpg'
    },
    {
      id: 4,
      title: 'design',
      content: 'Business Card Design',
      image:
        'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-04.jpg'
    }
  ]

  return (
    <section className='pt-20 lg:pt-[60px] dark:bg-dark'>
      <div className='px-5 container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className=' mb-[60px] w-full text-start'>
              <h2 className='text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]'>
                Dream big , Learn More
              </h2>
              <p className='text-body-color text-base dark:text-dark-6'>
              Your Journey Begins Here
              </p>
            </div>
          </div>
        </div>
        <div className='-mx-4 flex flex-wrap'>
          {projects
            .map(project => (
              <div key={project.id} className='w-full px-4 md:w-1/2 xl:w-1/4'>
                <div className='relative mb-5'>
                  <div className='overflow-hidden rounded-[10px]'>
                    <img
                      src={project.image}
                      alt={project.content}
                      className='w-full'
                    />
                  </div>
                  <div className='relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark'>
                    <span className='text-primary mb-2 block text-sm font-medium'>
                      {project.content.charAt(0).toUpperCase() +
                        project.content.slice(1)}
                    </span>
                    <h3 className='text-dark dark:text-white mb-5 text-xl font-bold'>
                      {project.title}
                    </h3>
                    <a
                      href='#'
                      className='text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-gray-900'
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}