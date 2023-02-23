import React from 'react'

const Footer = () => {
  return (
    <div class="w-full bg-gray-800">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img class="w-8" src="./img/logo.png" alt="" />
        <span class="text-2xl font-bold text-white"></span>
      </div>
      <span class="hidden md:block font-medium text-white"
        >© 2023 Arbaz Solkar</span
      >
      <div class="flex gap-2">
        <img class="w-4 cursor-pointer" src="./img/facebook.png" alt="" />
        <img class="w-4 cursor-pointer" src="./img/instagram.png" alt="" />
        <img class="w-4 cursor-pointer" src="./img/twitter.png" alt="" />
        <img class="w-4 cursor-pointer" src="./img/linkedin.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Footer
