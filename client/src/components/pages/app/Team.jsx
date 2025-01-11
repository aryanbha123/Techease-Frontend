// const Team = () => {
//   return (
//     <section id="team" class='pb-10 pt-2 bg-gray-50'>
//       <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//         <div class='flex justify-between items-center flex-col lg:flex-row md:mt-20'>
//           <div class='w-full lg:w-1/2'>
//             <h2 class='font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left'>
//               Our leading, strong & creative team
//             </h2>
//             <p class='text-lg text-gray-500 mb-16 text-center lg:text-left'>
//               These people work on making our product best.
//             </p>
//             <button class='cursor-pointer py-3 px-8 w-60 bg-[#0149ad] text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-[#0149ad] mx-auto lg:mx-0'>
//               Apply{' '}
//             </button>
//           </div>
//           <div class='w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl'>
//             <div class='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8'>
//               <img
//                 src='https://pagedone.io/asset/uploads/1696238644.png'
//                 alt='Team tailwind section'
//                 class='md:w-44 w-full  h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0'
//               />
//               <img
//                 src='https://pagedone.io/asset/uploads/1696238665.png'
//                 alt='Team tailwind section'
//                 class='md:w-44 w-full  h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto'
//               />
//               <img
//                 src='https://pagedone.io/asset/uploads/1696238684.png'
//                 alt='Team tailwind section'
//                 class='md:w-44 w-full  h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0'
//               />
//               <img
//                 src='https://pagedone.io/asset/uploads/1696238702.png'
//                 alt='Team tailwind section'
//                 class='md:w-44 w-full  h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto'
//               />
//               <img
//                 src='https://pagedone.io/asset/uploads/1696238720.png'
//                 alt='Team tailwind section'
//                 class='md:w-44 w-full  h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto'
//               />
//               <img
//                 src='https://pagedone.io/asset/uploads/1696238737.png'
//                 alt='Team tailwind section'
//                 class='md:w-44 w-full  h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Team





const Content = () => {
  return (
    <section id="hero" className=" pt-10 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Content Section */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">Techease</h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2
                    className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    One stop solution - Techease 
                  </h2>
                  <p
                    className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    TechEase Portal is your gateway to a world of seamless digital solutions. Our journey is marked by 
                    innovation, collaboration, and a relentless pursuit of excellence. Together, we've built a platform 
                    that simplifies technology for everyone.
                  </p>
                </div>
              </div>

              <div className="w-full flex-col justify-center items-start gap-6 flex">
                {/* Statistics Section */}
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Practice Quizes</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Empowering Businesses Worldwide</p>
                  </div>
                  <div
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Mentorships</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Delivering Excellence Consistently</p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div
                    className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Placement Sessions</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Recognized for Innovation & Impact</p>
                  </div>
                  <div
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Job Updates</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Customer Satisfaction is Our </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="sm:w-fit w-full group px-3.5 py-2 bg-[#0149ad]hover:bg-[#0149ad] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span
                className="px-1.5 text-[#0149ad] text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div
              className="sm:w-[564px] w-full sm:h-[480px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="/assets/hero.webp" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;