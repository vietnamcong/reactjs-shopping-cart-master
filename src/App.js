import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop';
import Home from './pages/home';
import Layout from './Layout';
import ProductDetail from './pages/product-detail';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="single-product/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
