const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: '172.19.0.2',
  port: "3307",
  user: 'root',
  password: 'himanshi',
  database: 'cloud',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/api/students', (req, res) => {
  const { productname, name, productprice } = req.body;
  
  const sql = 'INSERT INTO interior(productname, name, productprice) VALUES (?, ?, ?)';
  connection.query(sql, [productname, name, productprice], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('cloud data inserted successfully');
    res.json({ success: true, message: 'cloud data inserted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});