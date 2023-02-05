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
          backgroundColor: "#2e3436",
          color: "black"
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
    <DataContext.Provider value={{ setData, data, loadData, setDarkM, darkM }} >
      <Router>
        <div style={color} className="min-h-screen md:pt-20">
          <div className='lg:w-2/3 mx-auto items-center'>
            <Home className="flex justify-center flex-col " />
          </div>
        </div>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
