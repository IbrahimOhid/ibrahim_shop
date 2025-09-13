import { useReducer } from "react";
import Announcement from "./Announcement";
import "./App.css";
import { NewProduct } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import ProductList from "./product/ProductList";
import { ToastContainer } from "react-toastify";
import { cartReducer, initialValue } from "./reducers/CartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  return (
    <>
      <NewProduct.Provider value={{ state, dispatch }}>
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
