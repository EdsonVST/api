import estoque from "./estoque.js";
import express from "express";

const app = express();

app.get("/produtos", (req, res) => {
    res.status(200).send(estoque);
});

app.listen(3000);
