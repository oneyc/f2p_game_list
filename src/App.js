import "./App.module.css"
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <body>
      <Header />
      <Sidebar/>
      <Outlet/>
    </body>
  );
}

export default App;
