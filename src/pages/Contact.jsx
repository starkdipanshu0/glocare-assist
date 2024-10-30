import React from "react";
import contact from "../assets/image/contact.png"
function Contact() {
  return (
    <div className="p-6">
      {/* Page Header */}
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold animate-fadeIn">Contact Us</h1>
        <p className="text-lg mt-4 text-gray-700 animate-fadeIn delay-150">
          Have any questions or want to learn more about our services? Get in touch with us!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="my-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg animate-slideIn">
              <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-lg font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium">Message</label>
                  <textarea
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    rows="4"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Placeholder for Image */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-6">
            
             <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="my-12 bg-gray-50 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg animate-slideIn">
              <h3 className="text-xl font-semibold">Office Location</h3>
              <p className="mt-4 text-gray-700">
                123 Glocare Assist Street, Business Park, City Name, Country
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg animate-slideIn">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-4 text-gray-700">+1 (123) 456-7890</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg animate-slideIn">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-4 text-gray-700">contact@glocareassist.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

