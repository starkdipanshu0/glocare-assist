import React from 'react'
import heroImage from '../../assets/image/herosection-2.jpg';
function HeroSection() {
    return (
      <section
        className="relative bg-cover bg-center h-screen backdrop-blur-lg "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
  
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 ">
          {/* Title with Fade-in Animation */}
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 opacity-0 animate-fadeIn">
            Welcome to Glocare Assist
          </h1>
  
          {/* Subtitle with Delayed Fade-in Animation */}
          <p className="text-xl sm:text-2xl font-light mb-8 max-w-lg opacity-0 animate-fadeIn delay-150">
            Your Trusted Partner in Sales and IT Excellence
          </p>
  
          {/* Call to Action Button with Slide-in Animation */}
          <a
            href="#services"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 opacity-0 animate-slideInUp delay-300"
          >
            Explore Our Services
          </a>
        </div>
      </section>
    );
  }
  
  export default HeroSection;