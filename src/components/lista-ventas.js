import React, { useState } from 'react';
import { ItemsVendidos } from "./lista-items_vendidos";
import "./estilos.css";

import NavBar from './navbar';
import UserContext from "./user-context";

const ListaVentas = () => {

    const [UserType, setUserType] = useState('administrador');
    const value = {UserType, setUserType};

    return (
        <UserContext.Provider value={value}>
        <NavBar></NavBar>
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">idVenta</th>
                <th scope="col">Valor</th>
                </tr>
            </thead>
            <tbody>
                {ItemsVendidos.map((item, index) => (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.fecha}</td>
                    <td>{item.id}</td>
                    <td>{item.valor}</td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th className="Total">Total :</th>
                    <td>
                        {ItemsVendidos.reduce((accumulator, object) => {return accumulator + object.valor;}, 0)}
                    </td>
                </tr>   
            </tfoot>
            </table>
        </div>
        </UserContext.Provider>
    )
};

export default ListaVentas