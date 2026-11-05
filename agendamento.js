const formularioAgendamento = document.querySelector("#formulario-agendamento");
const seletorProfissional = document.querySelector("#profissional");
const campoData = document.querySelector("#data");
const mensagemAgendamento = document.querySelector("#mensagem-agendamento");

if (formularioAgendamento && seletorProfissional && campoData && mensagemAgendamento) {
    const hoje = new Date();
    const dataLocal = [
        hoje.getFullYear(),
        String(hoje.getMonth() + 1).padStart(2, "0"),
        String(hoje.getDate()).padStart(2, "0"),
    ].join("-");

    campoData.min = dataLocal;

    const profissionalSelecionado = new URLSearchParams(window.location.search).get("profissional");
    if (profissionalSelecionado && [...seletorProfissional.options].some((option) => option.value === profissionalSelecionado)) {
        seletorProfissional.value = profissionalSelecionado;
    }

    formularioAgendamento.addEventListener("submit", (evento) => {
        evento.preventDefault();
        mensagemAgendamento.textContent =
            "Solicitação preenchida. Para confirmar o horário, entre em contato com a central do Hospital Aurora.";
    });
}