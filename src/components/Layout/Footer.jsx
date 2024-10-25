import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Glocare Assist</h2>
            <p className="text-gray-400">
              Empowering businesses through sales solutions and IT services for a sustainable future.
            </p>
            <p className="mt-4">© 2024 Glocare Assist, All Rights Reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <NavLink to="/" className="hover:text-yellow-300 transition-all duration-300">Home</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/about" className="hover:text-yellow-300 transition-all duration-300">About Us</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/services" className="hover:text-yellow-300 transition-all duration-300">Services</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/blogs" className="hover:text-yellow-300 transition-all duration-300">Blogs</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/contact" className="hover:text-yellow-300 transition-all duration-300">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul>
              <li className="mb-2">
                <NavLink to="/services" className="hover:text-yellow-300 transition-all duration-300">Sales Solutions</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/services" className="hover:text-yellow-300 transition-all duration-300">IT Solutions</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/services" className="hover:text-yellow-300 transition-all duration-300">Digital Marketing</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/services" className="hover:text-yellow-300 transition-all duration-300">Business Support</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <p className="text-gray-400">123 Business Park, City Name, Country</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-400">Email: info@glocareassist.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8">
          <a href="#" className="mx-4 text-xl hover:text-yellow-300 transition-all duration-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mx-4 text-xl hover:text-yellow-300 transition-all duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-4 text-xl hover:text-yellow-300 transition-all duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="mx-4 text-xl hover:text-yellow-300 transition-all duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
