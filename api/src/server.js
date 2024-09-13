const express = require("express");
const model = require("./mock/dados.json");

const servidor = express();

// Configurando para servir arquivos estáticos da pasta 'public'
servidor.use('/images', express.static('public/images'));

servidor.get("/videos", (req, res) => {
  const videos = model.videos;

  if (videos.length > 0) {
    res.status(200).json(videos);
  } else {
    res.status(404).json({ message: "Nenhum vídeo encontrado" });
  }
});

servidor.listen(3000, () => console.log("Servidor rodando! 🚀"));
