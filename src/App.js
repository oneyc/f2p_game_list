import React, {useState} from "react"
import "./App.module.css"
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

/*
Clickable sidebar
Infinite Scroll
*/

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuStateHandler = () =>{
    console.log("menuStateHandler called");
    setIsMenuOpen(!isMenuOpen);
    toggleBodyScroll();
  }

  const toggleBodyScroll = () =>{
    if(!isMenuOpen){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <div>
      <Header setSidebar={menuStateHandler}/>
      <Sidebar sidebarVisibility={isMenuOpen}/>
      <Outlet/>
    </div>
  );
}

export default App;
