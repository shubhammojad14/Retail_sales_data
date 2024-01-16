import React from "react";
import {Link} from "react-router-dom";


function Homepage() {
  return (
    <div>
        <h2>Homepage</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/task1">Task1</Link></li>
          <li><Link to="/task2">Task2</Link></li>
          <li><Link to="/task3">Task3</Link></li>
        </ul>
      </nav>

    </div>
  )
};

export default Homepage;