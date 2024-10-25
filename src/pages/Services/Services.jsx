import React from 'react'

function Services() {
    return (
      <div className="p-6">
        {/* Header */}
        <section className="my-12 text-center">
          <h1 className="text-4xl font-bold animate-fadeIn">Our Services</h1>
          <p className="text-lg mt-4 text-gray-700 animate-fadeIn delay-150">
            We offer a wide range of services to help your business thrive in today’s competitive landscape.
          </p>
        </section>
  
        {/* IT Services */}
        <section className="my-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Web Development</h3>
                <p className="mt-4 text-gray-700">
                  Building responsive, modern, and scalable websites tailored to your business needs.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">App Development</h3>
                <p className="mt-4 text-gray-700">
                  Custom mobile application development for iOS and Android platforms.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Software Development</h3>
                <p className="mt-4 text-gray-700">
                  Bespoke software solutions to enhance business operations and workflow.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Cloud Solutions</h3>
                <p className="mt-4 text-gray-700">
                  Scalable and secure cloud computing solutions for flexible IT infrastructure.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Cybersecurity Solutions</h3>
                <p className="mt-4 text-gray-700">
                  Protecting your digital assets with advanced security services.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Network Management</h3>
                <p className="mt-4 text-gray-700">
                  Full-scale network setup, maintenance, and security.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">IT Support & Maintenance</h3>
                <p className="mt-4 text-gray-700">
                  Providing 24/7 technical support and system maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sales Solutions */}
        <section className="my-12 bg-gray-50 py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">Sales Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Lead Generation</h3>
                <p className="mt-4 text-gray-700">
                  Strategies to acquire high-quality leads and drive sales.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Sales Funnel Optimization</h3>
                <p className="mt-4 text-gray-700">
                  Streamlining the customer journey from awareness to purchase.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">CRM Solutions</h3>
                <p className="mt-4 text-gray-700">
                  Implementing and optimizing customer relationship management tools.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Sales Analytics</h3>
                <p className="mt-4 text-gray-700">
                  In-depth sales reporting and performance analysis.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Sales Team Training</h3>
                <p className="mt-4 text-gray-700">
                  Training programs to enhance the effectiveness of your salesforce.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Digital Marketing */}
        <section className="my-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">Digital Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Digital Marketing</h3>
                <p className="mt-4 text-gray-700">
                  Online marketing strategies, including SEO, SEM, and content marketing.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Social Media Management</h3>
                <p className="mt-4 text-gray-700">
                  Managing your brand presence and engagement across social media platforms.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Email Marketing</h3>
                <p className="mt-4 text-gray-700">
                  Crafting email campaigns to engage customers and nurture leads.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Creative Design</h3>
                <p className="mt-4 text-gray-700">
                  Eye-catching and professional designs for web, social, and print.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Business Support Services */}
        <section className="my-12 bg-gray-50 py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">Business Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Administrative Tasks</h3>
                <p className="mt-4 text-gray-700">
                  Handling essential administrative tasks for operational efficiency.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Customer Support Services</h3>
                <p className="mt-4 text-gray-700">
                  Providing excellent customer service through dedicated representatives.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold">Virtual Assistance</h3>
                <p className="mt-4 text-gray-700">
                  Offering virtual administrative and operational support for businesses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Services;
  