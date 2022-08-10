import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Header";
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import SidebarLayout from './components/SidebarLayout';
import UserBoard from './components/UserBoard';
import AuthUser from "./services/auth.service";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventBus from "./common/EventBus";
import ProtectedRoute from './components/ProtectedRoute';
import ListUser from './components/ListUser';
import SidebarAdmin from './components/SidebarAdmin';
import UserList from './components/UserList';
import Admin from './components/Admin';
import Home from './components/Home';


function App() {

    return (
        <Router>
          <ToastContainer />
          <div className='page-container'>
            <div className='content-wrapper'>
              <Routes>
                <Route path="/" element={<SidebarLayout/>}>
                  <Route path="/sign-up" element={<Register />} />
                  <Route path="/login" element={<Login />} /> 
                  <Route index={true} element={ <Home /> } />
                </Route>
                             
              </Routes>
            </div>       
          </div>
          <Routes>
              
          <Route path="/admin" element={
            <ProtectedRoute>
              <SidebarAdmin />
            </ProtectedRoute>
          }>
          
          <Route path="user/list" element={  
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
            } 
          >
          </Route>
          <Route index={true} element={  
              <Admin />
            } 
          >
          </Route>
        
       </Route>
       
        <Route path="/user" element={
           <ProtectedRoute >
             <UserBoard/>
           </ProtectedRoute>
          } 
        />  
          
          </Routes>
        </Router>
    );
};

export default App;
