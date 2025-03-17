import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";
import backgroundImage from "../assets/banner-bg.png";
import floatingElement from "../assets/customer-img.png";
import floatingImage1 from "../assets/img-1.png";
import floatingImage2 from "../assets/img-2.png";
import floatingImage3 from "../assets/img-3.png";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Home = () => {
  const images = [floatingImage1, floatingImage2, floatingImage3];
  const margins = ["mt-36", "mt-12", "mt-0"];

  return (
    <div className="relative">
      <Parallax bgImage={backgroundImage} strength={500} className="h-screen relative">
        <motion.div
          className="flex flex-col items-center justify-center h-screen text-center text-white p-6 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            <Typewriter
              options={{
                strings: ["Connecting People Across Faiths & Interests"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-sm mb-6 drop-shadow-md max-w-3xl">
            Communion Hub is a revolutionary platform designed to unite people through faith, culture, and shared interests. Whether you seek spiritual guidance, meaningful events, or like-minded individuals, our hub provides an inclusive space where everyone feels valued, respected, and connected. We believe in the power of community, fostering interactions that lead to lifelong friendships, collaborations, and personal growth. Explore our platform today and be part of something truly transformative.
          </p>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/events"
              className="px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-400 text-white rounded-full shadow-lg hover:shadow-xl transition"
            >
              Explore Events
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute top-1/4 right-10 flex gap-6">
  {images.map((_, index) => (
    <motion.div
      key={index}
      className={`w-40 h-60 border-2 border-blue-500 shadow-lg ${margins[index]}`}
      {...floatingAnimation}
      style={{ backgroundColor: index === 0 ? "#1E3A8A" : index === 1 ? "#3B82F6" : "#60A5FA" }} // Different shades of blue
    />
  ))}
</div>

      </Parallax>

      <Link to="/about">
        <motion.img
          src={floatingElement}
          alt="Floating decoration"
          className="absolute top-20 left-10 w-24 animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </Link>

      <motion.section className="py-12 px-6 bg-gray-100" {...fadeInAnimation}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Communion?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div className="h-80 bg-white p-18 rounded-xl shadow-lg border-l-4 border-blue-500" {...fadeInAnimation}>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Engagement</h3>
            <p className="text-gray-600">
              Participate in enriching events that foster deep connections and meaningful relationships within a diverse and welcoming community.
            </p>
          </motion.div>
          <motion.div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-18 rounded-xl shadow-lg text-white" {...fadeInAnimation}>
            <h3 className="text-xl font-semibold mb-3">Seamless Collaboration</h3>
            <p>
              Our platform provides tools to help individuals and organizations collaborate effectively on projects, events, and causes that matter.
            </p>
          </motion.div>
          <motion.div className="p-18 bg-white rounded-xl shadow-lg border-t-4 border-cyan-400 hover:shadow-2xl transition" {...fadeInAnimation}>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Trusted Support</h3>
            <p className="text-gray-600">
              Get access to a supportive network and resources that help you grow spiritually, socially, and professionally.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-12 h-96" {...fadeInAnimation}>
        <div className="max-w-4xl mx-auto text-center mt-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
          <Slider {...testimonialSettings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="p-6 shadow-lg rounded-lg">
                <p className="italic text-lg text-gray-700">
                  "This platform has truly changed my life. The sense of belonging, the inspiring events, and the meaningful connections I've made here are invaluable. I never imagined such a community existed."
                </p>
                <p className="font-bold mt-4 text-gray-900">- User {index + 1}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;