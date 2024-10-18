import { Outlet } from "react-router-dom"

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
