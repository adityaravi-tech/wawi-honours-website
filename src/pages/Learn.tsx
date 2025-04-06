import { BookOpen, Video, Users, Award } from 'lucide-react';

export default function Learn() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn Stock Trading</h1>
        <p className="text-xl text-gray-600">Master the markets with our comprehensive learning resources</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop"
            alt="Trading basics"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Trading Basics</h3>
            <p className="text-gray-600 mb-4">Learn the fundamentals of stock trading and market analysis.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 w-full">
              Start Learning
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
            alt="Technical Analysis"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Technical Analysis</h3>
            <p className="text-gray-600 mb-4">Master chart patterns and technical indicators.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 w-full">
              Explore Charts
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=400&fit=crop"
            alt="Risk Management"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
            <p className="text-gray-600 mb-4">Learn how to protect your investments and minimize losses.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 w-full">
              Start Course
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/MLyCdxc-wfA"
            title="Stock Market Basics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Stock Market Basics</h3>
            <p className="text-gray-600">Learn the essentials of stock market investing</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}