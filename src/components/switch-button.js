import React, { useContext } from "react";
import UserContext from "./user-context";


export const SwitchToClient = () => {
    const { UserType, setUserType } = useContext(UserContext);
    return (
        <button className="btn btn-default" onClick={() => setUserType('cliente')}>
            <figure>
                <img src="customer.png" className="img-fluid rounded" alt="soy_cliente"/>
                <figcaption className="figure-caption text-center fw-bolder">Soy cliente</figcaption>
            </figure>
        </button>
    );
};

export const SwitchToAdmin = () => {
        const { UserType, setUserType } = useContext(UserContext);
        return (
            <button className="btn btn-default" onClick={() => setUserType('administrador')} href="/">
                <figure>
                    <img src="blogger.png" className="img-fluid rounded" alt="soy_administrador"/>
                    <figcaption className="figure-caption text-center fw-bolder">Soy administrador</figcaption>
                </figure>
            </button>
        );
};