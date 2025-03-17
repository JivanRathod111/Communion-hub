import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaTags, FaFont, FaAlignLeft } from "react-icons/fa";

const EventForm = ({ onAddEvent, onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Religious");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ title, date, location, category, description });
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-100 bg-opacity backdrop-blur-lg flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
          >
            ✖
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold text-teal-700 text-center mb-4">
            📅 Create a New Event
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title Input */}
            <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-teal-400">
              <FaFont className="text-teal-500 mr-2" />
              <input
                type="text"
                placeholder="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>

            {/* Date Input */}
            <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-teal-400">
              <FaCalendarAlt className="text-teal-500 mr-2" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-teal-400">
              <FaMapMarkerAlt className="text-teal-500 mr-2" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>

            {/* Category Input */}
            <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-teal-400">
              <FaTags className="text-teal-500 mr-2" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full outline-none bg-transparent"
              >
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
                <option value="Educational">Educational</option>
              </select>
            </div>

            {/* Description Input */}
            <div className="flex items-start border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-teal-400">
              <FaAlignLeft className="text-teal-500 mt-1 mr-2" />
              <textarea
                placeholder="Event Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full outline-none resize-none"
                rows="3"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition font-semibold"
            >
              ✅ Add Event
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventForm;
