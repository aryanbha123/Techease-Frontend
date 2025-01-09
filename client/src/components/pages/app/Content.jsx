// import React from 'react';

import { Link } from "react-router-dom";

// const Content = () => {
//   return (
//     <section className="pt-24 relative xl:mr-0 lg:mr-5 mr-0">
//       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
//         <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
//           {/* Content Section */}
//           <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
//             <div className="w-full flex-col justify-center items-start gap-8 flex">
//               <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
//                 <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
//                 <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
//                   <h2
//                     className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
//                     One stop solution - Techease 
//                   </h2>
//                   <p
//                     className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
//                     TechEase Portal is your gateway to a world of seamless digital solutions. Our journey is marked by 
//                     innovation, collaboration, and a relentless pursuit of excellence. Together, we've built a platform 
//                     that simplifies technology for everyone.
//                   </p>
//                 </div>
//               </div>

//               <div className="w-full flex-col justify-center items-start gap-6 flex">
//                 {/* Statistics Section */}
//                 <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
//                   <div
//                     className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
//                     <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
//                     <p className="text-gray-500 text-base font-normal leading-relaxed">Empowering Businesses Worldwide</p>
//                   </div>
//                   <div
//                     className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
//                     <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">200+ Projects</h4>
//                     <p className="text-gray-500 text-base font-normal leading-relaxed">Delivering Excellence Consistently</p>
//                   </div>
//                 </div>
//                 <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
//                   <div
//                     className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
//                     <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">30+ Awards</h4>
//                     <p className="text-gray-500 text-base font-normal leading-relaxed">Recognized for Innovation & Impact</p>
//                   </div>
//                   <div
//                     className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
//                     <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">98% Happy Clients</h4>
//                     <p className="text-gray-500 text-base font-normal leading-relaxed">Customer Satisfaction is Our Priority</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               className="sm:w-fit w-full group px-3.5 py-2 bg-[#0149ad]hover:bg-[#0149ad] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
//               <span
//                 className="px-1.5 text-[#0149ad] text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
//                 Read More
//               </span>
//               <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
//                 xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
//                   strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="w-full lg:justify-start justify-center items-start flex">
//             <div
//               className="sm:w-[564px] w-full sm:h-[480px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
//               <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
//                 src="https://pagedone.io/asset/uploads/1717742431.png" alt="About Us Image" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Content = () => {
  return (
    <section id="content" className='overflow-hidden bg-white py-8 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-[#0149ad]'>
                Empower Learning
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Pareeksha Portal
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                A platform designed for students to learn & grow
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                <div className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                      className='absolute left-1 top-1 h-5 w-5 text-[#0149ad]'
                    >
                      <path d='M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z' />
                      <path d='M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z' />
                      <path d='M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z' />
                    </svg>
                    Practice Quizes
                  </dt>
                  <dd className='inline ml-1'>
                    Create and manage templated exam schedules, notifications,
                    and result generation with ease.
                  </dd>
                </div>
                <div className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                      className='absolute left-1 top-1 h-5 w-5 text-[#0149ad]'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Mentorship Roadmaps
                  </dt>
                  <dd className='inline ml-1'>
                    Personalized guidance for students to achieve academic and
                    career success.
                  </dd>
                </div>
                <div className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                      className='absolute left-1 top-1 h-5 w-5 text-[#0149ad]'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Job Updates
                  </dt>
                  <dd className='inline ml-1'>
                    Regular updates on the latest job opportunities in various
                    industries.
                  </dd>
                </div>
              </dl>
              <div className='mt-10 flex items-center gap-x-6'>
               
                <Link
                  to='/signup'
                  className='text-sm font-semibold leading-6 text-gray-700'
                >
                Register <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </div>
          <video
            src=''
            autoPlay controls
            className='w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:mt-20 mt-3 md:-ml-4 lg:-ml-0'
            width='2432'
            height='1442'
          />
        </div>
      </div>
    </section>
  )
}

export default Content;
