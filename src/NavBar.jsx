import React from 'react'
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa6";
const NavBar = ({darkState}) => {
  const {darkMode,setDarkMode} = darkState;
  const toggleDark = () => {
    setDarkMode(!darkMode);
  }  
  return (
    <div >
        <div className=' dark:bg-gray-800 transition-all flex justify-between bg-slate-200'>

            <div className='flex space-x-5 dark:text-gray-300 p-3 font-bold text-2xl text-slate-700 transition-all'>
                <p>YouTube To MP3</p>
            </div>
            <button className='p-3 dark:bg-blue-600 dark:hover:bg-blue-800 bg-slate-300 hover:bg-slate-400 m-3 rounded-lg shadow-2xl text-slate-700 dark:text-gray-300 font-bold hover:scale-105 transition-all' onClick={toggleDark}>{darkMode ? <FaRegMoon /> : <FaRegSun/>}</button>            
        </div> 
    </div>
  )
}

export default NavBar;
