import{useEffect, useState } from "react";
import axios from "axios";

function Task2(){
  const [stores,setStores] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/gettask2')
    .then(stores => setStores(stores.data))
    .catch(err => console.log(err))
  },[])

console.log(stores);
  return(
    <div className="body">
      <h3>Query : Store wise highest hierarchy2_id Product Sales </h3>
      <div className="table border:1">
      <table>
        <thead>
          <tr> 
            
            <th>Store ID</th>
            <th>Hierarchy2 ID</th>
            <th>Total Product sales</th>

          </tr>
          </thead>
          <tbody>
            {  

              stores.map(((store) =>(
                <tr>
                  <td>{store.store_id}</td>
                  <td>{store.highest_hierarchy2_id}</td>
                  <td>{store.total_product_sales}</td>
                </tr>
              )))
            }

          </tbody>
      </table>
      </div>

    </div>
  )

}
export default Task2;