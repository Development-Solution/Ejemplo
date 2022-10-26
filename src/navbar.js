const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark rounded mb-3 w-75 mx-auto px-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Supermercado</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="lista-productos">Lista de productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="nuevo-producto">Nuevo producto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="lista-ventas">Lista de ventas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar