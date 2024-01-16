import{useEffect, useState } from "react";
import axios from "axios";

function Task3(){
  const [stores,setStores] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/gettask3')
    .then(stores => setStores(stores.data))
    .catch(err => console.log(err))
  },[])


  return(
    <div className="body">
      <h3>Query : Store-Hierarchy matrix with counts of products sold with Stores in rows and Hierarchy on columns</h3>
      <div className="table border:1">
      <table>
        <thead>
          <tr> 
            
            <th>Product ID</th>
            <th>Store ID</th>
            <th>Hierarchy1 ID</th>
            <th>Hierarchy2 ID</th>
            <th>Hierarchy3 ID</th>
            <th>Hierarchy4 ID</th>
            <th>Hierarchy5 ID</th>
            <th>Product Count</th>

          </tr>
          </thead>
          <tbody>
            {  

              stores.map(((store) =>(
                <tr>
                  <td>{store.product_id}</td>
                  <td>{store.store_id}</td>
                  <td>{store.hierarchy1_id}</td>
                  <td>{store.hierarchy2_id}</td>
                  <td>{store.hierarchy3_id}</td>
                  <td>{store.hierarchy4_id}</td>
                  <td>{store.hierarchy5_id}</td>
                  <td>{store.product_count}</td>
                </tr>
              )))
            }

          </tbody>
      </table>
      </div>

    </div>
  )

}
export default Task3;