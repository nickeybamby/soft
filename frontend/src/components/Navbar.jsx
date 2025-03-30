import "./navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import CartModal from "../pages/shop/CartModal";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 justify-between items-center">
        <ul className="nav__links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* logo */}
        <div className="nav__logo">
          <Link to="/">
            Softouch Clothing<span>.</span>
          </Link>
        </div>

        

        {/* nav icons */}
        <div className="nav__icons relative">
          {/* <span>
            <i className="ri-xrp-fill text-black"></i>
          </span> */}
          {/* <span>
            <Link to="/search">
              <i className="ri-search-2-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </span> */}
        </div>
      </nav>

      {/* {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )} */}
    </header>
  );
};

export default Navbar;
