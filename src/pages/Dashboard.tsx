import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Market Cap</p>
              <p className="text-lg font-semibold text-gray-900">$2.4T</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Volume 24h</p>
              <p className="text-lg font-semibold text-gray-900">$86.5B</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">BTC Dominance</p>
              <p className="text-lg font-semibold text-gray-900">42.1%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded">
              <Activity className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Market Change</p>
              <p className="text-lg font-semibold text-green-600">+2.4%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#4F46E5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Top Movers</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=64&h=64&fit=crop"
                    alt="BTC"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Bitcoin</p>
                    <p className="text-sm text-gray-500">BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">$43,180.21</p>
                  <p className="text-sm text-green-600">+5.67%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=64&h=64&fit=crop"
                    alt="ETH"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Ethereum</p>
                    <p className="text-sm text-gray-500">ETH</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">$3,282.45</p>
                  <p className="text-sm text-green-600">+3.24%</p>
                </div>
              </div>
            </div>
            
            <Link to="/markets" className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 inline-block text-center">
              View All Markets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}