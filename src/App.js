import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import PageA from './pages/pageA';
import PageB from './pages/pageB';
import PageC from './pages/pageC';
import Form from './pages/Form';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import FormD from './pages/FormD';


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

function Layout () {
 
  // const navigate = useNavigate();


  // const handleNavigateToA = () => {
  //   navigate('/a');
  // };

  // const handleNavigateToB = () => {
  //   navigate('/b');
  // };

  // const handleNavigateToC = () => {
  //   navigate('/c');
  // };

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
}



function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<PageC /> } >
            {/* <Route path="/a" element={<PageA />} /> */}
            <Route path="/c" element={<PageC />}/>
            <Route path="/b" element={<PageB />} />
            
            
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
