import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Header";
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AdminBoard from './components/AdminBoard';
import SidebarLayout from './components/SidebarLayout';
import UserBoard from './components/UserBoard';
import AuthUser from "./services/auth.service";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventBus from "./common/EventBus";
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const isLoggedIn = localStorage.getItem("token");
    return (
        <Router>
          <ToastContainer />
          <div className='page-container'>
            <div className='content-wrapper'>
              <Routes>
                <Route path="/" element={<SidebarLayout/>}>
                  <Route path="/sign-up" element={<Register />} />
                  <Route path="/login" element={<Login />} /> 
                </Route>
                <Route path="/admin" element={
                    <ProtectedRoute >
                      <AdminBoard />
                    </ProtectedRoute>
                  }
                 />
                <Route path="/user" element={
                   <ProtectedRoute >
                     <UserBoard/>
                    
                   </ProtectedRoute>
                  } 
                />                 
              </Routes>
            </div>       
          </div>
        </Router>
    );
};

export default App;
