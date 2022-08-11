import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import SidebarLayout from './components/SidebarLayout';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import SidebarAdmin from './components/SidebarAdmin';
import UserList from './components/UserList';
import Admin from './components/Admin';
import Home from './components/Home';
import Set from './components/Set';
import SetUser from './components/SetUser';
import UserContent from './components/UserContent';
import SidebarUser from './components/SidebarUser';


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
                <Route path="/admin" element={
                    <ProtectedRoute>
                      <SidebarAdmin />
                    </ProtectedRoute>
                  }
                >
              
                  <Route path="user/list" element={  
                    <ProtectedRoute>
                      <UserList />
                    </ProtectedRoute>
                    } 
                  >
                  </Route>
                  <Route path="set/list" element={  
                    <ProtectedRoute>
                      <Set />
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
                    <SidebarUser />
                  </ProtectedRoute>
                  } 
                > 
                  <Route path="set/list" element={  
                    <ProtectedRoute>
                      <SetUser />
                    </ProtectedRoute>
                    } 
                  >
                  </Route>
                  <Route index={true} element={  
                    <UserContent />
                  } 
                  >
                  </Route>
                </Route>
              </Routes>
            </div>       
          </div>
        </Router>
    );
};

export default App;
