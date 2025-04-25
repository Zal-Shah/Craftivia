import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider }  from './context/AuthContext';
import { CartProvider }  from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
