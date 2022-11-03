import './../styles/estilos.css'
import React, { useState } from 'react';
import NavBar from './navbar';
import UserContext from "./user-context";

import ItemsInventario from "./../data/lista-items.json";

let id = 0
const ListaProductosCliente = () => {
    
    const [UserType, setUserType] = useState('cliente');
    const value = {UserType, setUserType};

    return (
        <UserContext.Provider value={value}>
        <NavBar></NavBar>
        <div className="container mt-3 w-75">
            {ItemsInventario.length > 0 && 
                <h1 className="alert alert-success">Lista de productos</h1>                  
            }
            <div className='jumbotron py-3 text-secondary d-flex flex-wrap'>
                {ItemsInventario.map(element => (
                    <div className="card mx-2 mb-3" key={id++}>
                        <img src={element.img} className="card-img-top" height={300} alt={element.nombre}></img>
                        <div className="card-body">
                            <h2 className="card-title">{element.nombre}</h2>
                            <p className="card-text">{element.descripcion}</p>
                            <p className="btn btn-primary">$ {element.price}</p>
                            {element.stock > 0 &&
                                <span className="ms-3">Disponible {element.stock}</span>}
                            {element.stock === 0 &&
                                <span className="ms-3">No hay unidades disponibles</span>}
                        </div>
                    </div>
                )
                )}
            </div>
            {!ItemsInventario.length && 
                <div className="alert alert-warning text-center">
                    <h1>No hay productos para mostrar!</h1>
                </div>
            }
        </div>
        </UserContext.Provider>
    );
}

export default ListaProductosCliente