class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "habilidades";
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Gandalf", 100, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");

heroi1.atacar(); // Saída: O mago Gandalf atacou usando magia.
heroi2.atacar(); // Saída: O guerreiro Aragorn atacou usando espada.
