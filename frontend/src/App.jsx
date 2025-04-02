import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useTransition } from "react";
import BottomNav from "./components/bottomNav/BottomNav";
import ScrollToTop from "./components/ScrollToTop";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
