import React from 'react';
import Cart from './containers/Cart';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
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
                {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
