import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProductProvider } from "./store/ProductContext";
import { ProductDetails } from "./pages/ProductDetails";
import Login from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </ProductProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
