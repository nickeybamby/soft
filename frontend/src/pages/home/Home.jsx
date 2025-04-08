import { motion } from "framer-motion";
import TrendingProducts from "../shop/TrendingProducts.jsx";
import Banner from "./Banner.jsx";
import Categories from "./Categories.jsx";
import DealsSection from "./DealsSection.jsx";
import HeroSection from "./HeroSection.jsx";
import PromoBanner from "./PromoBanner.jsx";
import Accordian from "../../components/accordian/Accordian.jsx";

const Home = () => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <Banner />
        <Categories />
        <HeroSection />
        <TrendingProducts />
        <DealsSection />
        <PromoBanner />
        <Accordian />
      </motion.div>
    </>
  );
};

export default Home;
