import express from "express";

const app = express();
const mysql = require("mysql");
const db = mysql.createPool({
        host:"localhost",
        user:"root",
        password: "",
        database: "forencer_data",
        })


app.get('/', (req,res)=>{
    db.query("Insert into usuario(nome_usu, cpf_usu, data_nasc, email_usu, telefone, sexo, senha) values ('Bernardo Santos da silva','123.008.389-82','2005-08-08','Bernardosilva698@gmail.com','(48)99852-9084', 'M','bernardo1227')"),(err, result) => {
        if(err){
            console.log(err);
        }
    };


})

app.listen(3001, ()=>{

    console.log('listen on port 3001');
    

})