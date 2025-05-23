// import React from 'react';
// import { useDarkMode } from '../context/ThemeContext';

// const DarkModeToggler = () => {
//     // const darkMode=false;
//     const {darkMode,setDarkMode} =useDarkMode()

//     return (
//         <div >
//             <button onClick={()=>setDarkMode(!darkMode)} className='px-6 py-2 mt-4 bg-blue-300 rounded-xl dark:bg-gray-900 dark:text-white'>
//                 {darkMode?"Light Mode":"Dark Mode"}
//             </button>
//         </div>
//     );
// };

// export default DarkModeToggler;
import React from 'react';
import { useDarkMode } from '../context/ThemeContext';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-2 mt-4 bg-blue-300 rounded-xl text-black dark:bg-gray-900 dark:text-white"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggler;