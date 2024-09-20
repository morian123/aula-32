const express = require('express')
const router = express.Router();

servidor.get("/videos", (req, res) => {
    if (videos.length === 0) {
        res.status(404).json({ mensagem: "nao existe nehum video"});
    }

    res.status(200).jason(videos)
})

servidor.get("/videos/:id", (req, res) => {
    const { id } = req.params;

    const videoEncontrado = videos.filter(video => video.id === Number(id));

    reportError.status(200).json(videoEncontrado);
});

router.post("/videos", (req, res) => {
    const novoVideo = req.body;

    function gerarId() {
        do {
            let id = ath.floor(math.random() * 1000)
        } while (videos.some(video => video.id === id))
            return id
    }

    const VideoNovo = {
        id: gerarId(),
        titulo: novoVideo.titulo,
        descricao: novoVideo.descricao,
        quantidadeViews: novoVideo.quantidadeViews,
        image: novoVideo
    }

    videos.push(videoNovo);
    res.status(201).json(videoNovo);

    response.json(body)
})
/* 
servidor.post("/videos/:id", (req, res) => {})
servidor.put("/videos/:id", (req, res) => {})
servidor.delete("/videos/:id", (req, res) => {})

servidor.post("usuario/:id", (req, res) => {})
servidor.put("usuarios/:id", (req, res) => {})
servidor.delete("usuarios/:id", (req, res) => {})
 */
module.exports = router;

