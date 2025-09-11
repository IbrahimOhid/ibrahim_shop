import { useState } from "react";
import Announcement from "./Announcement";
import "./App.css";
import { NewProduct } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import ProductList from "./product/ProductList";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <NewProduct.Provider value={{ cartData, setCartData }}>
        <Announcement />
        <ProductList />
        <Newsletter />
        <Footer />
        <ToastContainer />
      </NewProduct.Provider>
    </>
  );
}

export default App;
