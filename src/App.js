import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/login/home";
import Login from "./pages/login/login";
import Insert from "./pages/insert/insert";

import Det from "./pages/details/det";
import { createContext, useEffect, useState } from "react";

import Mycart from "./pages/cart/mycart";
import News2 from "./pages/home/news2";
import Form from "./pages/sign up/form";
import Insert2 from "./pages/insert/insert2";
import Nav from "./component/nav";

export const loginpro = createContext();
function App() {
  const [token, setToken] = useState(null);

  let t = sessionStorage.getItem("token");
  return (
    <div className="container">
      <loginpro.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <div className="nav">
            <Nav></Nav>
          </div>

          <div className="main">
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/insert" element={t ? <Insert /> : <Home />}></Route>
              <Route path="form" element={<Form />}></Route>
              <Route path="/det/:id" element={<Det />}></Route>

              <Route path="/" element={<News2></News2>}></Route>
              <Route path="insert2" element={<Insert2 />}></Route>
              <Route path="/mycart" element={<Mycart />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </loginpro.Provider>
    </div>
  );
}

export default App;
