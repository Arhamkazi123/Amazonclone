import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Deals from "./pages/Deals";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage";
import { useState } from "react";
import { SingleProductContext } from "./Contexts/SingleProductContext";
import { userContext } from "./Contexts/UserContext";
import RegisterPage from './pages/RegisterPage'
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";



function App() {

  const [product,setProduct] = useState([])
  const [user,setUser] = useState({})
 
  


  return (
    <div className="App">
      <Router>

      <userContext.Provider value={{user,setUser}}>
     
          <Routes>
         <Route exact path="/" element={<Home/>} />
        </Routes>

        <SingleProductContext.Provider value={{setProduct,product}}>
        <Routes>
         <Route  path="/deals" element={<Deals/>} />
        </Routes>
       

        <Routes>
        <Route  path={`/deals/:id`} element={<SingleProductPage/>} />
        </Routes>
        </SingleProductContext.Provider>


        <Routes>
         <Route  path="/register" element={<RegisterPage/>} />
        </Routes>

        <Routes>
         <Route  path="/login" element={<LoginPage/>} />
        </Routes>

        <Routes>
         <Route  path="/cart" element={<Cart/>} />
        </Routes>

        

        </userContext.Provider>

      </Router>
    </div>
  );
}

export default App;
