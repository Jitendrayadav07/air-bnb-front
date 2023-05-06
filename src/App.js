import React from 'react';
import {Route,Routes} from "react-router-dom"
import IndexPage from './Component/page/IndexPage.jsx'
import LoginPage from './Component/page/LoginPage.jsx'
import RegisterPage from './Component/page/RegisterPage.jsx'
import Layout from './Component/Layout.jsx'
import axios from "axios";

axios.defaults.baseURL ='http://localhost:4000';
axios.default.withCredentials = true;
  
const App = () =>{
  return ( 
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<IndexPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Route>
    </Routes>
  )
}  

export default App;