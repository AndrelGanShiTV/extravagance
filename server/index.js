const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'taller'
});


app.post("/Registrar", (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    db.query('INSERT INTO tblusuario (usuario, contrasena) VALUES (?,?)',[userName, password],
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("User Created")
        }
    }
    
    );
});
app.listen(3002,()=> {
    console.log("Corriendo en el puerto 3002")
});