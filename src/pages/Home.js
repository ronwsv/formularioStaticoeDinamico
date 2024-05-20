import { useEffect, useState } from "react";
import React from "react";
import Login from '../components/Login';
import Form1 from "./Form1";
import barra from '../img/Formulario.png';
import LocatarioForm from "./LocatarioForm";
import FiadorForm from "./FiadorForm";

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
            <LocatarioForm />
            <FiadorForm />         
            </div>
        </div>
    )
}

export default Home;