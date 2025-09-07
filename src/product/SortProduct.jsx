import React, { useContext } from "react";
import { NewProduct } from "../context";

const SortProduct = ({products}) => {
  const { cartData, setCartData } = useContext(NewProduct);
  

  const handleChange = (value) => {
    if (value === "Most Popular") {
      const popularProduct = products.filter((item) => item.rating > 3);
      setCartData(popularProduct);
    } else if (value === "Newest") {
      const newestProduct = products.filter((item) => item.rating <= 3);
      setCartData(newestProduct);
    }
  };
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Sort by:</span>
      <select
        onChange={(e) => handleChange(e.target.value)}
        className="border rounded-md px-2 py-1 text-sm"
      >
        <option value={'Most Popular'}>Most Popular</option>
        <option value={'Newest'}>Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortProduct;
