import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Header";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <ResponsiveAppBar />
    </div>
  );
}

export default App;
