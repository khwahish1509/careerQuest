import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Video, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Book Expert Consultations with Ease
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with professional consultants through seamless Google Meet sessions
        </p>
        <Link
          to="/consultants"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Find a Consultant
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
          <p className="text-gray-600">
            Book appointments at your convenience with our simple scheduling system
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Video className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Google Meet Integration</h3>
          <p className="text-gray-600">
            Connect seamlessly through Google Meet for high-quality video consultations
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Mail className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
          <p className="text-gray-600">
            Receive immediate email confirmations with meeting details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;