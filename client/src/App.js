import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Header";
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(( ) => {

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
     
  }, []);

    return (
        <Router>
          <ResponsiveAppBar />
            <Routes>
              <Route path="/sign-up" exact element={<Register />} />
              <Route path="/login" exact element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
