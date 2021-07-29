const form = document.querySelector('form');
const senha = document.querySelector('#senha');
const cfmSenha = document.querySelector('#cfm-senha');

form.addEventListener('submit', (event) => {
    if (senha.value !== cfmSenha.value) {
        event.preventDefault();
    }
});