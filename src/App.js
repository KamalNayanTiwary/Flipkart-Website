import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';  // ✅ Tera Home component ka path
import ProductPage from './Components/Product'; // ✅ Example: product page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      {/* aur routes yaha add karo */}
    </Routes>
  );
}

export default App;
