import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Routing/Signup";
import Home from "./Routing/Home";
import Login from "./Routing/Login";
import Navigate from "./Routing/Navigate";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Login/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="Signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;