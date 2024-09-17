class ProdutoPadaria {
  constructor(nome, preco, ingredientes) {
    this.nome = nome;
    this.preco = preco;
    this.ingredientes = ingredientes;
  }

  // Método para exibir as informações do produto
  exibirInfo() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$${this.preco.toFixed(2)}`);
    console.log(`Ingredientes: ${this.ingredientes.join(', ')}`);
  }
  
  // Método para calcular desconto
  aplicarDesconto(desconto) {
    const precoComDesconto = this.preco - (this.preco * desconto / 100);
    console.log(`Preço com desconto (${desconto}%): R$${precoComDesconto.toFixed(2)}`);
  }
}

// Criando uma instância para Bolo de Chocolate
const boloDeChocolate = new ProdutoPadaria(
  'Bolo de Chocolate',
  25.00,
  ['farinha', 'açúcar', 'ovos', 'chocolate', 'leite']
);

// Criando outra instância para Bolo de Cenoura
const boloDeCenoura = new ProdutoPadaria(
  'Bolo de Cenoura',
  22.50,
  ['farinha', 'açúcar', 'ovos', 'cenoura', 'leite condensado']
);

// Exibir informações do Bolo de Chocolate
boloDeChocolate.exibirInfo();

// Exibir informações do Bolo de Cenoura
boloDeCenoura.exibirInfo();

// Aplicar desconto no Bolo de Chocolate
boloDeChocolate.aplicarDesconto(10);
