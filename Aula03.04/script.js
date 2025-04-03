function exibirMenu() {
    return prompt(
        "===== MENU INTERATIVO =====\n" +
        "1 - Calcular média\n" +
        "2 - Sair\n" +
        "Escolha uma opção:"
    );
}

function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Erro: Digite notas válidas.");
        return;
    }

    let media = (nota1 + nota2) / 2;
    let mensagem;

    if (media >= 7) {
        mensagem = "Aprovado";
    } else if (media >= 5) {
        mensagem = "Recuperação";
    } else {
        mensagem = "Reprovado";
    }

    alert(`Sua média é: ${media.toFixed(2)}\nSituação: ${mensagem}`);
}

function executarOpcao(opcao) {
    switch (opcao) {
        case "1":
            calcularMedia();
            break;
        case "2":
            alert("Saindo... Até mais!");
            return false;
        default:
            alert("Opção inválida. Tente novamente.");
    }
    return true;
}

function iniciarMenu() {
    let continuar = true;
    while (continuar) {
        let opcao = exibirMenu();
        continuar = executarOpcao(opcao);
    }
}

// Inicia o menu
iniciarMenu();
