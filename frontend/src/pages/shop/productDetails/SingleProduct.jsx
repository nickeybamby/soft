import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import products from "../../../data/products.json";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id.toString() === id);

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{product.name}</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">Home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">Shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link>{product.name}</Link>
          </span>
        </div>
      </section>

      <section className="section__container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* Product Image */}
          <div className="">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md w-[427px] h-auto"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
            <p className="text-xl text-primary mb-4">
              ₦{product.price} {product.oldPrice && <s>₦{product.oldPrice}</s>}
            </p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Additional product info */}
            <div>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Color:</strong> {product.color}
              </p>
              <div className="flex gap-1  items-center">
                <strong>Rating</strong>
                <RatingStars rating={product.rating} />
              </div> <br />
              <div className="italic">To request for this outfit, please send a screenshot of it to our whatsapp <a href="" className="text-green-600 uppercase"> here</a> </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default SingleProduct;
