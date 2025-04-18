import { Link } from "react-router-dom";
import InstaImg1 from "../assets/instagram-1.jpg";
import InstaImg2 from "../assets/instagram-2.jpg";
import InstaImg3 from "../assets/instagram-3.jpg";
import InstaImg4 from "../assets/instagram-4.jpg";
import InstaImg5 from "../assets/instagram-5.jpg";
import InstaImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            77 Okere Ugborikoko, Warri, Delta State.
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@softouchclothing.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            +2348134115489
          </p>
        </div>

        <div className="footer__col">
          <h4>COMPANY</h4>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <Link to = './contact'>Help</Link>
         
        </div>

        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={InstaImg1} alt="" />
            <img src={InstaImg2} alt="" />
            <img src={InstaImg3} alt="" />
            <img src={InstaImg4} alt="" />
            <img src={InstaImg5} alt="" />
            <img src={InstaImg6} alt="" />
          </div>
        </div>
      </footer>

      <div className="footer__bar mb-20">
         &copy; {new Date().getFullYear()}  Softouch Clothing. All right reserved | Powered by <a className="text-blue-600 transition-all 500s hover:text-primary" href="https://www.clinicraftstudios.xyz" target="_blank">Clinicraft Studios Tech.</a>
      </div>

    </>
  );
};

export default Footer;
