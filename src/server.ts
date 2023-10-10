import express from "express";
import cors from "cors";
import { createConnection } from "mysql";
import md5 from "md5";

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forencer_data",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("data_base connectd");
  }
});

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = md5(req.body.senha);
  const telefone = req.body.telefone;
  const sexo = req.body.sexo;
  const cpf = req.body.cpf;
  const data_n = req.body.data_n;

  try {
    connection.query("select * from usuario where email_usu = ?",[email], (err, res)=>{
      if(err){
        console.error("Ocorreu um erro inesperado")
        }else{
          if(res.length > 0){
            console.log(res)
          } else {
          const dateFormatter = new Intl.DateTimeFormat("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
      
          connection.query(
            "INSERT INTO usuario SET ?",
            {
              nome_usu: nome,
              cpf_usu: cpf,
              data_nasc: dateFormatter.format(new Date(data_n)),
              email_usu: email,
              senha,
              telefone,
              sexo,
            },
            function (error, results, fields) {
              console.log(error, results, fields);
      
              if (error) throw error;
              console.log(results.insertId);
            }
          );
          }
        }
        
      //} else {
      //  console.log("Usuario ja existente");
      //}
    })
    
    console.log("after query");
    return res.status(200).json({
      error: "teste",
    });
   
  } catch (error) {
    console.error("error", error);
    res.status(400).json({
      message: "Usuario cadastrado com sucesso",
    });
  }
});


// realizar login

app.post("/login", (req, response) =>{
  const email = req.body.email;
  const senha = md5(req.body.senha);

  try{
    connection.query("select * from usuario where email_usu = ? and senha = ?",[email, senha], (err, res)=>{
      if(err){
        console.error("Ocorreu um erro inesperado")
        }else{
          if(res.length > 0){
            console.log("conectado")
            response.redirect("/home")
          } else {
            console.log("usuario ou senha invalidos")
          }
        }
      });
  }catch(error){
    console.log(error)
  }
});

app.listen(3001, () => {
  console.log("listen on port 3001");
});