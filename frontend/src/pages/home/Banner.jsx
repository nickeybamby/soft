import { Link } from "react-router-dom"

import bannerImg from "../../assets/banner_img.png"

const Banner = () => {
  return (
    <div className="section__container header__container">
        <div className="header__content z-30">
            <h4 className="uppercase">UP TO 20% Discount On </h4>
            <h1> Trending Outfits</h1>
            <p>Experience fine tailoring that blends classic elegance with modern styles.</p>
            <button className="btn"><Link to= '/shop' > EXPLORE NOW</Link></button>
        </div>
        <div className="header__image">
          <img className="" src={bannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner