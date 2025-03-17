import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-teal-700 text-white mt-8"
    >
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        
        {/* About Section */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-bold mb-3">About Us</h3>
          <p className="text-sm text-gray-200">
            Communion App is dedicated to bringing people together through faith and meaningful events.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['About', 'Events', 'Contact', 'FAQ'].map((link, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                <a href={`/${link.toLowerCase()}`} className="hover:underline">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-2 text-lg" /> Pune,  Maharashtra
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2 text-lg" /> +91 7745055792
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-lg" /> jivanrathod127@gmail.com
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-bold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-200 mb-3">
            Subscribe to get the latest updates on events.
          </p>
          <motion.form className="flex items-center bg-white rounded-md p-1" whileFocus={{ scale: 1.02 }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-gray-700 rounded-md outline-none"
            />
            <motion.button 
              type="submit" 
              className="bg-teal-600 px-4 py-2 rounded-md text-white hover:bg-teal-800"
              whileHover={{ scale: 1.1 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-teal-500 text-center py-4">
        <a href="https://jivanrathod.netlify.app/">&copy; {new Date().getFullYear()} Developer Jivan Rathod. All rights reserved.</a>
        {/* Social Media */}
        <div className="flex justify-center mt-2 space-x-4">
          {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
            <motion.a 
              key={index} 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Icon className="text-2xl hover:text-gray-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
