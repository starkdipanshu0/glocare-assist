import React from "react";
import { NavLink } from "react-router-dom";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How IT Solutions Can Revolutionize Your Business",
      description:
        "Discover how leveraging IT services can optimize your operations, improve efficiency, and drive innovation in your business.",
      image: "https://via.placeholder.com/400x250", // Replace with actual image URLs
      link: "/blog/it-solutions",
    },
    {
      id: 2,
      title: "Sales Strategies for the Digital Age",
      description:
        "In the ever-evolving digital landscape, effective sales strategies are crucial. Learn the top tactics to drive sales and enhance customer engagement.",
      image: "https://via.placeholder.com/400x250", // Replace with actual image URLs
      link: "/blog/sales-strategies",
    },
    {
      id: 3,
      title: "Cybersecurity: Protecting Your Business in 2024",
      description:
        "With the rise of cyber threats, safeguarding your business is more critical than ever. Find out the best practices for staying secure.",
      image: "https://via.placeholder.com/400x250", // Replace with actual image URLs
      link: "/blog/cybersecurity",
    },
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Latest Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <p className="text-gray-700 mb-6">{blog.description}</p>
                <NavLink
                  to={blog.link}
                  className="inline-block text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  Read More →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;