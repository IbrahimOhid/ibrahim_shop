
import SortProduct from "./SortProduct";
import ProductCard from "./ProductCard";
import { getProduct } from "../data/product";
import CartDetails from "./CartDetails";

const ProductList = () => {
  const products = getProduct([]);
  
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <SortProduct />
          </div>
          {/* Products Grid */}
          <ProductCard products={products} />
          
        </div>
        {/* Cart Section (1/3 width on large screens) */}
        <CartDetails />
      </div>
    </main>
  );
};

export default ProductList;
