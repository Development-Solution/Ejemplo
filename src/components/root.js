import React, { useState } from "react";
import "./estilos.css"

import UserContext from "./user-context";
import { SwitchToAdmin,  SwitchToClient } from "./switch-button";

import NavBar from './navbar'

const Root = () => {

    const [UserType, setUserType] = useState('cliente');
    const value = {UserType, setUserType}

    return (
            <UserContext.Provider value={value}>
            <NavBar></NavBar>
            <div className="container d-flex justify-content-around">
                <div className="row w-25 d-flex">
                    <div className="col">
                        <SwitchToClient/>
                    </div>
                    <div className="col">
                        <SwitchToAdmin/>
                    </div>
                </div>
            </div>
            </UserContext.Provider>
    );
}

export default Root;