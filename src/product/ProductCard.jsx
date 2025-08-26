import React, { useContext } from "react";
import { getImgUrl } from "../utility/utilities";
import Rating from "./Rating";
import { NewProduct } from "../context";

const ProductCard = ({ products }) => {
  const {cartData, setCartData} = useContext(NewProduct);

  const handleAddToCart = (product)=>{
    const findProduct = cartData.find((item)=> item.id === product.id);
    if(!findProduct){
      setCartData([...cartData, product])
    }else{
      alert('Product Already Added')
    }
   
  }
  return (
    <div>
      <div className="product-grid">
        {/* Product 1 */}
        {products.map((product) => (
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
                  <Rating value={product.rating}/>
                  <span className="text-xs text-gray-500 ml-1">
                    {product.rating}/{product.max_rating}
                  </span>
                </div>
                <span className="text-xs text-gray-700">
                  ({product.stock} pcs left)
                </span>
              </div>
              <div className="flex items-center">
                <p className="font-bold">${product.price}</p>
                <p className="text-gray-400 line-through ml-2">
                  {product.discounted_price !== null &&
                    `$${product.discounted_price}`}
                </p>
              </div>
              <button onClick={()=> handleAddToCart(product)} className="disabled:bg-gray-700 disabled:text-gray-400 cursor-pointer disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
