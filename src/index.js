import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './routes/root';
import ErrorPage from './error-page';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import NuevoProducto from './routes/nuevo-producto';
import ListaProductos from './components/lista-productos';
import ListaVentas from './routes/lista-ventas'
import NavBar from "./navbar"

const router = createBrowserRouter([
  {path: '/', element: <Root />, errorElement: <ErrorPage />},
  {path: '/nuevo-producto', element: <NuevoProducto />},
  {path: '/lista-productos', element: <ListaProductos />},
  {path: '/lista-ventas', element: <ListaVentas />},
  {path: '/default-react', element: <App />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
