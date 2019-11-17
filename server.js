require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.EXPRESS_PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

connection.connect();

app.get('/api/customers', (req, res) => {
  connection.query('SELECT * FROM customer', (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
