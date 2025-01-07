import React from 'react';

export default function Showcase() {
  return (
    <div>
      <div className="p-4 min-h-screen">
        <div className="max-w-7xl h-max px-6 md:px-6 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-900"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="my-8 text-2xl font-bold text-gray-900 md:text-4xl">
              One Platform with all Solutions
            </h2>
            <p className="text-gray-900">
              We follow our process to get you started as quickly as possible.
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-900 overflow-hidden rounded-3xl border text-gray-900 border-gray-900 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/** Cards */}
            {[
              {
                title: 'Practice Quizes ',
                description:
                  'Enhance your knowledge with interactive quizzes tailored to boost learning and improve retention.',
                iconPath: 'M10 10l2 -2v8',
              },
              {
                title: 'Roadmaps',
                description:
                  ' Structured learning paths to help you master skills and achieve your academic or career goals.',
                iconPath: 'M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3',
              },
              {
                title: 'Guidance Sessions',
                description:
                  'Personalized mentorship to clarify doubts, explore opportunities, and make informed career decisions.',
                iconPath:
                  'M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1',
              },
              {
                title: 'Jobs & Hackathons ',
                description:
                  'Discover exciting job opportunities and participate in hackathons to showcase your talent and grow professionally.',
                iconPath: 'M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0',
              },
            ].map(({ title, description, iconPath }, index) => (
              <div
                key={index}
                className="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-900/10"
              >
                <div className="relative space-y-8 py-12 px-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-900"
                    height="50"
                    width="50"
                  >
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284" />
                    <path d={iconPath} />
                  </svg>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      {title}
                    </h5>
                    <p className="text-gray-900">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
