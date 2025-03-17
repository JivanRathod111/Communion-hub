import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import eventImage1 from "../assets/banner-bg.png";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div className="p-8 max-w-6xl mx-auto">
      {/* About Us Section */}
      <motion.div 
        className="grid md:grid-cols-2 gap-8 mb-10 items-center bg-gray-100 p-25 shadow-2xs"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Communion App is a platform designed to connect people through meaningful events, faith-based gatherings, and community-driven initiatives. We aim to create a space where everyone feels welcomed and empowered.
          </p>
        </div>
        <motion.img 
          src={eventImage1}
          alt="About Us"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Our Mission Section */}
      <motion.div 
        className="grid md:grid-cols-2 gap-8 mb-10 items-center bg-white p-25 shadow-2xs"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={eventImage1}
          alt="Our Mission"
          className="rounded-xl shadow-lg"
        />
        <div className="text-right">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to bridge communities by offering a platform for faith-based and social events. Whether it’s a spiritual retreat, charity work, or social gathering, we make it easy to connect and engage.
          </p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div 
        className="grid md:grid-cols-2 gap-8 mb-10 items-center bg-gray-100 p-15  shadow-2xs"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Founded with a passion for community building, Communion App was born from the desire to create an inclusive space where people can come together, share ideas, and grow collectively.
          </p>
        </div>
        <motion.img 
          src={eventImage1}
          alt="Our Story"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-md text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-teal-700 mb-6">💬 What Our Users Say</h2>
        <div className="overflow-hidden relative w-full">
          <motion.div 
            className="text-lg text-gray-700 italic"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            “This app has truly brought our community together like never before. The ease of organizing events and finding like-minded people is amazing!”
          </motion.div>
          <span className="text-teal-600 font-bold mt-2 block">- Alex M.</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

