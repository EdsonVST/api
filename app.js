const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/notas', (req, res) => {
  const notas = JSON.parse(fs.readFileSync('db.json'));
  res.json(notas);
});

app.post('/notas', (req, res) => {
  const notas = JSON.parse(fs.readFileSync('db.json'));
  notas.push(req.body);
  fs.writeFileSync('db.json', JSON.stringify(notas));
  res.json({ success: true });
});

// Adicione PUT (editar) e DELETE aqui...
app.listen(3000, () => console.log('Servidor rodando!'));

/*import estoque from "./estoque.js";
import express from "express";

const app = express();

app.get("/produtos", (req, res) => {
    res.status(200).send(estoque);
});

app.listen(3000);
*/