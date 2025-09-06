import React, { useContext } from "react";
import { getImgUrl } from "../utility/utilities";
import Rating from "./Rating";
import { NewProduct } from "../context";
import { toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const { cartData, setCartData } = useContext(NewProduct);

  const handleAddToCart = (product) => {
    const addProduct = cartData.find((item) => item.id === product.id);

    if (!addProduct) {
      setCartData([...cartData, product]);
      toast.success("Product Added Successfully", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
      toast.warn("Already Product Added", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // Calculate remaining stock for a product
  const getRemainingStock = (product) => {
    const cartItem = cartData.find((item) => item.id === product.id);
    if (cartItem) {
      return product.stock - cartItem.quantity;
    }
    return product.stock;
  };

  return (
    <div>
      <div className="product-grid">
        {/* Product */}
        {products.map((product) => {
          const isInCart = cartData.find((item) => item.id === product.id);
          const remainingStock = getRemainingStock(product);
          return (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={getImgUrl(product.cover)}
                  alt={product.name}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name} </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <Rating value={product.rating} />
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating}/{product.max_rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">
                    ( {remainingStock}
                    pcs left)
                  </span>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">${product.price}</p>
                  <p className="text-gray-400 line-through ml-2">
                    {`$${product.discounted_price}`}
                  </p>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={remainingStock === 0}
                  className={`${
                    isInCart
                      ? "bg-red-800 hover:bg-red-900"
                      : remainingStock === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-900"
                  } 
                     cursor-pointer  w-full mt-2  py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all`}
                >
                  {isInCart
                    ? "Remove from Cart"
                    : remainingStock === 0
                    ? "Out Of Stock"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
