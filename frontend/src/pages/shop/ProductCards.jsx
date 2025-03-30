import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
      {products.map((product) => (
        <div key={product._id} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300 rounded-md"
              />
            </Link>
          </div>

          {/* Product description */}
          <div className="product__card__content">
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-primary">
              &#8358;{product.price}{" "}
              {product.oldPrice && <s className="text-gray-500"> &#8358;{product.oldPrice}</s>}
            </p>

            {/* Rating */}
            <RatingStars rating={product.rating} />

            {/* Add to Cart Button */}
            <button
              className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
