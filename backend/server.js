const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();
require('dotenv').config();
app.use(cors);
app.listen(8080, () => {
    console.log("Listening on port 8080");
});

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'sys'
});

db.connect((err) => {
    if (err) throw err; 
    console.log("Connected to localhost");
});


