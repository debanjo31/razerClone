"use client";
import React, { useState } from "react";
import { FaPlus} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  const [footerViw, setfooterViw] = useState("");
  const [closeViw, setcloseViw] = useState(false);

  return (
    <footer className="bg-[rgb(17,17,17)] py-8 text-white ">
      <div className=" w-5/6 mx-auto ">
        <div className="flex flex-col md:flex-row justify-between gap-4 lg:border-b-2 lg:border-gray-500">
          <div className="flex flex-col border-b-2 border-gray-500 md:border-none pb-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setfooterViw("shop")}
            >
              <p className="font-bold">Shop</p>
              {
                !closeViw ?
                <FaPlus className="block text-gray-200 md:hidden" onClick={() => setcloseViw(!closeViw)} /> : 
                <p className="font-bold text-lg " onClick={() => setfooterViw("")}>X</p>
              }
              
            </div>
            {footerViw === "shop" && (
              <div className="flex flex-col gap-2 py-4 md:hidden">
                <p>RazerStores</p>
                <p>RazerCafe</p>
                <p>Store Locator</p>
                <p>Purchase Programs</p>
                <p>Education</p>
                <p>Exclusive</p>
                <p>RazerStore Rewards</p>
                <p>Newsletter</p>
              </div>
            )}
            <div className=" hidden md:flex flex-col gap-2 py-4">
              <p>RazerStores</p>
              <p>RazerCafe</p>
              <p>Store Locator</p>
              <p>Purchase Programs</p>
              <p>Education</p>
              <p>Exclusive</p>
              <p>RazerStore Rewards</p>
              <p>Newsletter</p>
            </div>
          </div>

          <div className="flex flex-col border-b-2 border-gray-500 md:border-none pb-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setfooterViw("explore")}
            >
              <p className="font-bold">Explore</p>
              <FaPlus className="block text-gray-200 md:hidden" />
            </div>{" "}
            {footerViw === "explore" && (
              <div className="flex flex-col gap-2 py-4 md:hidden">
                <p>Technology</p>
                <p>Chrome RGO</p>
                <p>Concepts</p>
                <p>Exports</p>
                <p>Collabs</p>
              </div>
            )}
            <div className=" hidden md:flex flex-col gap-2 py-4">
              <p>Technology</p>
              <p>Chrome RGO</p>
              <p>Concepts</p>
              <p>Exports</p>
              <p>Collabs</p>
            </div>
          </div>

          <div className="flex flex-col border-b-2 border-gray-500 md:border-none pb-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setfooterViw("support")}
            >
              <p className="font-bold">Support</p>
              <FaPlus className="block text-gray-200 md:hidden" />
            </div>
            {footerViw === "support" && (
              <div className="flex flex-col gap-2 py-4 md:hidden">
                <p>Get Help</p>
                <p>Registration & Warranty</p>
                <p>RazorStore Support</p>
                <p>RazerCare</p>
                <p>Manage Razer ID</p>
                <p>Support Videos</p>
                <p>Accessibility Statement</p>
              </div>
            )}
            <div className=" hidden md:flex flex-col gap-2 py-4">
              <p>Get Help</p>
              <p>Registration & Warranty</p>
              <p>RazorStore Support</p>
              <p>RazerCare</p>
              <p>Manage Razer ID</p>
              <p>Support Videos</p>
              <p>Accessibility Statement</p>
            </div>
          </div>

          <div className="flex flex-col border-b-2 border-gray-500 md:border-none pb-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setfooterViw("company")}
            >
              <p className="font-bold">Company</p>
              <FaPlus className="block text-gray-200 md:hidden" />
            </div>
            {footerViw === "company" && (
              <div className="flex flex-col gap-2 py-4 md:hidden">
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Room</p>
                <p>zVentures</p>
                <p>Contact Us</p>
              </div>
            )}
            <div className="hidden md:flex flex-col gap-2 py-4">
              <p>About Us</p>
              <p>Careers</p>
              <p>Press Room</p>
              <p>zVentures</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="hidden lg:block ">
              <SocialIcon />
            </div>
            <div className="hidden lg:block ">
            </div>
            <p className="text-[#3CCA2B] text-center font-bold text-sm hidden lg:block ">
            FOR GAMERS. BY GAMERS.<sup>TM</sup>
          </p>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:flex gap-4 text-center mt-8 lg:mt-0 py-4 border-b-2 border-gray-500 lg:border-none">
          <div className=" ">
          <p>Copyright &copy; 2023 Razer Inc. All rights reserved.</p>
        </div>
        <p className="text-gray-400  mt-2 lg:mt-0">
            Site Map | Legal Terms | Privacy Policy | Cookie Settings
          </p>
          </div>
          <div>
          <div className="text-center py-4  ">
          <p>
            Global |{" "}
            <span className="text-gray-400">Change location &gt;</span>
          </p>
          </div>
          </div>
        </div>       
          <p className="text-[#3CCA2B] text-center font-bold text-sm lg:hidden">
            FOR GAMERS. BY GAMERS.<sup>TM</sup>
          </p>
          <div className="lg:hidden">
          <SocialIcon />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
