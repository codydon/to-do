import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';

export const DataContext = React.createContext({});

const App = () => {
  const [data, setData] = useState([]);
  const [darkM, setDarkM] = useState(false);
  const [color, setColor] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const storedTasks = JSON.parse(localStorage.getItem("todos")) || [];
    setData(storedTasks)
  }

  //dark mode toggle
  useEffect(() => {
    function theme() {
      if (darkM) {

        return {
          backgroundColor: "black",
          color: "white"
        }
      } else {
        return {
          backgroundColor: "white",
          color: "black"
        }
      }
    }
    setColor(theme)
  }, [darkM])

  return (
    <DataContext.Provider value={{ setData, data, loadData,  setDarkM, darkM}} >
      <Router>
        <div style={color} className="flex justify-center flex-col min-h-screen">
          <Home />
        </div>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
