// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext('light');
  
// export const ThemeProvider=({children})=>{
//     const [darkMode,setDarkMode] = useState(
//         localStorage.getItem("theme")==="dark"  

//     );
//     useEffect(()=>{
//         if(darkMode){
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme","dark")

//         }
//         else{
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme","light")

//         }

//     },[darkMode])
   
//     return(
//         <ThemeContext.Provider value={{darkMode,setDarkMode}}>
//             {children}

//         </ThemeContext.Provider>
//     )
// };
// export const useDarkMode=()=>useContext(ThemeContext)
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

/**
 * ThemeProvider provides dark mode context using `darkMode` and `setDarkMode`.
 */
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize state safely for SSR (if applicable)
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook for accessing dark mode context.
 */
export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
};