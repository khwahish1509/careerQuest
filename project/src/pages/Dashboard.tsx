import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const Dashboard = () => {
  const appointments = [
    {
      id: '1',
      consultant: 'Dr. Sarah Wilson',
      date: '2024-03-20',
      time: '14:00',
      status: 'confirmed',
      meetLink: 'https://meet.google.com/abc-defg-hij',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Appointments</h1>

      <div className="bg-white rounded-lg shadow-md">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border-b last:border-b-0 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {appointment.consultant}
                </h3>
                <div className="flex items-center text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-1" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{appointment.time}</span>
                  </div>
                </div>
              </div>
              <a
                href={appointment.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                <Video className="h-5 w-5 mr-2" />
                Join Meeting
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;