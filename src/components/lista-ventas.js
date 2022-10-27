import { ItemsVendidos } from "./lista-items_vendidos"
import "./lista-ventas.css"

const ListaVentas = () => {
    return (
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
    )
};

export default ListaVentas