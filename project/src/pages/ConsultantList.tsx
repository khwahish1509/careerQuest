import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

const DUMMY_CONSULTANTS = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    expertise: 'Business Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 150,
  },
  {
    id: '2',
    name: 'Michael Chen',
    expertise: 'Financial Planning',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 120,
  },
  {
    id: '3',
    name: 'Emma Thompson',
    expertise: 'Marketing Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 135,
  },
];

const ConsultantList = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Consultants</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_CONSULTANTS.map((consultant) => (
          <div key={consultant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={consultant.imageUrl}
              alt={consultant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{consultant.name}</h3>
              <p className="text-gray-600 mb-4">{consultant.expertise}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>${consultant.hourlyRate}/hour</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1">4.8</span>
                </div>
              </div>
              <Link
                to={`/booking/${consultant.id}`}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultantList;