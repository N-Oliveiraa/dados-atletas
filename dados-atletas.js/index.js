// Definição da classe Atleta
class Atleta {
    constructor (nome,idade,peso,altura,notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura  = altura;
        this.notas = notas;
    }
   
// Método para calcular a categoria do atleta
    calculaCategoria(){
      if(this.idade >= 9 && this.idade <= 11) {
          return "Infantil";
      }
      if(this.idade === 12 || this.idade === 13) { 
          return "Juvenil";
      }
      if(this.idade === 14 || this.idade === 15) {
          return "Intermediário";
      }
      if(this.idade >= 16 && this.idade <= 30) {
          return "Adulto";
      }
      else{
          return "Sem categoria"
      }
    }

// Método para calcular o IMC do atleta
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

 // Métodos para obter os atributos
    calculaMediaValida() {
        let notasOrdenadas = [...this.notas].sort((a,b) => a - b);
        let notasFiltradas = notasOrdenadas.slice(1, - 1);
        let soma = notasFiltradas.reduce((acc,nota) => acc + nota, 0);
        let media = soma / notasFiltradas.length;
            return media
    }
    obtemNomeAtleta() {
        return this.nome;
    }
    obtemIdadeAtleta() {
        return this.idade
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaDoAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return [...this.notas].sort((a,b) => a - b);
    } 

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();       
    }
    obtemMediaValida() {
        return this.calculaMediaValida();
    }

}

// Declara o atleta de exemplo
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


// Exibindo as informações do atleta
console.log("Nome do atleta:", atleta.obtemNomeAtleta());  
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaDoAtleta().toFixed(2));
console.log("Notas:", atleta.obtemNotasAtleta().join(", "));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida().toFixed(8));