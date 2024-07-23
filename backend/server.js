const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Habilita o uso de CORS
app.use(cors());
// Habilita o uso de JSON no corpo das requisições
app.use(express.json());

// Array que armazena as notas
let notes = [];

// Endpoint que cria uma nova nota
app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

// Endpoint que retorna todas as notas
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Endpoint que deleta uma nota
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

// Inicializa o servidor na porta 3001
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
