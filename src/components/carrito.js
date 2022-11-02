import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemsSeleccionados } from "./lista-items_seleccionados";
import "./estilos.css";

import NavBar from './navbar';
import UserContext from "./user-context";

const Carrito = () => {

    const [UserType, setUserType] = useState('cliente');
    const value = {UserType, setUserType};

    return (
        <UserContext.Provider value={value}>
        <NavBar></NavBar>
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Imagen</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Producto</th>
                <th scope="col">Valor</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {ItemsSeleccionados.map((item, index) => (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td><img width={70} src={item.img} alt={item.nombre}></img></td>
                    <td>{item.cantidad}</td>
                    <td>{item.nombre}</td>
                    <td>{item.price}</td>
                    <td>{item.price*item.cantidad}</td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th className="Total">Total :</th>
                    <td>
                        {ItemsSeleccionados.reduce((accumulator, object) => {return accumulator + object.price*object.cantidad;}, 0)}
                    </td>
                </tr>   
            </tfoot>
            </table>
        </div>
        <div className="botonesFinales">
            <Link to="/">
                <button className="btn btn-dark btn-lg"> Finalizar compra</button>
            </Link>
            <Link to="/lista-productos_cliente">
                <button className="btn btn-dark btn-lg"> Cancelar</button>
            </Link>
        </div>
        </UserContext.Provider>
    )
};

export default Carrito