import Announcement from "./Announcement";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import ProductList from "./product/ProductList";

function App() {
  return (
    <>
      <Announcement />
      <Header />
      <ProductList/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
