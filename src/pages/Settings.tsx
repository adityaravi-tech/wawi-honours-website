import { Bell, Lock, User, Moon } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow divide-y">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                    placeholder="Tell us about yourself"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-gray-400" />
                    <span className="ml-3 text-sm text-gray-700">Email Notifications</span>
                  </div>
                  <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600">
                    <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Moon className="h-5 w-5 text-gray-400" />
                    <span className="ml-3 text-sm text-gray-700">Dark Mode</span>
                  </div>
                  <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200">
                    <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Security</h2>
              <div className="space-y-4">
                <button className="flex items-center text-sm text-gray-700">
                  <Lock className="h-5 w-5 text-gray-400 mr-3" />
                  Change Password
                </button>
                <button className="flex items-center text-sm text-gray-700">
                  <User className="h-5 w-5 text-gray-400 mr-3" />
                  Two-Factor Authentication
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="text-sm font-medium">January 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Subscription Plan</p>
                <p className="text-sm font-medium">Pro</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Storage Used</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">4.5 GB of 10 GB</p>
              </div>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}