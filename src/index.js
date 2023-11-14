class formaHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        const ataque = ataques[this.tipo] || "usou um ataque qualquer";

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new formaHeroi("eduzz",23,"ninja");
let heroi2 = new formaHeroi("Joao", 33, "monge");
let heroi3 = new formaHeroi("maria", 44, "mago");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();