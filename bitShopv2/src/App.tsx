import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

// This page is gonna be the main page where we store all the products. Like looking at a catalouge of items on a website. 

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route 
        path="/"
        element={<ProductsPage />}
      />
    </Routes>
    </BrowserRouter>
  );
};

export default App
