const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const mysql = require('mysql')
const StoreModel = require('./models/store_cities')
const SaleModel = require('./models/sales')
const ProductHModel = require('./models/product_heirarchy')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/sales_data")

const db = mysql.createConnection({
  host :"localhost",
  user : "root",
  password : "Shubham@14",
  database :"sales_data"

})

/*  task 1  */

/* Query : querySELECT
    s.store_id,
    m.month,
    SUM(sales.sales) AS monthly_sales_sum
FROM
    (SELECT DISTINCT store_id FROM sales) s
CROSS JOIN
    (SELECT DISTINCT LEFT(date, 7) AS month FROM sales) m
LEFT JOIN
    sales ON s.store_id = sales.store_id AND LEFT(sales.date, 7) = m.month
GROUP BY
    s.store_id,
    m.month
ORDER BY
    s.store_id,
    m.month;  */


app.get('/gettask1',(req, res) => {
  const sql = "SELECT   s.store_id,   m.month, SUM(sales.sales) AS monthly_sales_sum FROM (SELECT DISTINCT store_id FROM sales) s CROSS JOIN   (SELECT DISTINCT LEFT(date, 7) AS month FROM sales) m LEFT JOIN   sales ON s.store_id = sales.store_id AND LEFT(sales.date, 7) = m.month GROUP BY   s.store_id,   m.month ORDER BY   s.store_id,   m.month;"
  db.query(sql, (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})

/*  task 2  */
/*  Query :
SELECT
    sales.store_id,
    MAX(product_hierarchy.hierarchy2_id) AS highest_hierarchy2_id,
    SUM(sales.sales) AS total_product_sales
FROM
    sales
JOIN
    store_cities ON sales.store_id = store_cities.store_id
JOIN
    product_hierarchy ON sales.product_id = product_hierarchy.product_id
GROUP BY
    sales.store_id
ORDER BY
    sales.store_id;  */




    app.get('/gettask2',(req, res) => {
        const sql = "SELECT sales.store_id, MAX(product_hierarchy.hierarchy2_id) AS highest_hierarchy2_id, SUM(sales.sales) AS total_product_sales FROM sales JOIN store_cities ON sales.store_id = store_cities.store_id JOIN product_hierarchy ON sales.product_id = product_hierarchy.product_id GROUP BY sales.store_id ORDER BY sales.store_id; "
      db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
      })
    })
    


/* task 3 */

/* Query : 

SELECT
    sales.product_id,
    sales.store_id,
    product_hierarchy.hierarchy1_id,
    product_hierarchy.hierarchy2_id,
    product_hierarchy.hierarchy3_id,
    product_hierarchy.hierarchy4_id,
    product_hierarchy.hierarchy5_id,
    COUNT(sales.product_id) AS product_count
FROM
    sales 
JOIN
    product_hierarchy  ON sales.product_id = product_hierarchy.product_id
GROUP BY
    sales.store_id,
    product_hierarchy.hierarchy1_id,
    product_hierarchy.hierarchy2_id,
    product_hierarchy.hierarchy3_id,
    product_hierarchy.hierarchy4_id,
    product_hierarchy.hierarchy5_id
ORDER BY
    sales.store_id,
    product_hierarchy.hierarchy1_id,
    product_hierarchy.hierarchy2_id,
    product_hierarchy.hierarchy3_id,
    product_hierarchy.hierarchy4_id,
    product_hierarchy.hierarchy5_id;

    */

    


app.get('/gettask3',(req, res) => {
  const sql = " SELECT sales.product_id, sales.store_id, product_hierarchy.hierarchy1_id, product_hierarchy.hierarchy2_id,product_hierarchy.hierarchy3_id,product_hierarchy.hierarchy4_id, product_hierarchy.hierarchy5_id,  COUNT(sales.product_id) AS product_count  FROM  sales   JOIN   product_hierarchy  ON sales.product_id = product_hierarchy.product_id   GROUP BY   sales.store_id,   product_hierarchy.hierarchy1_id,   product_hierarchy.hierarchy2_id,   product_hierarchy.hierarchy3_id,   product_hierarchy.hierarchy4_id,   product_hierarchy. hierarchy5_id   ORDER BY   sales.store_id,   product_hierarchy.hierarchy1_id,   product_hierarchy.hierarchy2_id,   product_hierarchy.hierarchy3_id,   product_hierarchy.hierarchy4_id,   product_hierarchy.hierarchy5_id;   "
  db.query(sql, (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})




/*app.get('/getstore',(req,res) => {
    StoreModel.find().sort({city_id: 1})
    .then(stores => res.json(stores))
    .catch(err => res.json(err))
})

*/

app.listen(3001, () =>{
    console.log('server is runing');
})