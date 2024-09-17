class Carro {
  //O método constructor é executado quando um novo objeto é criado.
  //Ele define as propriedades com os valores passados ao criar a instância.
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método para exibir informações do carro
  exibirInfo() {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
  }

  // Método para simular o carro acelerando
  acelerar() {
    console.log(`${this.marca} ${this.modelo} está acelerando!`);
  }

  // Método para frear o carro
  frear() {
    console.log(`${this.marca} ${this.modelo} está freando!`);
  }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2021);

// Outra instância da classe Carro
const outroCarro = new Carro("Honda", "Civic", 2020);

meuCarro.exibirInfo();
// Output: Carro: Toyota Corolla, Ano: 2021

outroCarro.exibirInfo();
// Output: Carro: Honda Civic, Ano: 2020
