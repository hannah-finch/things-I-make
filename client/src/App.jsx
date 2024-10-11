import { Outlet } from "react-router-dom"
// import "./App.css";

import Navigation from "./components/Navbar"

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <Outlet />
      </main>
      
    </>
  );
}

export default App;
