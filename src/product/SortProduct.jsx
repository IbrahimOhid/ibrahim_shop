
import { NewProduct } from "../context";

const SortProduct = ({onSort}) => {
  
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Sort by:</span>
      <select
        onChange={(e) => onSort(e.target.value)}
        className="border rounded-md px-2 py-1 text-sm"
      >
        <option value="most-popular">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortProduct;
