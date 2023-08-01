import React from 'react'
import {  FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMusic, FaGamepad  } from "react-icons/fa";


const SocialIcon = () => {
  return (
    <div className="socialIcons flex lg:flex-col justify-center gap-4 text-center py-4 lg:py-0">
              <div className="inline-block p-2 border-2 border-gray-400 rounded-full background-transparent"><FaFacebook className="text-gray-400" /></div>
              <div className="inline-block p-2 border-2 border-gray-400 rounded-full background-transparent"><FaInstagram className="text-gray-400" /></div>
              <div className="inline-block p-2 border-2 border-gray-400 rounded-full background-transparent"><FaTwitter  className="text-gray-400"/></div>
              <div className="inline-block p-2 border-2 border-gray-400 rounded-full background-transparent"><FaYoutube className="text-gray-400" /></div>
              <div className="inline-block p-2 border-2 border-gray-400 rounded-full background-transparent"><FaMusic className="text-gray-400" /></div>
              <div className="inline-block p-2 border-2 border-gray-400 rounded-full background-transparent"><FaGamepad className="text-gray-400" /></div>
        </div>
  )
}

export default SocialIcon