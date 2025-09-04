import React, { useContext } from "react";
import { IncDecItem, NewProduct } from "../context";
import { getImgUrl } from "../utility/utilities";

const CartDetails = () => {
  const { cartData, setCartData } = useContext(NewProduct);
  // Handle Increment Function
  const handleIncBtn = (productId) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1, stock:item.stock-1 } : item
      )
    );
  };
  // Handle Decrement Function
  const handleDecBtn = (productId) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  // Handle Remove Cart Function
  const handleRemoveCart = (productId) => {
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.id !== productId)
    );
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {/* Cart Item */}
        {cartData.length === 0 ? (
          <div className="border border-gray-400 py-5 rounded-xl">
            <h1 className="text-red-500 text-center mb-5 font-semibold text-2xl">
              Your Cart is Empty !
            </h1>
          </div>
        ) : (
          <div>
            {cartData.map((product) => (
              <div
                key={product.id}
                className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
              >
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                  <img
                    src={getImgUrl(product.cover)}
                    alt={product.name}
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{product.name}</h3>
                    <button
                      onClick={() => handleRemoveCart(product.id)}
                      className="text-red-500 text-sm cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Size: {product.size}</p>
                  <p className="text-sm text-gray-500">
                    Color: {product.color}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">${product.price}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecBtn(product.id)}
                        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
                      >
                        −
                      </button>
                      <span className="text-sm">{product.quantity}</span>
                      <button
                        onClick={() => handleIncBtn(product.id)}
                        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order Summary */}
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">$565</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-$113</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">$15</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>$467</span>
            </div>
          </div>
          {/* Promo Code */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
              <span className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </span>
            </div>
            <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
              Apply
            </button>
          </div>
          {/* Checkout Button */}
          <a
            href="#"
            className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Go to Checkout
            <span className="inline-block ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
