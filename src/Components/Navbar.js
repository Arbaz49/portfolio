import React from 'react';
import image from '../assets/profile.jpg';
const Navbar = () => {
  return (
    <div
    className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
  >
    {/* <!-- navbar --> */}
    <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src="./img/logo.png" alt="" />
          <span className="text-2xl font-bold text-indigo-900 dark:text-white"
            >Arbaz Solkar</span>
        </div>
        <ul
          className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
        >
          <li className="hover:text-gray-500">
            <a href="#">homepage</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#about">about me</a>
          </li>
          
          <li className="hover:text-gray-500">
            <a href="#works">Projects</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">contact</a>
          </li>
        </ul>
        <img
          id="moon"
          src="./img/moon.png"
          className="hidden md:block w-5 cursor-pointer"
          alt=""
        />
        <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
        <ul
          id="menu"
          className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
        >
          <li>
            <a id="hLink" href="#">homepage</a>
          </li>
          <li>
            <a id="hLink" href="#about">about me</a>
          </li>
          <li>
            <a id="hLink" href="#services">services</a>
          </li>
          <li>
            <a id="hLink" href="#works">Projects</a>
          </li>
          <li>
            <a id="hLink" href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
    {/* <!-- intro content --> */}
    {/* <!-- image --> */}
    <img
      className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
      src={image}
      alt=""
      style={{borderRadius:"50%"}}
    />
    {/* <!-- circle --> */}
    <div
      className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"
    ></div>
    {/* <!-- animated text --> */}
    <div
      className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
    >
      <span className="text-white"></span>
      <p id="text" className="text-red-500"></p>
    </div>
    {/* <!-- texts --> */}
    <div
      className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
    >
      <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Arbaz Solkar</h1>
      <p className="text-gray-400">
  I'm a Frontend Developer based in Mumbai, India  2020 BSC(IT) graduate from MU. passionate about building modern and elegant frontend.


I enjoy designing and building modern webapps using react & MUI.
      </p>
      <a
        className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
        href="#contact"
        >Hire Me</a
      >
    </div>
  </div>
  )
}

export default Navbar
