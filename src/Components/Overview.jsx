
// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { useLoaderData } from 'react-router';   // react-router-dom v6 =>  import { useLoaderData } from 'react-router-dom';

// const Overview = () => {
//   const { user } = useContext(AuthContext);
//   const roomData = useLoaderData();            //  an array of rooms

//   /** ---------- 1.  Derive stats from the array ---------- */
//   const totalRooms = roomData.length;
  

//   // assuming each room object has an `ownerEmail` field
//   const myRooms = roomData.filter(r => r.ownerEmail === user?.email).length;

//   // assuming each room has a boolean `isActive` (or change to whatever flag you use)
//   const activePosts = roomData.filter(r => r.isActive).length;

//   // example: each room may have an `unreadMessages` field (default 0)
//   const unreadMessages = roomData.reduce(
//     (sum, r) => sum + (r.unreadMessages || 0),
//     0
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-6 text-gray-800">
//       {/* Page Heading */}
//       <h1 className="text-3xl font-bold text-center">Dashboard Overview</h1>
//       <p className="text-center text-gray-600 mb-6">
//         Welcome back! Here’s a quick snapshot of your roommate-finder activity.
//       </p>

//       {/* ---------- User card ---------- */}
//       <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
//         <img
//           src={user?.photoURL ?? 'https://via.placeholder.com/100'}
//           alt="User"
//           className="w-20 h-20 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-xl font-semibold">
//             {user?.displayName || 'Your Name'}
//           </h2>
//           <p className="text-sm text-gray-500">{user?.email}</p>
//         </div>
//       </div>

//       {/* ---------- Stats cards ---------- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           color="blue"
//           label="Total Listings"
//           value={totalRooms}
//         />
//         <StatCard
//           color="green"
//           label="My Listings"
//           value={myRooms}
//         />
//         <StatCard
//           color="yellow"
//           label="Active Posts"
//           value={activePosts}
//         />
//         <StatCard
//           color="red"
//           label="Unread Messages"
//           value={unreadMessages}
//         />
//       </div>

//       {/* ---------- (Optional) Show each room as a card ---------- */}
      
//     </div>
//   );
// };

// /* ---------- Small helper component for a coloured stat card ---------- */
// function StatCard({ color, label, value }) {
//   const bg = {
//     blue: 'bg-blue-100 border-blue-500 text-blue-700',
//     green: 'bg-green-100 border-green-500 text-green-700',
//     yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
//     red: 'bg-red-100 border-red-500 text-red-700',
//   }[color];

//   return (
//     <div className={`${bg.split(' ')[0]} border-l-4 ${bg.split(' ')[1]} p-4 rounded-xl shadow`}>
//       <p className="text-sm text-gray-600">{label}</p>
//       <h3 className={`text-2xl font-bold ${bg.split(' ')[2]}`}>{value}</h3>
//     </div>
//   );
// }

// export default Overview;

// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { NavLink, useLoaderData } from 'react-router-dom'; // corrected for v6

// const Overview = () => {
//   const { user } = useContext(AuthContext);
//   const roomData = useLoaderData(); // array of rooms

//   /** ---------- 1. Stats ---------- */
//   const totalRooms = roomData.length;
//   const myRooms = roomData.filter(r => r.ownerEmail === user?.email).length;
//   const activePosts = roomData.filter(r => r.isActive).length;
//   const unreadMessages = roomData.reduce((sum, r) => sum + (r.unreadMessages || 0), 0);

//   /** ---------- 2. Top Cities ---------- */
//   const cityCount = {};
//   roomData.forEach(r => {
//     if (r.city) {
//       cityCount[r.city] = (cityCount[r.city] || 0) + 1;
//     }
//   });
//   const topCities = Object.entries(cityCount)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 3);

//   /** ---------- 3. Recent Listings ---------- */
//   const recentListings = [...roomData]
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, 3);
//     const handleSeeMore=()=>{
//       console.log("click see")
//       fetch(`https://roommate-finder-website-server-xi.vercel.app/add-room/${room?._id}`)
//       .then((res)=>res.json())
//       .then((data)=>{
//           console.log(data)
//       })

//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-10 text-gray-800">
//       {/* Heading */}
//       <div className="text-center">
//         <h1 className="text-3xl font-bold">Dashboard Overview</h1>
//         <p className="text-gray-600">Welcome back! Here's your activity summary.</p>
//       </div>

//       {/* User Profile */}
//       <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
//         <img
//           src={user?.photoURL ?? 'https://via.placeholder.com/100'}
//           alt="User"
//           className="w-20 h-20 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-xl font-semibold">{user?.displayName || 'Your Name'}</h2>
//           <p className="text-sm text-gray-500">{user?.email}</p>
//         </div>
//       </div>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard color="blue" label="Total Listings" value={totalRooms} />
//         <StatCard color="green" label="My Listings" value={myRooms} />
//         <StatCard color="yellow" label="Active Posts" value={activePosts} />
//         <StatCard color="red" label="Unread Messages" value={unreadMessages} />
//       </div>

//       {/* Top Cities */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Top Cities</h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-1">
//           {topCities.map(([city, count]) => (
//             <li key={city}>
//               {city} — {count} listings
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Recent Listings */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Recent Listings</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {roomData.map((room, idx) => (
//             // <div key={idx} className="p-4 border rounded shadow-sm">
//             //   <h3 className="font-bold text-lg">{room.title}</h3>
//             //   <p className="text-sm text-gray-500">{room.city}</p>
//             //   <p className="text-xs mt-1 text-gray-400">{new Date(room.createdAt).toLocaleDateString()}</p>
//             // </div>
//             <div className="card bg-gray-300 w-96 ">
//                 <h1 className="text-2xl font-bold">Room Details</h1>
              
//                 <div className="card-body">
//                     <h2 className="card-title">
//                        Title: {room.title}
                       
//                     </h2>
//                    <h2 className="card-title">Location: {room.location}</h2>
//                    <h2 className="card-title">Room-Type: {room.roomType}</h2>
//                    {/* <h2 className="card-title">Room-Rent: {rentAmount}</h2>
//                    <h2 className="card-title">Lifestyle-Preferences: {lifestylePreferences}</h2>
//                    <h2 className="card-title">Contact-No: {contactInfo}</h2>
//                    <h2 className="card-title">Availability: {availability}</h2>
//                    <h2 className="card-title"> Description: {description}</h2> */}
                    
//                     <div className="card-actions justify-end">
                        
//                         <NavLink onClick={handleSeeMore} to={`/detailsRoom/${room?._id}`}className="btn  btn-primary rounded-xl">See More</NavLink>
                
//                     </div>
//                 </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blog Tips Section */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Tips for You</h2>
//         <ul className="space-y-2 text-blue-600 underline">
//           <li><a href="/blog/how-to-find-good-roommate">✅ How to Find a Trustworthy Roommate</a></li>
//           <li><a href="/blog/sharing-bills-roommates">💰 Splitting Bills Without Fights</a></li>
//           <li><a href="/blog/move-in-checklist">📦 Roommate Move-In Checklist</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// /* ---------- Stat Card ---------- */
// function StatCard({ color, label, value }) {
//   const bg = {
//     blue: 'bg-blue-100 border-blue-500 text-blue-700',
//     green: 'bg-green-100 border-green-500 text-green-700',
//     yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
//     red: 'bg-red-100 border-red-500 text-red-700',
//   }[color];

//   return (
//     <div className={`${bg.split(' ')[0]} border-l-4 ${bg.split(' ')[1]} p-4 rounded-xl shadow`}>
//       <p className="text-sm text-gray-600">{label}</p>
//       <h3 className={`text-2xl font-bold ${bg.split(' ')[2]}`}>{value}</h3>
//     </div>
//   );
// }

// export default Overview;
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink, useLoaderData } from 'react-router-dom';

const Overview = () => {
  const { user } = useContext(AuthContext);
  const roomData = useLoaderData() || [];          // array of rooms (fallback empty)

  /* ---------- 1. Stats ---------- */
  const totalRooms   = roomData.length;
  const myRooms      = roomData.filter(r => r.ownerEmail === user?.email).length;
  const activePosts  = roomData.filter(r => r.isActive).length;
  const unreadMsgs   = roomData.reduce((sum, r) => sum + (r.unreadMessages || 0), 0);

  /* ---------- 2. Top Cities ---------- */
  const cityCount = {};
  roomData.forEach(r => {
    if (r.city) cityCount[r.city] = (cityCount[r.city] || 0) + 1;
  });
  const topCities = Object.entries(cityCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  /* ---------- 3. Recent Listings ---------- */
  const recentListings = [...roomData]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  /* ---------- 4. Helpers ---------- */
  const handleSeeMore = id => {
    fetch(`https://roommate-finder-website-server-xi.vercel.app/add-room/${id}`)
      .then(res  => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 text-gray-800">
      {/* Heading */}
      <header className="text-center">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-600">
          Welcome back! Here's your activity summary.
        </p>
      </header>

      {/* User Profile */}
      <section className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
        <img
          src={user?.photoURL ?? 'https://via.placeholder.com/100'}
          alt="User avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user?.displayName || 'Your Name'}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard color="blue"   label="Total Listings"  value={totalRooms} />
        <StatCard color="green"  label="My Listings"     value={myRooms} />
        <StatCard color="yellow" label="Active Posts"    value={activePosts} />
        <StatCard color="red"    label="Unread Messages" value={unreadMsgs} />
      </section>

     

      {/* Recent Listings */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Listings Room-rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roomData.map(room => (
            <div key={room._id} className="card w-full bg-gray-100 shadow">
              <div className="card-body">
                <h3 className="card-title font-bold ">Room-Size: {room.title}</h3>
                <p className="text-sm text-gray-800 mt-4">Location : {room.location}</p>
                <p className="text-sm text-gray-800">Room-rent: {room.rentAmount}</p>
               

                <div className="card-actions justify-center mt-4">
                  <NavLink
                    to={`/detailsRoom/${room._id}`}
                    className="btn btn-primary rounded-xl"
                    onClick={() => handleSeeMore(room._id)}
                  >
                    See More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Tips */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tips for You</h2>
        <ul className="space-y-2 text-blue-600 underline">
          <li><a href="/blog/how-to-find-good-roommate">✅ How to Find a Trustworthy Roommate</a></li>
          <li><a href="/blog/sharing-bills-roommates">💰 Splitting Bills Without Fights</a></li>
          <li><a href="/blog/move-in-checklist">📦 Roommate Move-In Checklist</a></li>
        </ul>
      </section>
    </div>
  );
};

/* ---------- Re-usable Stat Card ---------- */
function StatCard({ color, label, value }) {
  const styles = {
    blue:   'bg-blue-100 border-blue-500 text-blue-700',
    green:  'bg-green-100 border-green-500 text-green-700',
    yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    red:    'bg-red-100 border-red-500 text-red-700',
  }[color];

  const [bg, border, text] = styles.split(' ');

  return (
    <div className={`${bg} border-l-4 ${border} p-4 rounded-xl shadow`}>
      <p className="text-sm text-gray-600">{label}</p>
      <h3 className={`text-2xl font-bold ${text}`}>{value}</h3>
    </div>
  );
}

export default Overview;

