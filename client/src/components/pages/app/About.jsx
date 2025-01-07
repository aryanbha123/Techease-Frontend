import React from 'react'

export default function About() {
  return (
    <>
      <section id='about' className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            {/* Images Section */}
            <div
              className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="Techease Quiz Platform Image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="Quiz Portal Image"
              />
            </div>

            {/* Content Section */}
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2
                    className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    About Us
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Techease empowers students with quizzes, roadmaps, and guidance sessions, simplifying learning and career planning. Join us to unlock your potential, excel academically, and achieve your goals with expert-curated resources.

                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">50+</h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Interactive Quizzes</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">1000+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Engaged Learners</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">95%</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">User Satisfaction</h6>
                  </div>
                </div>
              </div>
              <button
                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Explore More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
