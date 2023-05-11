import React from 'react';
import {Route,Routes} from "react-router-dom"
import IndexPage from './Component/page/IndexPage'
import LoginPage from './Component/page/LoginPage'
import RegisterPage from './Component/page/RegisterPage'
import Layout from './Component/Layout'
import axios from "axios";
import {UserContextProvider} from './Component/page/UserContext'

axios.defaults.baseURL ='http://localhost:4000';
axios.default.withCredentials = true;
   
const App = () =>{
  return ( 
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}  

export default App;