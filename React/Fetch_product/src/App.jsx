import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Products'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<Product/>}/>
                </Routes>
            </BrowserRouter>
        
        </div>
    )
}

export default App