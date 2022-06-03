import ValidaCPF from "./validaCPF";

export default class GeraCPF {
    rand(min=100000000, max=999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
        
    }

    formatado(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2;
        return this.formatado(novoCPF);
    }

}