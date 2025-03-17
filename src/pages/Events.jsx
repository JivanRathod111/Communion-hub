import { motion } from "framer-motion";
import { useState } from "react";
import eventImage1 from "../assets/img-1.png";
import eventImage2 from "../assets/img-2.png";
import eventImage3 from "../assets/img-3.png";
import EventForm from "../components/EventForm";

const initialEvents = [
  {
    id: 1,
    title: "Tech & Faith Summit",
    date: "2025-03-25",
    location: "New York",
    description: "Discover how technology connects faith communities worldwide.",
    image: eventImage1,
  },
  {
    id: 2,
    title: "Mindfulness Retreat",
    date: "2025-03-17",
    location: "Los Angeles",
    description: "Find inner peace with guided meditation and self-discovery.",
    image: eventImage2,
  },
  {
    id: 3,
    title: "VR Worship Experience",
    date: "2025-04-05",
    location: "Chicago",
    description: "Step into a virtual spiritual journey like never before.",
    image: eventImage3,
  },
  {id: 4,
    title: "Tech & Faith Summit",
    date: "2025-03-25",
    location: "New York",
    description: "Discover how technology connects faith communities worldwide.",
    image: eventImage1,
  },
  {
    id: 5,
    title: "Mindfulness Retreat",
    date: "2025-03-17",
    location: "Los Angeles",
    description: "Find inner peace with guided meditation and self-discovery.",
    image: eventImage2,
  },
  {
    id: 6,
    title: "VR Worship Experience",
    date: "2025-04-05",
    location: "Chicago",
    description: "Step into a virtual spiritual journey like never before.",
    image: eventImage3,
  },
];

// Utility function to filter events
const filterEvents = (events, filter) => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === "today") return eventDate.toDateString() === today.toDateString();
    if (filter === "tomorrow") return eventDate.toDateString() === tomorrow.toDateString();
    if (filter === "nextWeek") return eventDate >= today && eventDate <= nextWeek;
    if (filter === "nextMonth") return eventDate >= today && eventDate <= nextMonth;
    return true;
  });
};

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const filteredEvents = filterEvents(events, activeFilter);

  const handleAddEvent = (newEvent) => {
    const updatedEvent = { ...newEvent, id: events.length + 1, image: eventImage1 };
    setEvents([...events, updatedEvent]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-10 px-6">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Upcoming Events
      </motion.h1>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 mb-6 max-w-6xl mx-auto space-y-3 md:space-y-0">
  
  {/* Mobile Dropdown */}
  <div className="w-full md:hidden">
    <select
      onChange={(e) => setActiveFilter(e.target.value)}
      className="w-full px-4 py-2 border rounded-md text-gray-700 bg-gray-100"
      value={activeFilter}
    >
      {["all", "today", "tomorrow", "nextWeek", "nextMonth"].map((filter) => (
        <option key={filter} value={filter}>
          {filter === "all" ? "All Events" : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </option>
      ))}
    </select>
  </div>

  {/* Desktop Filter Buttons */}
  <div className="hidden md:flex gap-3">
    {["all", "today", "tomorrow", "nextWeek", "nextMonth"].map((filter) => (
      <button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
          activeFilter === filter ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {filter === "all" ? "All Events" : filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>
    ))}
  </div>

  {/* Create Event Button */}
  <button
    onClick={() => setShowModal(true)}
    className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-100 hover:text-gray-700 transition w-full md:w-auto"
  >
    + Create Event
  </button>
</div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
<motion.div
  key={event.id}
  className="bg-white shadow-xl  border-teal-500 w-56 overflow-hidden transition-transform transform hover:shadow-2xl relative bg-gradient-to-r from-teal-500 to-teal-200"
  whileHover={{ scale: 1.05, rotate: 0.5 }}
  whileTap={{ scale: 0.98 }}// Full vertical spin animation on hover
  transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth rotation
>
  <div className="relative">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-44 object-cover transition-opacity duration-300 hover:opacity-90"
    />
    <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs px-3 py-1 shadow-md">
      {new Date(event.date).toLocaleDateString()}
    </div>
  </div>
  <div className="p-4">
    <motion.h2
      className="text-lg font-semibold text-gray-900"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {event.title}
    </motion.h2>
    <p className="text-gray-600 text-sm">{event.location}</p>
    <motion.p
      className="mt-2 text-gray-700 text-sm leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {event.description}
    </motion.p>
  </div>
</motion.div>




          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No events found for this filter.</p>
        )}
      </div>

      {/* Event Modal */}
      {showModal && <EventForm onAddEvent={handleAddEvent} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Events;
