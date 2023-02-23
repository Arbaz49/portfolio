import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";
const styles = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "21px",
  // backgroundColor: "#172033",
  backgroundColor: "black",

  // color: "#172100",
  color: "white",

  transition: "250ms ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    color: "#172100",
    backgroundColor: "#172033",
  },
};

const Contact = () => {
  return (
    <div id="contact" class="dark:bg-slate-900">
      <div class="container mx-auto">
        {/* <!-- top --> */}
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">CONTACT</h1>
          <h1 class="text-3xl dark:text-white">Have a Question?</h1>
          <p class="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        {/* <!-- bottom --> */}
        <form class="mt-5 p-8 flex flex-col gap-5 items-center">
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="text"
            placeholder="Name Surname"
          />
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="email"
            placeholder="Email"
          />
          <textarea
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <button class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
            Submit
          </button>
        
        </form>
        <div style={{ display: "flex",width:"70vw",justifyContent:"space-evenly",margin:"auto" }}>
          <a href="https://www.linkedin.com/in/arbaz-solkar-819b961b5/" style={styles}>
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Arbaz49"  style={styles}>
            <FaGithub />
          </a>
          <a style={{ background:"black",borderRadius:"50%" }}
            href={`mailto:arbaz24.3.20@gmail.comm`}
            class=" text-white font-small px-3 py-2 rounded-md cursor-pointer"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
