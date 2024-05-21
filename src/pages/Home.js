import { useEffect, useState } from "react";
import React from "react";
import Login from '../components/Login';
import Form1 from "./Form1";
import barra from '../img/Formulario.png';
import LocatarioForm from "./LocatarioForm";
import FiadorForm from "./FiadorForm";
import { useForm } from "react-hook-form";
// import index from "..store/index.jsx";
// import { useFormStore } from "../store/index";



function Home() {
    // const formStore = useFormStore();
    return (
        <div className="home">
            <div className="form-container">
            <div className="login-logo_topo">
            <img src={barra} alt="" width={815} height={215} />
            </div>
            </div>
            <div>
            {/* <Form1
            value={formStore.form1.value}
            errors={formStore.form1.errors}
            onvalidate={() => {}}
            />
            <LocatarioForm
            value={formStore.form1.value}
            errors={formStore.form1.errors}
            onvalidate={() => {}}
            />
            <FiadorForm
            value={formStore.form1.value}
            errors={formStore.form1.errors}
            onvalidate={() => {}}
            />
            <Submit /> */}
            <Form1 />
            <LocatarioForm />
            <FiadorForm />         
            </div>
        </div>
    )
}

export default Home;