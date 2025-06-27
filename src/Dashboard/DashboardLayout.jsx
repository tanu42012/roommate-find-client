import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { FaChartPie,FaHome , FaListUl, FaPlusCircle, FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from '../assets/user.png';

export default function DashboardLayout() {
  const { user } = useContext(AuthContext);


  const links = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: 'overview', label: 'Overview', icon: <FaChartPie /> },
    { to: 'all-items', label: 'All Items', icon: <FaListUl /> },
    { to: 'add-item', label: 'Add Item', icon: <FaPlusCircle /> },
    { to: 'my-items', label: 'My Items', icon: <FaUserAlt /> },
  ];

  return (
    <div className="drawer lg:drawer-open">
      {/* ---------- SIDEBAR ---------- */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={user?.photoURL ?? userIcon}
              alt="avatar"
              className="w-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user?.displayName}</p>
              <p className="text-xs opacity-70">{user?.email}</p>
            </div>
          </div>

          { links.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '.'}
                className="flex gap-2 items-center"
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </aside>
      </div>

      {/* ---------- MAIN ---------- */}
      <div className="drawer-content flex flex-col p-6">
        <Outlet />
        
      </div>
    </div>
  );
}
