import React, { useEffect, useState } from "react";
import Image from "../img/casa.jpg";
import Logo from "../img/netiimoveis.png";
import GoogleSvg from "../img/icons8-google.svg"
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import CreateLogin from "./CreateLogin";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="container">
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt=""/>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" width={60} />
          </div>
          <div className="login-center">
            <h2>Bem vindo!</h2>
            <p>Login</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    lembre por 30 dias
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In com Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            ainda não tem uma conta? <a href="./CreateLogin">Inscreva-se</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;



















// import { useEffect, useState } from "react";
// import React from "react";

// import CreateLogin from "./CreateLogin";
// import LinkButton from "./LinkButton";


// const Login = ({btnText}) => {

//     const [ login, setlogin] = useState([])
   
//    useEffect(() => {
//     fetch('http://localhost:5001/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//     },
//     })
//     .then((resp) => resp.json())
//     .then((data) => {
//         setlogin(data)
//     })
//     .catch((err) => console.log(err))
//    }, [])

//   return (
//     <>
//       <section>
//         <div className="auth">
//           <h1>Login</h1>
//           <form action="">
//             <input
//               type="text"
//               name="username"
//               id="username"
//               autoComplete="off"
//               placeholder="Username"
//               required={true}
//             />
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               required={true}
//             />
//             <p>Forgot Password?</p>
//             <button type="submit">Login</button>
//           </form>
//           <p>Ainda não possui cadastro?
//           <LinkButton className="login-message" to="/createlogin"  text="Sign up" />
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;