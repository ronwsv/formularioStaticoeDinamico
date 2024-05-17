import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import FiadorForm from './pages/FiadorForm';
import LocatarioForm from './pages/LocatarioForm';
import Form1 from './pages/Form1';
import Login from './components/Login';
import CreateLogin from './components/CreateLogin';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import './App.css';
import styles from './pages/Form1.module.css';



// function PageA() {
//   return (
//     <h1>I'm page A</h1>
//   )
// }

// function PageB() {
//   return (
//     <h1>I'm page B</h1>
//   )
// }

// function Layout () {
 
//   const navigate = useNavigate();


//   const handleNavigateToC = () => {
//     navigate('/c');
//   };

//   const handleNavigateToB = () => {
//     navigate('/b');
//   };

//   const handleNavigateToC = () => {
//     navigate('/c');
//   };

  // return (
  //   <div>
  //     <p>Seja bem vindo!</p>
  //     <p>Você está blabla</p>
  //     <ul>
  //       <li>Menu 1</li>
  //       <li>Menu 2</li>
  //     </ul>

  //     <Outlet />

  //     <button className="ButtomApp" onClick={handleNavigateToA}>Go to Page A</button>
  //     <button className="ButtomApp" onClick={handleNavigateToB}>Go to Page B</button>
  //     <button className="ButtomApp" onClick={handleNavigateToC}>Go to Page C</button>
      
  //     <footer>Copy... 2024 May 06</footer>


  //   </div>
   
  // );
// }



function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home  /> } >
              {/* <Route path="/c" element={<CreateLogin />}/>
              <Route path="/form1" element={<Form1 />}/>

              <Route path="/locatarioform" element={<LocatarioForm />}/>

              <Route path="/fiadorform" element={<FiadorForm />} /> */}
          
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
