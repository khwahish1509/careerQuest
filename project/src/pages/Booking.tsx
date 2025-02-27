import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const DUMMY_CONSULTANTS = {
  '1': {
    name: 'Dr. Sarah Wilson',
    expertise: 'Business Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 150,
  },
};

const Booking = () => {
  const { consultantId } = useParams();
  const consultant = DUMMY_CONSULTANTS[consultantId as keyof typeof DUMMY_CONSULTANTS];
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking logic with Supabase
    console.log('Booking:', { consultantId, selectedDate, selectedTime });
  };

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img
            src={consultant.imageUrl}
            alt={consultant.name}
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{consultant.name}</h2>
            <p className="text-gray-600">{consultant.expertise}</p>
          </div>
        </div>

        <form onSubmit={handleBooking} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Select Date</label>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Select Time</label>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;