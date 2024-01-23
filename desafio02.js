
// Função para calcular o saldo de Rankeadas e determinar o nível
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    if (vitorias < 10) {
        return { nivel: "Ferro", saldoVitorias };
    } else if (vitorias >= 11 && vitorias <= 20) {
        return { nivel: "Bronze", saldoVitorias };
    } else if (vitorias >= 21 && vitorias <= 50) {
        return { nivel: "Prata", saldoVitorias };
    } else if (vitorias >= 51 && vitorias <= 80) {
        return { nivel: "Ouro", saldoVitorias };
    } else if (vitorias >= 81 && vitorias <= 90) {
        return { nivel: "Diamante", saldoVitorias };
    } else if (vitorias >= 91 && vitorias <= 100) {
        return { nivel: "Lendário", saldoVitorias };
    } else {
        return { nivel: "Imortal", saldoVitorias };
    }
}

// Função principal
function main() {
    // Obter entrada do usuário (pode ser substituída por qualquer método de entrada)
    const vitorias = parseInt(prompt("Digite a quantidade de vitórias do jogador:"));
    const derrotas = parseInt(prompt("Digite a quantidade de derrotas do jogador:"));

    // Calcular o nível e saldo de Rankeadas
    const { nivel, saldoVitorias } = calcularNivel(vitorias, derrotas);

    // Exibir a mensagem final
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Chamar a função principal
main();
