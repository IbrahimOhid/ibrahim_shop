import { useState } from "react";
import Announcement from "./Announcement";
import "./App.css";
import { IncDecItem, NewProduct } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import ProductList from "./product/ProductList";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartData, setCartData] = useState([]);
  const [incrProduct, setIncrProduct] = useState(0);
  return (
    <>
      <NewProduct.Provider value={{ cartData, setCartData }}>
        <Announcement />
        <Header />
        <IncDecItem.Provider value={{ incrProduct, setIncrProduct }}>
          <ProductList />
        </IncDecItem.Provider>
        <Newsletter />
        <Footer />
        <ToastContainer />
      </NewProduct.Provider>
    </>
  );
}

export default App;
