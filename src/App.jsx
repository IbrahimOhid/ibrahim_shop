import { useState } from "react";
import Announcement from "./Announcement";
import "./App.css";
import { NewProduct } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import ProductList from "./product/ProductList";

function App() {
  const [cartData, setCartData] = useState([])
  return (
    <>
      <NewProduct.Provider value={{cartData, setCartData}}>
        <Announcement />
        <Header />
        <ProductList />
        <Newsletter />
        <Footer />
      </NewProduct.Provider>
    </>
  );
}

export default App;
