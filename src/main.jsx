import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './global.css'
import { CartProvider } from './contexts/cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
