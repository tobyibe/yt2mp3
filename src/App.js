import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import {darkMode} from './NavBar'
import {useState} from 'react'
function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=' bg-slate-100 dark:bg-slate-700 min-h-screen'>
        <NavBar darkState={{darkMode,setDarkMode}}/>
        <Main />        
      </div>

    </div>
  );
}

export default App;
