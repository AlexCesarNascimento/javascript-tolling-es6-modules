import  xablau, { nome as nome2, sobrenome2, idade, soma, Pessoa } from './modulo1';
import * as MeuModulo from './modulo1';


console.log(xablau(1,5))
console.log(MeuModulo.cpf);

console.log(nome2 + ' ' + sobrenome2 + ' tem ' + idade + ' anos.');


const p1 = new Pessoa("Alex", "Cesar", 27);
console.log("Pessoa: ", p1);

