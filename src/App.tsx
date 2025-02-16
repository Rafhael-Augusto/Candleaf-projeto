import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutProduct from "./components/aboutProduct";
import Footer from "./components/footer";
import Header from "./components/header";
import Popular from "./components/popular";
import Products from "./components/products";
import Testimonials from "./components/testimonials";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Products />
                <AboutProduct />
                <Testimonials />
                <Popular />
                <Footer />
              </>
            }
          />

          <Route path="/product" element={<Product />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
