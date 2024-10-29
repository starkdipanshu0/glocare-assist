import React,{useState,useEffect} from 'react';
import HeroSection from './HeroSection';

// Placeholder logos - Replace these with actual images or company names
import image1 from "../../assets/image/herosection-2.jpg"
import image3 from "../../assets/image/herosection-3.jpg"

import image2 from "../../assets/image/herosection-1.jpg"
import image4 from "../../assets/image/contact.png"
import image5 from "../../assets/image/Website_development.png"
import image6 from "../../assets/image/app_development1.png"
import image7 from "../../assets/image/marketing2.png"
import image8 from "../../assets/image/business_development.png"
import image9 from "../../assets/image/seo.png"
import image10 from "../../assets/image/about.png"





import HeadingGlow from './HeadingGlow';
import ServiceCard from './ServiceCard';




export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
  image1,
  image2,
  image3,


];

const textColors = [
  "text-white",
  "text-yellow-500",
  
  "text-blue-500",
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <>
      {/* Hero Section */}
      <section
      className="relative bg-cover bg-center h-screen backdrop-blur-lg  duration-1000"
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 "></div>


<div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
  <h1 className={`text-4xl sm:text-6xl font-extrabold mb-4 opacity-0 animate-fadeIn `}>
    <HeadingGlow currentImageIndex={currentImageIndex}/>
  </h1>
  <p className={`text-xl sm:text-2xl font-bold mb-8  opacity-0 animate-fadeIn delay-150 ${textColors[currentImageIndex]}`}>
    Your Trusted Partner in Sales and IT Excellence
  </p>
  <a
    href="#services"
    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 opacity-0 animate-slideInUp delay-300"
  >
    Explore Our Services
  </a>
</div>
    </section>

      {/* About Section */}
      <section id="about" className=" flex p-16 bg-gray-100 justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">About Glocare Assist</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6 opacity-0 animate-fadeIn delay-150">
          Glocare Assist is committed to empowering businesses with a distinctive approach that combines sales solutions and IT services to help optimize operations and drive growth. Established with a vision to support companies on their path to sustainable success, Glocare Assist positions itself as a dedicated partner, offering expertise that enables businesses to streamline their processes, enhance productivity, and unlock new potential. Our team works alongside clients to implement strategic solutions that address their unique challenges, delivering measurable results and long-term value. With a focus on building trust and fostering client success, we strive to transform operations into opportunities for growth, efficiency, and competitive advantage.
          </p>
          {/* Know More Button */}
          <a
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
          >
            Know More
          </a>
        </div>
        <div className='overflow-hidden rounded-xl shadow-lg shadow-slate-200'>
          <img src={image10} alt="contact" />
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fadeIn">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-0 animate-fadeIn delay-150">
            <img src={companyLogo1} alt="Company 1" className="w-24 h-24 object-contain" />
            <img src={companyLogo2} alt="Company 2" className="w-24 h-24 object-contain" />
            <img src={companyLogo3} alt="Company 3" className="w-24 h-24 object-contain" />
            <img src={companyLogo4} alt="Company 4" className="w-24 h-24 object-contain" />
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className=" flex flex-col justify-center items-center p-10 gap-10 bg-white">
      
        <div className='text-3xl font-bold'>SERVICES</div>
        <div className='flex justify-center items-center gap-10'>
        <ServiceCard image={image5} heading={"Web Development"} content={"Building responsive, modern, and scalable websites tailored to your business needs."}/>
        <ServiceCard image={image6} heading={"Web Development"} content={"Building responsive, modern, and scalable websites tailored to your business needs."}/>
        <ServiceCard image={image7} heading={"Web Development"} content={"Building responsive, modern, and scalable websites tailored to your business needs."}/>
        <ServiceCard image={image8} heading={"Web Development"} content={"Building responsive, modern, and scalable websites tailored to your business needs."}/>
        <ServiceCard image={image9} heading={"Web Development"} content={"Building responsive, modern, and scalable websites tailored to your business needs."}/>
        

        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gray-100 flex justify-center items-center px-10">
        <div className='overflow-hidden rounded-xl shadow-lg shadow-slate-200'>
          <img src={image4} alt="contact" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded border focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded border focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 rounded border focus:outline-none focus:border-yellow-500 transition-colors"
            />
            {/* Additional form fields */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
