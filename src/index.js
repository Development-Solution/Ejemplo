import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/error-page';
import Root from './components/root';
import NuevoProducto from './components/nuevo-producto';
import ListaProductos from './components/lista-productos';
import ListaVentas from './components/lista-ventas'
import ListaProductosCliente from './components/lista-productos_cliente';
import Carrito from './components/carrito';

const router = createBrowserRouter([
  {path: '/', element: <Root />, errorElement: <ErrorPage />},
  {path: '/nuevo-producto', element: <NuevoProducto />},
  {path: '/lista-productos', element: <ListaProductos />},
  {path: '/lista-ventas', element: <ListaVentas />},
  {path: '/lista-productos_cliente', element: <ListaProductosCliente />},
  {path: '/carrito', element: <Carrito />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
