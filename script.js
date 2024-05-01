function imc() {
    const valores = obterValores();
    if (!valores) {
        exibirResultado(valores, 0, 'preencha todos os campos!');
        return;
    }

    const calcular = document.getElementById('calcular');

    const imc = calcularIMC(valores);
    const classificacao = determinarClasificacao(imc);
    exibirResultado (valores, imc, classificacao);
}

function obterValores() {
    const nome = (document.getElementById('nome').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (nome === '' || isNaN(altura) || isNaN(peso)) {
        return false;
    }

    return { nome, altura, peso };
}

function calcularIMC(valores) {
    const { altura, peso } = valores;
    return peso / (altura * altura);
}

function determinarClasificacao(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if (imc < 25) {
        return 'com peso ideal. parabens!!';
    } else if (imc < 30) {
        return 'levemente acima do peso';
    } else if (imc < 35) {
        return 'voce esta com obesidade grau I.';
    } else if (imc < 40) {
        return 'voce esta com obesidade grau II.';
    } else {
        return 'voce esta com obesidade grau III. Cuidado!!.';
    }
}

function exibirResultado (valores, imc, classificacao) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `${valores.nome} seu IMC é ${imc.toFixed(2)} e voce esta ${classificacao}`;
}

calcular.addEventListener('click', imc);