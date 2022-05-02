import React from "react";
import Home from "./view/Home";
import Menu from './view/Menu';
import Customers from './view/Customers';
import Order from './view/Order';
import Info from './view/Info';
import MenuList from './component/MenuList';
import { Routes, Route} from "react-router-dom";
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute'
import AllUserList from './component/AllUserList';

function App() {
  return (
    <div >
    
      <Routes>
      <Route  exact path="/" element={<Login/>}/>

      <Route element={<ProtectedRoute/>}>
      <Route path="/home" element={<Home/>}/>
        <Route path= "/menu"  element={<Menu/>} />
        <Route path="/menu/categories" element={<AllUserList/>}/>
        <Route path="/menu/list" element={<MenuList/>}/>
        <Route path= "/customers"  element={<Customers/>} />
        <Route path= "/order"  element={<Order/>} />
        <Route path= "/info"  element={<Info/>} />
      </Route>
      
        
      </Routes>
    </div>
  );
}

export default App;
