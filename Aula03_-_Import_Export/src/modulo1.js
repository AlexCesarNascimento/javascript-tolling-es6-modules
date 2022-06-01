const nome = 'Alex'
const sobrenome = 'Cesar'
export const idade = 27
export const cpf = '123.456.789-10'

export default function soma(x, y){
    return x + y;
}

export {
    nome,
    sobrenome as sobrenome2,
};

export class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}