import React from "react";
import youtube from "../assets/youtube.png";
import resume from "../assets/ResumeBuilder.png";
import news_app from "../assets/news app.png";
import sortingVisualizer from "../assets/sortingVisualizer.png";
import weatherImg from "../assets/weatherImg.png";
import inventory from "../assets/inventory.png";

import thaliOrdering from "../assets/thaliOrdering.png";
import "../styles/projects.css";
import Skills from "./Skills.js"

const Projects = () => {
  return (
    <>
      <div class="flex flex-col gap-3 items-center" id="works">
        <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
        <h1 class="text-3xl dark:text-white">Projects</h1>
        <p class="w-1/2 text-center text-white">
          I have created a some projects based on technologies that i know .
        </p>
      </div>
      <div className="p-3 m-3 sm:p-0 flex flex-wrap justify-around ">
      <div className="card">
          <img src={inventory} alt="ba" />
          <h4 className="mx-5">Inventory Management System</h4>
          <p>Technologies Used: - React - Redux Toolkit - react-router-dom - Bootstrap - Material-UI-Node.js- Express.js - MongoDB-RazorPay (for payment options-test Mode)</p>
          <a href="https://inventory-frontend-flame.vercel.app/login" target={"_blank"} rel="noreferrer">view</a>
          
        </div>

        <div className="card">
          <img src={"https://camo.githubusercontent.com/7a6c8bcb2dd9454368d291963ae8506126e762a854b2878f0115db14f5194181/68747470733a2f2f692e6962622e636f2f37575a524c44312f3132322e6a7067"} alt="ba" />
          <h4 className="mx-5">Video Chat App</h4>
          <p>Technologies Used: - React - Bootstrap - Material-UI-Node.js- Express.js - Socket.io</p>
          <a href="https://video-chat-app-front-end.vercel.app/" target={"_blank"} rel="noreferrer">view</a>
          
        </div>

        <div className="card">
          <img src={youtube} alt="ba" />
          <h4 className="mx-5">Youtube Clone</h4>
          <p>Technologies Used: - React - Redux Toolkit - react-router-dom - Bootstrap - react-bootstrap</p>
          <a href="https://yt-pink.vercel.app/" target={"_blank"} rel="noreferrer">view</a>
          
        </div>


        <div className="card">
          <img src={resume} alt="ba"/>
          <h4 className="mx-5">Resume Builder</h4>
          <p>Technologies Used: - React - Redux Toolkit - Material UI - FireBase Auth - react-router-dom - Bootstrap - react-bootstrap</p>
          <a href="https://resume-builder-react-rust.vercel.app/" target={"_blank"} rel="noreferrer">view</a>
        </div>

        
        <div className="card">
          <img src={news_app}alt="ba" />
          <h4 className="mx-5">News App</h4>
          <p>Technologies Used: - React - Redux Toolkit - react-router-dom - Bootstrap - react-bootstrap</p>
          <a href="https://github.com/Arbaz49/newsapp" target={"_blank"} rel="noreferrer">view</a>
        </div>

        <div className="card">
          <img src={sortingVisualizer}alt="ba" />
          <h4 className="mx-5">Sorting Visualizer</h4>
          <p>Technologies Used: - HTML5 - CSS - JAVASCRIPT- Bootstrap </p>
          <a href="https://sorting-visualiizer.vercel.app/" target={"_blank"} rel="noreferrer">view</a>
        </div>

        <div className="card">
          <img src={thaliOrdering}alt="ba" />
          <h4 className="mx-5">King-Thali</h4>
          <p>Technologies Used: - React - Redux Toolkit - react-router-dom - Bootstrap - react-bootstrap</p>
          <a href="https://stalwart-licorice-e20043.netlify.app/" target={"_blank"} rel="noreferrer">view</a>
        </div>

        <div className="card">
          <img src={weatherImg}alt="ba" />
          <h4 className="mx-5">Weather Application</h4>
          <p>Technologies Used: Html-Css-Javascrip-Bootstrap - React js</p>
          <a href="https://weather-app-jade-kappa.vercel.app/" target={"_blank"} rel="noreferrer">view</a>
        </div>

     
       
      </div>
    </>
  );
};

export default Projects;
