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

app.post("https://localhost:3001/register", (req,res) => {
    const nome = req.body.nome;
    const email= req.body.email;
    const password = req.body.password;
    const telefone = req.body.telefone;
    const sexo = req.body.sexo;
    const cpf = req.body.cpf;
    const data_n = req.body.data_n;

    db.query("Select * from usuario where email_usu = ?", [email], (err:any, result:any) => {
        if(err){
            res.send(err);
        } if(result.lenght == 0){
            db.query("Insert into usuario(nome_usu, cpf_usu, data_nasc, email_usu, telefone, sexo, senha) values (?,?,?,?,?,?,?)",{nome, cpf, data_n, email, telefone, sexo, password})
        }
        res.send(result)
    })
})



app.get('/', (req,res)=>{
    //db.query("Insert into usuario(nome_usu, cpf_usu, data_nasc, email_usu, telefone, sexo, senha) values ('Bernardo Santos da silva','123.008.389-82','2005-08-08','Bernardosilva698@gmail.com','(48)99852-9084', 'M','bernardo123456789')"),(err, result) => {
    //    if(err){
    //        console.log(err);
    //    }
    console.log("oi");
    //};


})

app.listen(3001, ()=>{

    console.log('listen on port 3001');
    

})