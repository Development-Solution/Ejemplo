let id = 0
const ListaProductos = ({ productos = [] }) => {
    return (
        <>
            <div className="container mt-3 w-75">
                {productos?.length > 0 && 
                    <h1 className="alert alert-success">Lista de productos</h1>                  
                }
                <div className='jumbotron py-3 text-secondary d-flex flex-wrap'>
                    {productos?.map(element => (
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
                {!productos?.length && 
                    <div className="alert alert-warning text-center">
                        <h1>No hay productos para mostrar!</h1>
                    </div>
                }
            </div>
        </>
    );
}

export default ListaProductos