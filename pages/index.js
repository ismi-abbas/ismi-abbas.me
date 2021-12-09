import "tailwindcss/tailwind.css";
import Head from "next/head";
import { SiMongodb } from "react-icons/si";

function HomePage() {
  return (
    <div>
      <Head>
        <title>ismi-abbas.dev</title>
        <link rel="icon" href="/images/favicon.ico" />

        {/* Tailwind CSS */}
        <link rel="stylesheet" href="tailwind.css" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <header className="text-lg fixed top-0 inset-x-0 bg-white w-screen">
          <nav className="w-full flex justify-between items-center py-7 md:px-14 shadow-lg mx-auto">
            <a
              href="#"
              className="text-lg font-bold hover:text-purple-600 cursor-pointer">
              ismi-abbas.dev
            </a>
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="hover:text-purple-600 cursor-pointer">
                Home
              </a>
              <a
                href="#experience"
                className="hover:text-purple-600 cursor-pointer">
                Experience
              </a>
              <a
                href="#project"
                className="hover:text-purple-600 cursor-pointer">
                Project
              </a>
              <a
                href="#contact"
                className="hover:text-purple-600 cursor-pointer">
                Contact
              </a>
            </div>
          </nav>
        </header>
        {/* Welcome page */}
        <div className="flex my-14 h-3/5 w-auto items-center mx-auto px-8 md:px-14 lg:px-24">
          <div className="">
            <h1 className="text-5xl font-semibold text-purple-600 p-8">
              Hello it's me Abbas! 👉🏻
            </h1>
            <div className="text-left text-2xl mb-2 mx-auto px-8">
              My name is Abbas and I a'm a Web Developer
            </div>
            <p className="mt-2 mx-auto text-lg px-8 text-justify">
              Im a self-taught web developer. Proud of myself, even coming from
              different study backgroud, I still can catch up this within a
              short period of time
            </p>
          </div>
          <div>
            <img
              src="/images/dp.jpg"
              alt="abbas"
              className="border-2 shadow-lg rounded-full h-3/5 w-3/5 justify-center  bg-auto"
            />
          </div>
        </div>

        {/* Project section */}
        <section className="justify-items-center">
          <h1
            className="
    text-2xl
    font-bold
    py-5
    mx-auto
    px-8
    md:px-14
    lg:px-24
    items-center
  ">
            Projects
          </h1>
          <div
            id="project"
            className="
    grid
    gap-5
    grid-cols-2
    mx-auto
    px-8
    md:px-14
    lg:px-24
    items-center
  ">
            {/* Project 1 */}
            <div className="border-2 rounded p-6 col-auto ">
              <h2 className="text-2xl font-semibold pb-2">
                YLEARN E-LEARNING WEBSITE
              </h2>
              <h3 className="pb-2 text-lg">A fullstack web application</h3>
              <p>
                I work in a team to build a working website using ReactJs as
                front-end, Express and Node in the back-end and MongoDB for the
                database. Website has been deploy to{" "}
                <span className="font-semibold hover:text-purple-600">
                  <a
                    href="https://infinite-dawn-88060.herokuapp.com/"
                    target="blank">
                    Heroku.
                  </a>
                </span>
              </p>
              <div className="">
                <h1 className="font-semibold text-lg my-4">Stacks :</h1>
                <div className="grid grid-cols-2 gap-2w-1/2">
                  <div className="flex items-center text-lg gap-2 font-semibold justify-start">
                    <img
                      src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                      alt="react"
                      className="w-10"
                    />
                    React
                  </div>
                  <div className="flex items-center text-lg gap-2 font-semibold p-2 justify-start">
                    <img
                      src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                      alt="mongodb"
                      className="w-10"
                    />
                    MongoDB
                  </div>
                  <div className="flex items-center text-lg gap-2 font-semibold p-2 justify-start">
                    <img
                      src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                      alt="expressjs"
                      className="w-10"
                    />
                    Express
                  </div>
                  <div className="flex items-center text-lg gap-2 font-semibold p-2 justify-start">
                    <img
                      src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                      alt="nodejs"
                      className="w-10"
                    />
                    NodeJs
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="border-2 rounded p-5 h-full">
              <h2 className="font-medium pb-2">Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem omnis iste veniam accusantium odit nisi molestiae, esse
                harum aut, expedita aliquam enim neque quasi sapiente sed,
                possimus tempore blanditiis adipisci.
              </p>
            </div>
            {/* Project 3 */}
            <div className="border-2 rounded p-5 h-full">
              <h2 className="font-medium pb-2">Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem omnis iste veniam accusantium odit nisi molestiae, esse
                harum aut, expedita aliquam enim neque quasi sapiente sed,
                possimus tempore blanditiis adipisci.
              </p>
            </div>
            {/* Project 4 */}
            <div className="border-2 rounded p-5 ">
              <h2 className="font-medium pb-2">Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem omnis iste veniam accusantium odit nisi molestiae, esse
                harum aut, expedita aliquam enim neque quasi sapiente sed,
                possimus tempore blanditiis adipisci.
              </p>
            </div>
          </div>
        </section>
        {/* Experience section */}
        <section>
          <div>
            <h1
              id="experience"
              className="
      text-2xl
      font-bold
      py-10
      mx-auto
      px-8
      md:px-14
      lg:px-24
      items-center
    ">
              Experience
            </h1>
          </div>
        </section>
        <footer className="m-20 container flex mx-auto px-8 md:px-14 lg:px-24">
          <ul className="flex space-x-2">
            <li>Abbas</li>
            <li>Contact</li>
            <li>Hire</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
