import pkg from 'pg';
const { Pool } = pkg;

const connection = new Pool({
  user: "postgres",
  password: "dudu2222",
  database: "alunos",
  host: "localhost",
  port: "5432",
});

export default connection;
