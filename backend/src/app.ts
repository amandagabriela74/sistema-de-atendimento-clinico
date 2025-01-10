import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rotas
app.use(routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
