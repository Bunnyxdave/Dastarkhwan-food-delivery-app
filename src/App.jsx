import Footer from "./Footer";
import Header from "./Header";
import { Body } from "./Body";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <BrowserRouter>
            <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );

}

export default App;