import "tailwindcss/tailwind.css";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

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
              className='text-lg font-bold hover:text-purple-600 cursor-pointer'>
              ismi-abbas.dev
            </a>
            <div className='hidden md:flex space-x-6 items-center'>
              <a href='#' className='hover:text-purple-600 cursor-pointer'>
                Home
              </a>
              <a
                href='#experience'
                className='hover:text-purple-600 cursor-pointer'>
                Experience
              </a>
              <a
                href='#project'
                className='hover:text-purple-600 cursor-pointer'>
                Project
              </a>
              <a
                href='#contact'
                className='hover:text-purple-600 cursor-pointer'>
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
              Hello it's me Abbas!
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

        {/* Experience section */}
        <section>
          <div className='flex mt-10'>
            <h1
              id='experience'
              className='
      text-2xl
      font-bold
      py-8
      mx-auto
      px-8
      md:px-14
      lg:px-24
      items-center'>
              Experience
            </h1>
          </div>
          <div className='grid grid-cols-2 gap-2 px-24 py-10 mx-auto'>
            {/* Experience 1 */}
            <div className='p-10 shadow-lg rounded-lg'>
              <h1 className='text-2xl font-semibold tracking-wider'>
                Fullstack Developer Training
              </h1>
              <div>
                <h1 className='text-lg'>
                  Brickfields Asia College, Kementerian Pelajaran Tinggi
                  <br />
                  Career Advancement Program
                </h1>
                <p className='text-justify my-5'>
                  A training provided by BAC college apart of the KPT Career
                  Advancement Program that train participant to be a fullstack
                  web developer(with programming skills)
                </p>
              </div>
            </div>
            {/* Experience 2 */}
            <div className='p-10 shadow-lg rounded-lg'>
              <h1 className='text-2xl font-semibold tracking-wider'>
                Computer/Laptop Technician
              </h1>
              <div>
                <h1 className='text-lg'>
                  <a href='https://www.facebook.com/leelepair' target='_blank'>
                    Leelepair
                  </a>
                </h1>
                <p className='text-justify my-5'>
                  A freelance job, providing laptop and computer service
                  including software and hardware.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Project section */}
        <div id='project' className='w-full'>
          <div className='flex'>
            <h1
              className='flex
      text-2xl
      font-bold
      py-10
      mx-auto
      md:px-14
      lg:px-24
      items-center
      text-center
    '>
              Project
            </h1>
          </div>

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
  '>
            {/* Project 1 */}
            <div className='border-2 rounded p-10 h-full w-full'>
              <div className='h-1/2'>
                <h2 className='text-2xl font-semibold pb-2 tracking-wider'>
                  YLEARN E-LEARNING WEBSITE {""}
                  <a
                    href='https://github.com/ismi-abbas/e-learning-website'
                    target='_blank'>
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className='hover:text-purple-600'
                    />
                  </a>
                </h2>
                <h3 className='pb-2 text-lg'>A fullstack web application</h3>
                <p className='mt-2 leading-loose'>
                  Milestone project for the Fullstack Developer Training by BAC
                  KPT CAP. This project has successfully been deployed to{" "}
                  <span className='font-semibold hover:text-purple-600'>
                    <a
                      href='https://infinite-dawn-88060.herokuapp.com/'
                      target='blank'>
                      Heroku.
                    </a>
                  </span>{" "}
                  Shoutout to {""}
                  <a
                    href='https://github.com/damiadaraman'
                    className='hover:text-purple-600 hover:underline'>
                    Mia
                  </a>{" "}
                  and{" "}
                  <a
                    href='https://github.com/june0418'
                    className='hover:text-purple-600 hover:underline'>
                    June
                  </a>{" "}
                  for making this project success!
                </p>
              </div>

              <div className=''>
                <h1 className='font-semibold text-lg my-4'>Stacks :</h1>
                <div className='grid grid-cols-3'>
                  <div className='flex items-center text-lg gap-2 font-semibold justify-start p-2'>
                    <img
                      src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                      alt='react'
                      className='w-1/6'
                    />
                    React
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'
                      alt='mongodb'
                      className='w-1/6'
                    />
                    MongoDB
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
                      alt='expressjs'
                      className='w-1/6'
                    />
                    Express
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
                      alt='nodejs'
                      className='w-1/6'
                    />
                    NodeJs
                  </div>
                </div>
              </div>
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
                <div className='grid grid-cols-3'>
                  <div className='flex items-center text-lg gap-2 font-semibold justify-start p-2'>
                    <img
                      src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                      alt='react'
                      className='w-1/6'
                    />
                    React
                  </div>
                  <div className='flex items-center text-lg gap-2 font-semibold p-2 justify-start'>
                    <img
                      src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                      alt='mongodb'
                      className='w-1/6'
                    />
                    Tailwind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}

function download() {
  var iframe = document.getElementById("invisible");
  iframe.src = "file.doc";
}

export default Home;
