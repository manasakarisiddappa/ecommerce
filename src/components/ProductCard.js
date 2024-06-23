import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="mt-1">${product.price}</p>
      <button
        className="bg-blue-600 text-white p-2 rounded mt-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
