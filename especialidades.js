const campoBusca = document.querySelector("#busca-especialidade");
const filtroArea = document.querySelector("#filtro-area");
const botaoLimpar = document.querySelector("#limpar-filtros");
const contadorResultados = document.querySelector("#contador-resultados");
const mensagemVazia = document.querySelector("#mensagem-vazia");
const cartoes = [...document.querySelectorAll(".cartao-especialidade")];

function atualizarEspecialidades() {
	const busca = campoBusca.value
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLocaleLowerCase("pt-BR");
	const areaSelecionada = filtroArea.value;
	let quantidadeVisivel = 0;

	cartoes.forEach((cartao) => {
		const textoCartao = cartao.textContent
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLocaleLowerCase("pt-BR");
		const correspondeBusca = textoCartao.includes(busca);
		const correspondeArea = areaSelecionada === "todas" || cartao.dataset.area === areaSelecionada;
		const visivel = correspondeBusca && correspondeArea;

		cartao.hidden = !visivel;
		quantidadeVisivel += Number(visivel);
	});

	contadorResultados.textContent = `${quantidadeVisivel} ${quantidadeVisivel === 1 ? "especialidade encontrada" : "especialidades encontradas"}`;
	mensagemVazia.hidden = quantidadeVisivel > 0;
}

campoBusca.addEventListener("input", atualizarEspecialidades);
filtroArea.addEventListener("change", atualizarEspecialidades);

botaoLimpar.addEventListener("click", () => {
	campoBusca.value = "";
	filtroArea.value = "todas";
	atualizarEspecialidades();
	campoBusca.focus();
});

atualizarEspecialidades();