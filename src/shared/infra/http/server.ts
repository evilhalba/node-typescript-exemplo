import cors from "cors";
import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api", (request: Request, response: Response) => {
  const nome = request.body.nome;
  return response.json({ ola: `ola mundo ${nome}` }).send();
});

const porta = process.env.PORT || 3333;

app.listen(porta, () => console.log(`Server is up! on port ${porta}`));
