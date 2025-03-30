import { useState } from "react";
import ProductCards from "./ProductCards";

import products from "../../data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader">
        {" "}
        Discover the Hottest Picks — Elevate Your Style With Our Curated
        Collection of Trending Men's Fashion
      </p>

      {/* product cards */}
      <ProductCards products={products.slice(0, visibleProducts)} />

      {/* load more products btn */}
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
