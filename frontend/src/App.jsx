import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import BottomNav from "./components/bottomNav/BottomNav";

function App() {

  useEffect(() => {
          window.scrollTo(0, 0);
      })
      
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
