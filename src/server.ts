import express from "express";

const cors = require('cors'); 
const app = express();
const mysql = require("mysql");
const db = mysql.createPool({
        host:"localhost",
        user:"root",
        password: "",
        database: "forencer_data",
        });


app.use(express.json());
app.use(cors());

app.post("/register", (req,res) => {
    const nome = req.body.nome;
    const email= req.body.email;
    const password = req.body.password;
    const telefone = req.body.telefone;
    const sexo = req.body.sexo;
    const cpf = req.body.cpf;
    const data_n = req.body.data_n;
    try{
        db.query("Insert into usuario(nome_usu, cpf_usu, data_nasc, email_usu, telefone, sexo, senha) values (?,?,?,?,?,?,?)",
        [nome, cpf, data_n, email, telefone, sexo, password]);    
    } catch(error){
        res.status(400).json({
            message:"Usuario cadastrado com sucesso"
        })
    }

})


app.listen(3001, ()=>{

    console.log('listen on port 3001');
    

})