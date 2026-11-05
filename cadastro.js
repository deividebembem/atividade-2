const formularioCadastro = document.querySelector("#formulario-cadastro");
const mensagemCadastro = document.querySelector("#mensagem-cadastro");

if (formularioCadastro && mensagemCadastro) {
    formularioCadastro.addEventListener("submit", (evento) => {
        evento.preventDefault();
        mensagemCadastro.textContent =
            "Dados preenchidos. Para concluir seu cadastro, entre em contato com a central do Hospital Aurora.";
    });
}