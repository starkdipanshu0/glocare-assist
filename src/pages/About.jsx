import React from 'react'

// import heroImage from '../../assets/image/herosection-2.jpg';
// import group_1 from '../assets/image/group-1.webp';
import group from '../assets/image/about/mission.svg'
import mission from '../assets/image/about/mission-1.svg'


function About() {
  return (
    <div className="p-6">
      {/* About Glocare Assist Section */}
      <section className="mb-12">
        <div className="container mx-auto flex flex-col items-center text-center">
          {/* Placeholder for Hero Image */}
          {/* <div className="w-full h-70 bg-gray-200 animate-fadeIn">
           
            
          </div> */}
          <h1 className="text-4xl font-extrabold mt-6 opacity-0 animate-fadeIn delay-150">
            About Glocare Assist
          </h1>
          <p className="text-xl text-gray-700 mt-4 opacity-0 animate-fadeIn delay-300 max-w-3xl">
          Our company Glocare Assist, specializes at fulfilling your expectations of creating a successful brand in the sphere of digital services. We offer services from general administrative support to assist with day to day tasks to software development companies to design mobile applications, websites and software programs to captivate your target market effectively. Our services cover e-commerce web design building efficient, secure and conversion-oriented online shops and recruitment for RPOs to provide employees with perfect matches for your company. With our CRM services, your business will do a better job of relating with its customers while, with our team of digital marketers, your business will increase in attractiveness to the target market due to better SEO, social media, and content services. Our experience in web and graphic design guarantees an aesthetic appeal that makes your brand stand out in addition to a smooth interface. 
Welcome to Glocare Assist, where we combine ideas, skills, and specific focus to add value, to help your business succeed in this dynamic world of commerce.

          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="my-12 ">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
          {/* Placeholder for Mission Image */}
          
          <img className='h-80  animate-slideInLeft' src={mission} alt="BigCo Inc. logo"/>
            {/* Add Mission Image */}
         
          <div className="md:w-1/2 md:pl-8 text-center md:text-left opacity-0 animate-fadeIn delay-300 ">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg mt-4 text-gray-700">
              Our mission is simple: To provide innovative, result-driven sales strategies and cutting-edge IT solutions that help businesses thrive. We believe that the right combination of technology and sales strategies can propel any business forward, and we are here to make that happen.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="my-12">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold">Sales Solutions</h3>
              <p className="mt-4 text-gray-700">
                Our team of experienced professionals works closely with you to design and implement customized sales strategies that drive measurable growth. From optimizing your sales funnel to enhancing lead generation and conversion, we offer comprehensive sales services that meet your specific needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold">IT Services</h3>
              <p className="mt-4 text-gray-700">
                Our IT services are designed to streamline your operations and support your technological needs. We offer services such as IT consulting, software development, network security, cloud services, and more to ensure your business is equipped with the latest technology to remain agile and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="my-12 bg-gray-50 py-8">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-700 opacity-0 animate-fadeIn delay-300 max-w-4xl">
            At Glocare Assist, we take a client-first approach. We believe in building long-lasting relationships with our clients by offering personalized solutions that align with their business goals. Our experts invest the time to understand your needs, challenges, and opportunities, enabling us to deliver services tailored to your unique situation.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="my-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="mt-4 text-gray-700">Our team consists of industry veterans with deep expertise in both sales and IT, ensuring you get the best of both worlds.</p>
            </li>
            <li className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">Customized Solutions</h3>
              <p className="mt-4 text-gray-700">We don’t believe in a one-size-fits-all approach. Every business is different, and so are our solutions.</p>
            </li>
            <li className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="mt-4 text-gray-700">We have helped businesses across various industries achieve their goals, grow revenues, and optimize their IT infrastructure.</p>
            </li>
            <li className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">End-to-End Support</h3>
              <p className="mt-4 text-gray-700">From planning and strategy to execution and maintenance, we provide complete support every step of the way.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="my-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left opacity-0 animate-fadeIn delay-300">
            <h2 className="text-3xl font-bold">Our Vision for the Future</h2>
            <p className="text-lg mt-4 text-gray-700">
              As we move forward, our vision is to continue being a leader in the sales and IT consulting space. We aim to expand our services, embrace the latest technological advancements, and keep pushing the boundaries of what’s possible for our clients.
            </p>
          </div>
          {/* Placeholder for Vision Image */}
          
            {/* Add Vision Image */}
            <img src={group} alt="" />
          
        </div>
      </section>

      {/* Let's Grow Together Section */}
      <section className="my-12 py-8 bg-yellow-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Let’s Grow Together</h2>
          <p className="text-lg opacity-0 animate-fadeIn delay-300">
            Whether you're a small startup looking to scale or an established business seeking to optimize your processes, Glocare Assist is here to help. Our holistic approach ensures that your sales strategies and IT infrastructure work hand-in-hand to achieve the growth you envision.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;

