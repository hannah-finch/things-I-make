import { Outlet } from "react-router-dom"
// import "./App.css";

import Navigation from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <Outlet />
      </main>
      <Footer/>
      
    </>
  );
}

export default App;
