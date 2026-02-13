import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductsDetailPage from './pages/ProductsDetailPage';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

// This page is gonna be the main page where we store all the products. Like looking at a catalouge of items on a website. 

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductsPage />}
        />
        <Route
          path='product/:id'
          element={<ProductsDetailPage />}
        />
        <Route
          path='login'
          element={<LoginPage />}
        />
        <Route
          path='shopping-cart'
          element={<ShoppingCartPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App
