export class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;
  descricao;

  obterInsignia() {
    if (this.level >= 5) {
      return `${this.tipo} Implacavel`;
    }

    return `${this.tipo} iniciante`;
  }
}
