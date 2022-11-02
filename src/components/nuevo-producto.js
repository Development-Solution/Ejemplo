import React, { useState } from 'react';
import NavBar from './navbar';
import UserContext from "./user-context";

const NuevoProducto = () => {
    
    const [productos, setProductos] = useState([]);

    const agregarProducto = (e) => {
        e.preventDefault()
        const productoNuevo = {}
        const formulario = document.querySelector('#crearProductoForm')
        productoNuevo.nombre = formulario[0].value
        productoNuevo.descripcion = formulario[1].value
        productoNuevo.img = formulario[2].value
        productoNuevo.price = formulario[3].value
        productoNuevo.stock = formulario[4].value
        setProductos(productos => [...productos, productoNuevo])        
    }

    const [UserType, setUserType] = useState('administrador');
    const value = {UserType, setUserType}

    return (
        <>
            <UserContext.Provider value={value}>
            <NavBar></NavBar>
            <div id="producto">
                <div className="container mt-3 w-75">
                    <h1 className='text-primary'>
                        Crear Nuevo Producto
                    </h1>
                    <div className='jumbotron py-3 text-primary'>
                        <form onSubmit={agregarProducto} id="crearProductoForm" className='form-floating'>
                            <div className='form-floating mb-3'>
                                <input type="text" id='username' className='form-control text-secondary font-weight-bold' name='username'
                                    placeholder="Nombre del producto..." required></input>
                                <label htmlFor="username" className="text-muted">Nombre del producto</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="text" id='descripcion' className='form-control text-secondary font-weight-bold' name='descripcion'
                                    placeholder="Descripción del producto..." required></input>
                                <label htmlFor="descripcion" className="text-muted">Descripción</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="url" id='urlImange' className='form-control text-secondary font-weight-bold' name='urlImange'
                                    placeholder="Digite su nombre..." required></input>
                                <label htmlFor="urlImange" className="text-muted">Url imagen</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="number" min='0' id='price' className='form-control text-secondary font-weight-bold' name='price'
                                    placeholder="Digite su nombre..." required></input>
                                <label htmlFor="price" className="text-muted">Precio</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="number" min='0' id='stock' className='form-control text-secondary font-weight-bold' name='stock'
                                    placeholder="Digite su nombre..." required></input>
                                <label htmlFor="stock" className="text-muted">Stock</label>
                            </div>
                            <button className="btn btn-success mt-3 text-capitalize">Agregar producto</button>
                        </form>
                    </div>
                </div>
            </div>
            </UserContext.Provider>
        </>
    );
}

export default NuevoProducto