import SortProduct from "./SortProduct";
import ProductCard from "./ProductCard";
import { getProduct } from "../data/product";
import CartDetails from "./CartDetails";
import { useState } from "react";

const ProductList = () => {
  const allProduct = getProduct([])
  const [displayProduct, setDisplayProduct] = useState(allProduct);

  const handleChange = (value) => {
    const sortedProduct = [...allProduct];
    switch (value) {
      case "most-popular":
        sortedProduct.sort((a, b)=> b.rating - a.rating)
        break;
      case "newest":
        sortedProduct.sort((a, b)=> b.id - a.id);
        break;
      case "price-low-high":
        sortedProduct.sort((a, b)=> a.price - b.price);
        break;
      case "price-high-low":
        sortedProduct.sort((a, b)=> b.price - a.price);
        break;
      default:
        break;
    }
    setDisplayProduct(sortedProduct)
  };

  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <SortProduct onSort={handleChange} />
          </div>
          {/* Products Grid */}
          <ProductCard displayProduct={displayProduct} />
        </div>
        {/* Cart Section (1/3 width on large screens) */}
        <CartDetails />
      </div>
    </main>
  );
};

export default ProductList;
