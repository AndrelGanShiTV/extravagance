const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'extravagance',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlSelect = `SELECT * FROM usuario`
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post('/api/insert', (req, res) => {
    const correo = req.body.correo;
    const pass = req.body.pass;

    const sqlInsert = `INSERT INTO usuario (correo, contraseña) VALUES (?,?);`
    db.query(sqlInsert, [correo, pass], (err, result) => {
        console.log(err)
    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});