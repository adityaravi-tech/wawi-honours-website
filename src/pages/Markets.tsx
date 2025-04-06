import { TrendingUp, TrendingDown, Search } from 'lucide-react';

export default function Markets() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Markets</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search markets..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume (24h)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=64&h=64&fit=crop" alt="BTC" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Bitcoin</div>
                      <div className="text-sm text-gray-500">BTC</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$43,180.21</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>5.67%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $821.4B
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $28.9B
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=64&h=64&fit=crop" alt="ETH" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Ethereum</div>
                      <div className="text-sm text-gray-500">ETH</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$3,282.45</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-red-600">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <span>2.34%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $394.2B
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $15.7B
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}