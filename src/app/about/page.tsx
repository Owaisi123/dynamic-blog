import React from 'react';
import Image from 'next/image';


export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg relative">
  <Image
    src="https://www.shutterstock.com/image-vector/circle-connection-logo-260nw-367976510.jpg"
    alt="my-pic"
    layout="fill"
    objectFit="cover" // Ensures the image scales properly to fit the container
  />
</div>

          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
            <p className="text-gray-600 mt-4">
              Hi there! I'm a passionate Front-End Web Developer with a knack
              for crafting beautiful and functional user experiences. I love
              working with technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mt-4">
              When I'm not coding, I enjoy writing blogs about programming,
              exploring new tech trends, and contributing to open-source
              projects. Feel free to connect with me on social media!
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-600 mt-4">
            Want to collaborate or have any questions? Drop me a message at{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-blue-500 hover:underline"
            >
              abc@gmail.com
            </a>
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            {/* Replace these links with your social profiles */}
            <a
              href="https://github.com/owaisi123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.385.6.112.82-.26.82-.577v-2.045c-3.338.726-4.033-1.633-4.033-1.633-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.73.083-.73 1.204.084 1.84 1.236 1.84 1.236 1.07 1.834 2.808 1.305 3.493.998.108-.774.419-1.305.762-1.604-2.665-.306-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.305-.536-1.528.117-3.184 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.006-.403c1.02.005 2.047.137 3.006.403 2.292-1.552 3.298-1.23 3.298-1.23.653 1.656.241 2.879.118 3.184.768.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.62-5.481 5.918.431.372.814 1.102.814 2.222v3.293c0 .32.22.694.824.576C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.262 11.675-11.675 0-.178-.004-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.212 8.212 0 01-2.605.996A4.107 4.107 0 0016.616 4a4.108 4.108 0 00-4.095 4.95 11.65 11.65 0 01-8.457-4.287 4.108 4.108 0 001.27 5.482 4.093 4.093 0 01-1.86-.514v.052a4.108 4.108 0 003.292 4.023 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.234 8.234 0 012 18.127a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

 