import express from "express";
import cors from "cors";
import md5 from "md5";
import jwt from "jsonwebtoken";
import { db } from "./controllers/db";
import fs from 'fs';
import path from 'path';


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
            const cpfUsuario = result[0].cpf_usu;

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

app.delete('/exclude_porfile/:id',(req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM usuario WHERE id_usu = ?", [id], (err, result) => {
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


app.put("/editValues/:id", (req, res) => {
  const id = req.params.id;
  const email = req.body.emailField;
  const telefone = req.body.telefoneField;

  // Consulta para verificar se os valores são diferentes
  db.query("SELECT email_usu, telefone FROM usuario WHERE id_usu = ?", [id], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Erro ao consultar o banco de dados" });
    }

    if (rows.length === 1) {
      const dbEmail = rows[0].email_usu;
      const dbTelefone = rows[0].telefone;

      // Verifica se os valores são diferentes
      if (email !== dbEmail || telefone !== dbTelefone) {
        // Realiza o UPDATE somente se os valores forem diferentes
        db.query("UPDATE usuario SET email_usu = ?, telefone = ? WHERE id_usu = ?", [email, telefone, id], (updateErr, result) => {
          if (updateErr) {
            console.log(updateErr);
            return res.status(500).json({ message: "Erro ao atualizar os dados no banco de dados" });
          }
          console.log(result);
          return res.status(200).json({ message: "Alteração realizada com sucesso" });
        });
      } else {
        // Se os valores forem iguais, retorna uma mensagem informando que não houve alteração
        return res.status(200).json({ message: "Valores enviados são idênticos aos já existentes no banco de dados" });
      }
    } else {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  });
});

app.post('/salvaFace/:userId', async (req, res) => {
  try {
    const { imageUrl, description, boletimId } = req.body;

    // const imageFileName = `generated_image_${Date.now()}.png`;
    // const imageRelativePath = path.join('uploads', imageFileName);
    // const imagePath = path.join(__dirname, 'uploads', imageFileName);
    // const imageData = imageUrl.replace(/^data:image\/\w+;base64,/, '');
    // const imageBuffer = Buffer.from(imageData, 'base64');

    // fs.writeFileSync(imagePath, imageBuffer);

    const insertFaceQuery = 'INSERT INTO face (imagem, descricao) VALUES (?, ?)';
    const insertFaceValues = [imageUrl, description];

    db.query(insertFaceQuery, insertFaceValues, (insertError, insertResults) => {
      if (insertError) {
        console.error('Erro ao inserir informações da face: ' + insertError.stack);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      const updateBoletimQuery = 'UPDATE boletins_unificados SET cod_face = ? WHERE id_fato = ?';
      const updateBoletimValues = [insertResults.insertId, boletimId];
      

      db.query(updateBoletimQuery, updateBoletimValues, (updateError) => {
        if (updateError) {
          console.error('Erro ao atualizar boletim com ID da face: ' + updateError.stack);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        res.status(200).json({ success: true, message: 'Informações salvas com sucesso.' });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao salvar informações.' });
  }
});




app.get('/sesstrue/:id', (req, res) => {
  const codUsuario = req.params.id;

  const queryWithImages = `
  SELECT DISTINCT boletins_unificados.id_fato, boletins_unificados.tipo, boletins_unificados.data_fato,  boletins_unificados.horario,  boletins_unificados.tipo_local,  boletins_unificados.endereco,  boletins_unificados.comunicante,  boletins_unificados.relato_fato, face.imagem
  FROM boletins_unificados
  LEFT JOIN face ON boletins_unificados.cod_face = face.id_face
  WHERE boletins_unificados.cod_usuario = ${codUsuario}
  
  `;

  db.query(queryWithImages, (errorWithImages, resultsWithImages) => {
    if (errorWithImages) {
      console.error('Erro ao executar a consulta com imagens: ' + errorWithImages.stack);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    // const queryWithoutImages = `
    //   SELECT  boletins_unificados.id_fato,  boletins_unificados.tipo,  boletins_unificados.data_fato,  boletins_unificados.horario,  boletins_unificados.tipo_local,  boletins_unificados.endereco,  boletins_unificados.comunicante,  boletins_unificados.relato_fato
    //   FROM boletins_unificados
    //   WHERE  boletins_unificados.cod_usuario = ${codUsuario}
    //     AND boletins_unificados.cod_face IS NULL
    // `;

    // db.query(queryWithoutImages, (errorWithoutImages, resultsWithoutImages) => {
    //   if (errorWithoutImages) {
    //     console.error('Erro ao executar a consulta sem imagens: ' + errorWithoutImages.stack);
    //     return res.status(500).json({ error: 'Erro interno do servidor' });
    //   }

      // Combine os resultados das duas consultas
      const combinedResults = [...resultsWithImages];
      
      // const uniqueBoletim = combinedResults.filter(
      //   (item, index, self) => index === self.findIndex((t) => (
      //     t.id_fato === item.id_fato // Troque pelo campo de identificação apropriado
      //   ))
      // );

      // setBoletim(uniqueBoletim);
      res.json(combinedResults);
    });
  });


app.get('/:id', (req, res) => {
  const codUsuario = req.params.id;

  const query = `
    SELECT  boletins_unificados.id_fato,  boletins_unificados.tipo,  boletins_unificados.data_fato,  boletins_unificados.horario,  boletins_unificados.tipo_local,  boletins_unificados.endereco,  boletins_unificados.comunicante,  boletins_unificados.relato_fato
    FROM boletins_unificados
    WHERE  boletins_unificados.cod_usuario = ${codUsuario}
  `;
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta: ' + error.stack);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    res.json(results);
  });
});


app.post('/cadastrarDenuncia', (req,res) =>{
  const nome = req.body.nome;
  const local = req.body.local;
  const descricao_den = req.body.descricao;
  try{
    db.query('insert into denuncias set ?',
    {
      nome,
      local,
      descricao_den
    }, (err, result) =>{
      if(err){
        console.log(err)
      } else{
        console.log(result);
      res.status(200).json({ message: 'Denuncia realizada com êxito' });
      }
    })
    console.log(res)
  }catch(error){
    console.log(error)
  }
})

app.post('/agendar/:id', (req, res) => {
  const cod_usuario = req.params.id;
  const nome = req.body.nome;
  const data = dateFormatter.format(new Date(req.body.data));
  const hora = req.body.hora;

  try {
    console.log('Rota de agendamento alcançada');

    db.query('INSERT INTO agendamento SET ?', {
      cod_usuario,
      nome,
      data,
      hora
    }, (err, result) => {
      if (err) {
        console.error('Erro ao inserir agendamento:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('Agendamento realizado com sucesso:', result);
        res.status(200).json({ message: 'Agendamento realizado com êxito' });
      }
    });
  } catch (error) {
    console.error('Erro durante o processamento do agendamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/agendamentos/:id', (req, res) => {
  const codUsuario = req.params.id;

  const query = `
    SELECT * from agendamento WHERE cod_usuario = ${codUsuario}
  `;
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta: ' + error.stack);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    res.json(results);
  });
})

app.put('/editAgend/:id', (req,res) =>{
  const id_agendamento = req.params.id;
  const nome = req.body.nome;
  const data = dateFormatter.format(new Date(req.body.data));
  const hora = req.body.hora;
  try {
    console.log(nome, data, hora, id_agendamento);

    db.query('Update agendamento SET nome = ?, data = ?, hora = ? where id_agendamento = ?', [nome,data,hora, id_agendamento]
      , (err, result) => {
      if (err) {
        console.error('Erro ao inserir agendamento:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('alteração realizada com sucesso:', result);
        res.status(200).json({ message: 'Agendamento alterado com êxito' });
      }
    });
  } catch (error) {
    console.error('Erro durante o processamento do agendamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})

app.delete("/exclude/:id", (req, res) =>{
  const id_agendamento = req.params.id
  console.log("backend")
  try{
    db.query(`delete from agendamento where id_agendamento = ${id_agendamento}`, (err, result) =>{
      if(err){
        console.error
        res.status(500).json()
      } else {
        console.log("exclusão realizada com sucesso", result);
        res.status(200).json({message: 'Agendamento excluido com sucesso'})
      }
    })
  } catch(error){
    console.log(error)
  }
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));