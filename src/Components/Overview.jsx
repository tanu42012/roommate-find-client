// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { useLoaderData } from 'react-router';

// const Overview = () => {
//     const{user}=useContext(AuthContext);
//     const roomData=useLoaderData();
//     return (
//         <div>
//             <h1 className='text-3xl font-bold underline'>Overview </h1>

//             <div className="max-w-6xl mx-auto p-6 space-y-6 text-gray-800">
//                 {/* Page Heading */}
//                 <h1 className="text-3xl font-bold text-center">Dashboard Overview</h1>
//                 <p className="text-center text-gray-600 mb-6">
//                     Welcome back! Here’s a quick snapshot of your roommate finder activity.
//                 </p>

//                 {/* User Info Card */}
//                 <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
//                     <img
//                         src={user?.photoURL ?? "https://via.placeholder.com/100"}
//                         alt="User"
//                         className="w-20 h-20 rounded-full object-cover"
//                     />
//                     <div>
//                         <h2 className="text-xl font-semibold">{user?.displayName || 'Your Name'}</h2>
//                         <p className="text-sm text-gray-500">{user?.email}</p>
//                     </div>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {/* Total Listings */}
//                     <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-xl shadow">
//                         <p className="text-sm text-gray-600">Total Listings</p>
//                         <h3 className="text-2xl font-bold text-blue-700">{roomData?.totalRooms || 0}</h3>
//                     </div>

//                     {/* My Listings */}
//                     <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-xl shadow">
//                         <p className="text-sm text-gray-600">My Listings</p>
//                         <h3 className="text-2xl font-bold text-green-700">{roomData?.myRooms || 0}</h3>
//                     </div>

//                     {/* Active Roommates */}
//                     <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl shadow">
//                         <p className="text-sm text-gray-600">Active Roommate Posts</p>
//                         <h3 className="text-2xl font-bold text-yellow-700">{roomData?.active || 0}</h3>
//                     </div>

//                     {/* New Messages */}
//                     <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow">
//                         <p className="text-sm text-gray-600">Unread Messages</p>
//                         <h3 className="text-2xl font-bold text-red-700">{roomData?.unreadMessages || 0}</h3>
//                     </div>
//                 </div>

//                 {/* Optional: Add a chart or recent activity */}
//                 {/* Add more UI enhancements as needed */}
//             </div>

//         </div>
//     );
// };

// export default Overview;
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router';   // react-router-dom v6 =>  import { useLoaderData } from 'react-router-dom';

const Overview = () => {
  const { user } = useContext(AuthContext);
  const roomData = useLoaderData();            //  an array of rooms

  /** ---------- 1.  Derive stats from the array ---------- */
  const totalRooms = roomData.length;
  

  // assuming each room object has an `ownerEmail` field
  const myRooms = roomData.filter(r => r.ownerEmail === user?.email).length;

  // assuming each room has a boolean `isActive` (or change to whatever flag you use)
  const activePosts = roomData.filter(r => r.isActive).length;

  // example: each room may have an `unreadMessages` field (default 0)
  const unreadMessages = roomData.reduce(
    (sum, r) => sum + (r.unreadMessages || 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 text-gray-800">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center">Dashboard Overview</h1>
      <p className="text-center text-gray-600 mb-6">
        Welcome back! Here’s a quick snapshot of your roommate-finder activity.
      </p>

      {/* ---------- User card ---------- */}
      <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
        <img
          src={user?.photoURL ?? 'https://via.placeholder.com/100'}
          alt="User"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">
            {user?.displayName || 'Your Name'}
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* ---------- Stats cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          color="blue"
          label="Total Listings"
          value={totalRooms}
        />
        <StatCard
          color="green"
          label="My Listings"
          value={myRooms}
        />
        <StatCard
          color="yellow"
          label="Active Posts"
          value={activePosts}
        />
        <StatCard
          color="red"
          label="Unread Messages"
          value={unreadMessages}
        />
      </div>

      {/* ---------- (Optional) Show each room as a card ---------- */}
      
    </div>
  );
};

/* ---------- Small helper component for a coloured stat card ---------- */
function StatCard({ color, label, value }) {
  const bg = {
    blue: 'bg-blue-100 border-blue-500 text-blue-700',
    green: 'bg-green-100 border-green-500 text-green-700',
    yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    red: 'bg-red-100 border-red-500 text-red-700',
  }[color];

  return (
    <div className={`${bg.split(' ')[0]} border-l-4 ${bg.split(' ')[1]} p-4 rounded-xl shadow`}>
      <p className="text-sm text-gray-600">{label}</p>
      <h3 className={`text-2xl font-bold ${bg.split(' ')[2]}`}>{value}</h3>
    </div>
  );
}

export default Overview;
