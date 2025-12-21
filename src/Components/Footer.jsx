import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#7be3a8] text-black px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-light leading-tight">
            GlobalEd Pathway
          </h2>
          <div className="text-sm space-y-1">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>
              500 Terry Francine Street,
              <br /> 6th Floor, San Francisco, CA 94158
            </p>
          </div>
          <div className="flex gap-4 mt-2 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Policy Links */}
        <div className="text-sm flex flex-col gap-1">
          <a href="#">Company</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          {/* <p className="text-lg font-medium">All Rights Reserved</p> */}
          <label htmlFor="email" className="text-sm font-light">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="border-b border-black bg-transparent outline-none py-1 w-full"
            placeholder="Enter your email"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe" className="text-sm font-light">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>
          <button className="border border-black px-4 py-1 w-fit mt-2">
            Submit
          </button>
        </div>
      </div>
      <hr className="bg-black w-full my-8"/>
      <div className="justify-center text-center mt-8 text-lg">
        Copyright © 2025 <span className="font-extrabold">GlobalEd Pathway</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
