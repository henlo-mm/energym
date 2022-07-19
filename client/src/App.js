import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Header";
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(( ) => {

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
     
  }, []);

    return (
        <Router>
          <div className='page-container'>
            <div className='content-wrapper'>
              <ResponsiveAppBar />
              <Routes>
                <Route path="/sign-up" exact element={<Register />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/admin" exact element={ <Dashboard />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
    );
};

export default App;
