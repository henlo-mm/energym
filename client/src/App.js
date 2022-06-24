import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Header";
import Login from './components/Login';

function App() {

  const [data, setData] = React.useState(null);

 /*  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); */
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
          <Routes>
            <Route path="/login" exact element={<Login />} />

          </Routes>
      </Router>

    </div>
  );
}

export default App;
