import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import BottomNav from "./components/bottomNav/BottomNav";
import ScrollToTop from "./components/ScrollToTop";

function App() {


  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Outlet />
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
