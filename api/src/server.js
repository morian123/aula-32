const express = require('express')

const { videos } = require("./mock/dados.json")

const servidor = express();

servidor.get('/', (req, res) => {
    res.send("Olá, mundo!");
});

servidor.listen("3000", () => console.log("servidor reando na porta 3000"))