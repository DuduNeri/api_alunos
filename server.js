import express from "express";
import cors from "cors";
import connection from "./connection.js";

const app = express();
const port = 8007;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const alunos = await connection.query(`select * from alunos;`);
    res.send(alunos.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao buscar alunos");
  }
});

app.post("/", async (req, res) => {
  const { nome, matricula, cpf } = req.body; 
  try {
    await connection.query(
      `
        insert into alunos (nome, matricula, cpf)
        values ($1, $2, $3);`,
      [nome, matricula, cpf] 
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao inserir aluno");
  }
});

app.listen(port, () => {
  console.log(`Server online in port ${port}`);
});
