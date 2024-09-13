class Video {
  constructor(id, titulo, descricao, quantidadeViews, image, canalID) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.quantidadeViews = quantidadeViews;
    this.image = image;
    this.canalID = canalID;
  }

  pegaCanal() {
    // Implementação para pegar o canal associado ao vídeo
  }
}

class Usuario {
  constructor(id, nome, imagem, email, papel) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.email = email;
    this.papel = papel;
  }

  pegarPapel() {
    if (this.papel === "usuarioDono") {
      this.pegarCanal();
    } else if (this.papel === "usuarioInscrito") {
      this.inscreverSeNoCanal();
    }
  }

  pegarCanal() {
    // Implementação para pegar o canal do usuário
  }

  inscreverSeNoCanal(id) {
    // Implementação para inscrever-se em um canal
  }
}
