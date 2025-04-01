export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;
  descricao;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `${this.constructor.tipo} Implacavel`;
    }

    return `${this.constructor.tipo} iniciante`;
  }
}
