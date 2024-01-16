import React from 'react';
import"./App.css";
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";

import Homepage from './homepage.js';
import Task1 from './Task1.js';
import Task2 from './Task2.js';
import Task3 from './Task3.js';

function App(){


  return(
   
    <Router>
       <Homepage/>
       <Routes>
      <Route exact path="/" element={<Homepage/>} ></Route>
       <Route exact path="/task1" element={<Task1/>} ></Route>
       <Route exact path="/task2" element={<Task2/>} ></Route>
       <Route exact path="/task3" element={<Task3/>} ></Route>
       </Routes>

    </Router>
   

   )

}
export default App;