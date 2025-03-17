const EventCard = ({ event }) => {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p>{event.date} - {event.location}</p>
        <span className="text-sm bg-gray-200 px-2 py-1 rounded">{event.category}</span>
      </div>
    );
  };
  
  export default EventCard;
  