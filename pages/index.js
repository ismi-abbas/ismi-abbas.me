import "tailwindcss/tailwind.css";
import Head from "next/head";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div>
      <Head>
        <title>ismi-abbas.dev</title>
        <link rel='icon' href='/images/favicon.ico' />

        {/* Tailwind CSS */}
        <link rel='stylesheet' href='tailwind.css' />

        {/* Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        <header className='text-lg fixed top-0 inset-x-0 bg-white w-screen'>
          <nav className='w-full flex justify-between items-center py-7 md:px-14 shadow-lg mx-auto'>
            <a
              href='#'
              className='text-lg font-bold hover:text-purple-600 cursor-pointer'
            >
              ismi-abbas.dev
            </a>
            <div className='hidden md:flex space-x-6 items-center'>
              <a href='#' className='hover:text-purple-600 cursor-pointer'>
                Home
              </a>
              <a
                href='#experience'
                className='hover:text-purple-600 cursor-pointer'
              >
                Experience
              </a>
              <a
                href='#project'
                className='hover:text-purple-600 cursor-pointer'
              >
                Project
              </a>
              <a
                href='#contact'
                className='hover:text-purple-600 cursor-pointer'
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
        {/* Welcome page */}
        <div className='grid grid-cols-2 my-14 h-3/5 items-center md:px-14 justify-center'>
          {/* Intro Text */}
          <div className='justify-center'>
            <h1 className='text-5xl font-semibold text-purple-600 p-8'>
              Hello it's me Abbas! 👉🏻
            </h1>
            <div className='text-left text-2xl mb-2 mx-auto px-8'>
              My name is Abbas and I am a{" "}
              <span className='bg-gray-600 px-2 rounded-sm text-white'>
                Web Developer
              </span>
            </div>
            <p className='mt-2 mx-auto text-lg px-8 text-justify'>
              Im a self-taught web developer. Aiming to be a software engineer
              in the future!
            </p>
          </div>
          <div className='justify-center'>
            <div className='p-4'>
              {/* Me */}
              <img
                src='/images/dp.jpg'
                alt='abbas'
                className='border-2 shadow-lg rounded-full h-1/2 w-1/2 bg-auto '
              />
            </div>
          </div>
        </div>

        {/* Project section */}
        <div className='justify-items-center'>
          <h1
            id='projects'
            className='
      text-2xl
      font-bold
      py-10
      mx-auto
      md:px-14
      lg:px-24
      items-center
    '
          >
            Projects
          </h1>
          <div
            id='project'
            className='
    grid
    gap-5
    grid-cols-2
    mx-auto
    px-8
    md:px-14
    lg:px-24
    items-center
  '
          >
            {/* Project 1 */}
            <div className='border-2 rounded p-10 h-full w-full'>
              <div className='h-1/2'>
                <h2 className='text-2xl font-semibold pb-2 tracking-wider'>
                  YLEARN E-LEARNING WEBSITE
                </h2>
                <h3 className='pb-2 text-lg'>A fullstack web application</h3>
                <p className='mt-2 leading-loose'>
                  Milestone project for the Fullstack Developer Training by BAC
                  KPT CAP. This project has successfully been deployed to{" "}
                  <span className='font-semibold hover:text-purple-600'>
                    <a
                      href='https://infinite-dawn-88060.herokuapp.com/'
                      target='blank'
                    >
                      Heroku.
                    </a>
                  </span>
                </p>
              </div>

              <div className=''>
                <h1 className='font-semibold text-lg my-4'>Stacks :</h1>
                <div className='grid grid-cols-2 gap-2w-1/2'>
                  <div className='flex items-center text-lg gap-2 font-semibold justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                      alt='react'
                      className='w-10'
                    />
                    React
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'
                      alt='mongodb'
                      className='w-10'
                    />
                    MongoDB
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
                      alt='expressjs'
                      className='w-10'
                    />
                    Express
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
                      alt='nodejs'
                      className='w-10'
                    />
                    NodeJs
                  </div>
                </div>
              </div>
              <a
                href='https://github.com/ismi-abbas/e-learning-website'
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className='hover:text-purple-600 w-7'
                />
              </a>
            </div>
            {/* Project 2 */}
            <div className='border-2 rounded p-10 h-full w-full'>
              <div className='h-1/2'>
                <h2 className='text-2xl font-semibold pb-2 tracking-wider'>
                  ismi-abbas.dev
                </h2>
                <h3 className='pb-2 text-lg'>This webpage!</h3>
                <p>My first ever portfolio webpage created by myself!</p>
              </div>

              <div className='h-1/2'>
                <h1 className='font-semibold text-lg my-4'>Stacks :</h1>
                <div className='grid grid-cols-2 gap-2w-1/2'>
                  <div className='flex items-center text-lg gap-2 font-semibold justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                      alt='react'
                      className='w-10'
                    />
                    React
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                      alt='mongodb'
                      className='w-10'
                    />
                    Tailwind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience section */}
        <section>
          <div>
            <h1
              id='experience'
              className='
      text-2xl
      font-bold
      py-10
      mx-auto
      px-8
      md:px-14
      lg:px-24
      items-center'
            >
              Experience
            </h1>
          </div>
        </section>
        {/* Footer */}

        <div
          className='bg-gray-900 text-white grid grid-cols-4
      py-10
      mx-auto
      px-8
      md:px-14
      lg:px-24
      items-center
      fixed
      bottom-0
      inset-x-0'
        >
          <div>Contact</div>
          <div>Row2 </div>
          <div>Row3 </div>
          <div>Row4 </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
