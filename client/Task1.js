import{useEffect, useState } from "react";
import axios from "axios";
import "./task1.css";

function Task1(){
  const [sales,setSales] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/gettask1')
    .then(sales => setSales(sales.data))
    .catch(err => console.log(err))
  },[])
  console.log(sales);

  


  return(
    
      <div className="body">
      <h3 className="title">Query : Store level Monthly Sales Sum where Stores are in the rows and Months on the columns</h3>
      <div className="table border:1">
      <table >
        <thead>
          <tr > 
            <th>store_id</th>
            <th>month</th>
            <th>monthly_sales_sum</th>
          </tr>
          </thead>
          <tbody>
            {  

              sales.map(((sale) =>(
                <tr>
                  <td>{sale.store_id}</td>
                  <td>{sale.month+'7'}</td>
                  <td>{sale.monthly_sales_sum}</td>
                </tr>
              )))
            }

          </tbody>
      </table>
      </div>

    </div>
    
  )

}
export default Task1;