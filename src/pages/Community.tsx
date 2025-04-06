import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trading Community</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">
              Just analyzed the latest market trends. Seeing strong bullish signals in tech stocks.
              What are your thoughts on the semiconductor sector?
            </p>
            <img
              src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&h=400&fit=crop"
              alt="Market analysis"
              className="rounded-lg mb-4"
            />
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span>124</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>23</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Sarah Wilson</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">
              Here's my technical analysis of BTC/USD. The 200-day moving average suggests...
            </p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span>89</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>15</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Top Contributors</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">1.2k points</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah Wilson</p>
                  <p className="text-xs text-gray-500">980 points</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
            <div className="space-y-2">
              <button className="text-sm text-gray-800 hover:text-blue-600 block">#StockMarket</button>
              <button className="text-sm text-gray-800 hover:text-blue-600 block">#TechnicalAnalysis</button>
              <button className="text-sm text-gray-800 hover:text-blue-600 block">#Cryptocurrency</button>
              <button className="text-sm text-gray-800 hover:text-blue-600 block">#Trading</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}