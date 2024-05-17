import { useEffect, useState } from "react";
import React from "react";
import Login from '../components/Login';
import Form1 from "./Form1";
import barra from '../img/Formulario.png';

function Home() {
    return (
        <div className="home">
            <div className="form-container">
            <div className="login-logo_topo">
            <img src={barra} alt="" width={815} height={215} />
            </div>
            </div>
            <div>
            <Form1 />          
            </div>
        </div>
    )
}

export default Home;