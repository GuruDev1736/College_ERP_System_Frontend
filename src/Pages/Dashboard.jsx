import React from 'react';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  CurrencyDollarIcon,
  CalendarIcon,
  ClockIcon,
  BellIcon,
  UserIcon
} from '@heroicons/react/24/outline';

function Dashboard({ role = 'Student' }) {
  const renderContent = () => {
    switch (role) {
      case 'Admin':
        return (
          <>
            {/* Admin Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
                    <p className="text-3xl font-bold text-gray-800">1,200</p>
                    <span className="text-green-600 text-sm font-medium">↗ +5.2%</span>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <UserGroupIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Teachers</h3>
                    <p className="text-3xl font-bold text-gray-800">75</p>
                    <span className="text-green-600 text-sm font-medium">↗ +2.1%</span>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <AcademicCapIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Courses Offered</h3>
                    <p className="text-3xl font-bold text-gray-800">50</p>
                    <span className="text-blue-600 text-sm font-medium">→ 0%</span>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <ChartBarIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Fee Collected</h3>
                    <p className="text-3xl font-bold text-gray-800">₹10L</p>
                    <span className="text-green-600 text-sm font-medium">↗ +12.5%</span>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl">
                    <CurrencyDollarIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Enrollment Trends</h3>
                <div className="h-64 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">📊 Chart will be displayed here</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">New student admission completed</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Fee payment received</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Exam schedule updated</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'Teacher':
        return (
          <>
            {/* Teacher Dashboard Content */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Classes Today</h2>
              <p className="text-gray-600 dark:text-gray-300">[Schedule Placeholder]</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Pending Attendance</h2>
              <p className="text-gray-600 dark:text-gray-300">5 Classes</p>
            </div>
          </>
        );
      case 'Student':
        return (
          <>
            {/* Student Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Profile Overview</h3>
                  <UserIcon className="h-6 w-6 text-violet-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Name: <span className="font-medium text-gray-800">John Doe</span></p>
                  <p className="text-sm text-gray-600">Student ID: <span className="font-medium text-gray-800">STU001</span></p>
                  <p className="text-sm text-gray-600">Year: <span className="font-medium text-gray-800">3rd Year</span></p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Fee Status</h3>
                  <CurrencyDollarIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Total: <span className="font-medium text-gray-800">₹50,000</span></p>
                  <p className="text-sm text-gray-600">Paid: <span className="font-medium text-green-600">₹45,000</span></p>
                  <p className="text-sm text-gray-600">Pending: <span className="font-medium text-red-600">₹5,000</span></p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">This Month: <span className="font-medium text-green-600">85%</span></p>
                  <p className="text-sm text-gray-600">Overall: <span className="font-medium text-blue-600">88%</span></p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Today's Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <ClockIcon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">Mathematics</p>
                      <p className="text-sm text-gray-600">9:00 AM - 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <ClockIcon className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Physics</p>
                      <p className="text-sm text-gray-600">11:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-800">Chemistry</p>
                      <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Grades</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-800">Mathematics</span>
                    <span className="font-bold text-green-600">A</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-800">Physics</span>
                    <span className="font-bold text-blue-600">B+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-gray-800">Chemistry</span>
                    <span className="font-bold text-yellow-600">B</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return <p className="text-gray-600 dark:text-gray-300">Role not recognized.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
      {/* Navigation Header */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ERP</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
                  College ERP
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-sky-600 hover:text-sky-700 transition-colors">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-sky-900 mb-2">Welcome back!</h2>
          <p className="text-sky-700">Here's what's happening with your college today.</p>
        </div>

        {/* Main Content */}
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
