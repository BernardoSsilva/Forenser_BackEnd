import express from "express";
import cors from "cors";
import md5 from "md5";
import jwt from "jsonwebtoken";
import { db } from "./controllers/db";


const secret = 'forenserSecurity';


const dateFormatter = new Intl.DateTimeFormat("fr-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});


function verifyJwt(req:any, res:any, next:any){
  const token = req.headers['x-access-token'];
  jwt.verify(token, secret, (err:any, decoded:any) =>{
    if(err){
      return res.status(401).end();
    } else{
      req.userEmail = decoded.email;
      next();
    }
  })
}

const app = express();

app.use(cors());
app.use(express.json());

// Função para criar um token JWT
function createJWTToken(email:any) {
  return jwt.sign({ email }, secret, { expiresIn: "1h" });
}

app.post("/registerP", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = md5(req.body.senha);
  const telefone = req.body.telefone;
  const sexo = req.body.sexo;
  const cpf = req.body.cpf;
  const data_n = req.body.data_n;

  try {
    db.query("SELECT * FROM usuario WHERE email_usu = ?", [email], (err, result) => {
      if (err) {
        console.error("Ocorreu um erro inesperado");
      } else {
        if (result.length > 0) {
          console.log(result);
        } else {
          db.query(
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

          // Crie um token JWT e envie-o como resposta
          const token = createJWTToken(email);
          res.status(200).json({ token });
        }
      }
    });
  } catch (error) {
    console.error("error", error);
    res.status(400).json({
      message: "Usuario cadastrado com sucesso",
    });
  }
});

// Realizar login e criar um token JWT
app.post("/loginP", (req, res) => {
  const email = req.body.email;
  const senha = md5(req.body.senha);

  try {
    db.query("SELECT * FROM usuario WHERE email_usu = ? AND senha = ?", [email, senha], (err, result) => {
      if (err) {
        console.error("Ocorreu um erro inesperado");
      } else {
        if (result.length > 0) {

            // Obtenha o nome do usuário a partir do resultado do banco de dados
            const nomeUsuario = result[0].nome_usu;
            const idUsu = result[0].id_usu;
            const telefoneUsuario = result[0].telefone;
            const sexoUsuario = result[0].sexo;
            const cpfUsuario = result[0].cpf;

            // Crie o payload do token com o nome do usuário
            const payload = {
              id: idUsu,
              email: email,
              nome: nomeUsuario,
              telefone: telefoneUsuario,
              sexo: sexoUsuario,
              cpf: cpfUsuario
            };

          console.log("conectado");
          const token  = jwt.sign(payload, secret, { expiresIn: 3600 });
          res.status(200).json({ token });
        } else {
          console.log("usuario ou senha invalidos");
          res.status(401).json({ message: "Usuário ou senha inválidos" });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});


// boletins de ocorrencia

app.post("/registrarAcidente/:id", (req,res) =>{
  const cod_usuario = req.params.id;
  const tipo = "acidente";
  const data_fato = dateFormatter.format(new Date(req.body.data_fato));
  const horario = req.body.horario;
  const tipo_local = req.body.tipo_local;
  const endereco = req.body.endereco;
  const comunicante = req.body.comunicante;
  const relato_fato = req.body.relato_fato;
  const motorista = req.body.motorista
  const veiculos = req.body.veiculos

  try {
    db.query(
      "INSERT INTO boletins_unificados SET ?",
      {
        motorista,
        veiculos,
        cod_usuario,
        tipo,
        data_fato,
        horario,
        tipo_local,
        endereco,
        comunicante,
        relato_fato,
      },
      function (error, results, fields) {
        console.log(error, results, fields);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})



app.post("/registrarRoubo/:id", (req,res) =>{
  const cod_usuario = req.params.id;
  const tipo = "roubo";
  const data_fato = dateFormatter.format(new Date(req.body.data_fato));
  const horario = req.body.horario;
  const tipo_local = req.body.tipo_local;
  const endereco = req.body.endereco;
  const comunicante = req.body.comunicante;
  const objetos = req.body.objetos;
  const violencia= req.body.violencia;
  const subtracao= req.body.subtracao;
  const vitima = req.body.vitima
  const relato_fato = req.body.relato_fato;
  

  try {
    db.query(
      "INSERT INTO boletins_unificados SET ?",
      {
        objetos,
        violencia,
        subtracao,
        vitima,
        cod_usuario,
        tipo,
        data_fato,
        horario,
        tipo_local,
        endereco,
        comunicante,
        relato_fato,
      },
      function (error, results, fields) {
        console.log(error, results, fields);

        if (error) throw error;

        // Crie um token JWT e envie-o como resposta
        const token = createJWTToken(cod_usuario);
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})

app.post("/registrarViolenciaD/:id", (req,res) =>{
  const cod_usuario = req.params.id;
  const tipo = "violencia_domestica";
  const data_fato = dateFormatter.format(new Date(req.body.data_fato));
  const horario = req.body.horario;
  const tipo_local = req.body.tipo_local;
  const endereco = req.body.endereco;
  const comunicante = req.body.comunicante;
  const relato_fato = req.body.relato_fato;
  const vitima = req.body.vitima;
  const violencia = req.body.violencia;

  try {
    db.query(
      "INSERT INTO boletins_unificados SET ?",
      {
        violencia,
        vitima,
        cod_usuario,
        tipo,
        data_fato,
        horario,
        tipo_local,
        endereco,
        comunicante,
        relato_fato,
      },
      function (error, results, fields) {
        console.log(error, results, fields);

        if (error) throw error;

        // Crie um token JWT e envie-o como resposta
        const token = createJWTToken(cod_usuario);
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})



app.get('/LogedHomePage', verifyJwt, (req, res) =>{
  console.log(req.body.userEmail + ' fez esta chamada');
  res.status(200).json({ funciona:true });
})

app.listen(3001, () => {
  console.log("Listen on port 3001");
});

app.delete('/exclude_porfile/:email',(req, res) => {
  const email = req.params.email;
  db.query("DELETE FROM usuario WHERE email_usu = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Erro ao excluir o perfil.' });
    } else {
      console.log(result);
      res.status(200).json({ message: 'Perfil excluído com sucesso.' });
    }
  });
});

// to do


app.put("/editValues/:id", (req, res) =>{
  
  const id = req.params.id
  const email = req.body.emailField;
  const telefone = req.body.telefoneField;

  console.log(email, telefone)
  db.query("UPDATE usuario SET email_usu = ?, telefone = ? WHERE id_usu = ?",[email,telefone, id],(err, result) => {
    if(err){
      console.log(err)
    }else{
      console.log(result)
    }
  })
})

app.post('/salvaFace/:userId', async (req, res) => {
  try {
    const { imageUrl, description, boletimId } = req.body;

    // Insira as informações da face no banco de dados
    const insertFaceQuery = `
      INSERT INTO face (imagem, descricao)
      VALUES (?, ?)
    `;
    const insertFaceValues = [imageUrl, description];

    db.query(insertFaceQuery, insertFaceValues, (insertError, insertResults) => {
      if (insertError) {
        console.error('Erro ao inserir informações da face: ' + insertError.stack);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      // Atualize a tabela de boletins de ocorrência com o ID da imagem
      let updateBoletimQuery =`UPDATE boletins_unificados SET cod_face = ? WHERE id_fato = ?`
      const updateBoletimValues = [insertResults.insertId, boletimId];

      db.query(updateBoletimQuery, updateBoletimValues, (updateError) => {
        if (updateError) {
          console.error('Erro ao atualizar boletim com ID da face: ' + updateError.stack);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        // Envie uma resposta de sucesso
        res.status(200).json({ success: true, message: 'Informações salvas com sucesso.' });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao salvar informações.' });
  }
});

// app.post("/registrarIncidente/:id", (req, res) => {
//   const cod_usuario = req.params.id;
//   const tipo_boletim = req.body.tipo_boletim;
//   const data_fato = dateFormatter.format(new Date(req.body.data_fato));
//   const horario = req.body.horario;
//   const tipo_local = req.body.tipo_local;
//   const endereco = req.body.endereco;
//   const comunicante = req.body.comunicante;
//   const relato_fato = req.body.relato_fato;

//   try {
//     db.query(
//       "INSERT INTO boletins_unificados SET ?",
//       {
//         cod_usuario,
//         tipo_boletim,
//         data_fato,
//         horario,
//         tipo_local,
//         endereco,
//         comunicante,
//         relato_fato,
//       },
//       function (error, results, fields) {
//         console.log(error, results, fields);

//         if (error) throw error;

//         // Crie um token JWT e envie-o como resposta
//         const token = createJWTToken(cod_usuario);
//         res.status(200).json({ token });
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Erro interno do servidor' });
//   }
// });

app.get('/:id', (req, res) => {
  const codUsuario = req.params.id;

  const query = `
    SELECT id_fato, tipo, data_fato, horario, tipo_local, endereco, comunicante, relato_fato
    FROM boletins_unificados
    WHERE cod_usuario = ${codUsuario}
  `;
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta: ' + error.stack);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    res.json(results);
  });
});
