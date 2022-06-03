import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const cpf = new GeraCPF();
    cpfGerado.innerHTML = cpf.geraNovoCpf();
})();