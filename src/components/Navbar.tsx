import { LineChart, TrendingUp, BookOpen, Users, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <LineChart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">StockPro</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <TrendingUp className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              
              <Link
                to="/learn"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/learn')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Learn
              </Link>
              
              <Link
                to="/community"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/community')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Users className="h-4 w-4 mr-1" />
                Community
              </Link>
              
              <Link
                to="/settings"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/settings')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Settings className="h-4 w-4 mr-1" />
                Settings
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link to="/learn" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}