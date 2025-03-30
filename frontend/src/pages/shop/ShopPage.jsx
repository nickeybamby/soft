import React, { useEffect, useState } from "react";

import productsData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";

const filters = {
  categories: ["all", "accessories", "clothes", "shoes"],
  colors: ["all", "black", "blue", "white", "beige"],
  priceRange: [
    { label: "Under ₦30,000", min: 10, max: 29999 },
    { label: "₦30,000 - ₦70000", min: 30000, max: 70000 },
    { label: "Over ₦70,000", min: 70000, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  //filtering functions
  const applyFilters = () => {
    let filteredProducts = productsData;

    // filter by category
    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        product => product.category === filtersState.category
      )
    }

    // filter by color
    if (filtersState.color && filtersState.color !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.color === filtersState.color)
    }

    // filter by price range
    if (filtersState.priceRange) {
        const [minPrice, maxPrice] = filtersState.priceRange
          .replace(/₦/g, "")
          .split("-")
          .map((value) => (value === "Infinity" ? Infinity : Number(value))); 
    
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.price >= minPrice && product.price <= (maxPrice || Infinity) 
        );
    }

    setProducts(filteredProducts)
  };

  useEffect(() => {
    applyFilters()
  }, [filtersState])

//   clear the filters
const clearFilters = () => {
    setFiltersState({
        category: "all",
        color: "all",
        priceRange: "",
    })
}

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          {" "}
          Discover the Hottest Picks: Evevate Yor Style with Our Curated
          Collection of Trending Men's Outfit.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* left side */}
          <ShopFiltering 
          filters={filters} 
          filtersState={filtersState} 
          setFiltersState={setFiltersState} 
          clearFilters={clearFilters} 
          />

          {/* right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">Products Available: {products.length}</h3>
            <ProductCards products={products}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
