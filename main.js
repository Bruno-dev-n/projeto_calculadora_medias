const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="festejando">';
const imgREprovado = '<img src="./images/reprovado.png" alt="decepicionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a media minima"));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();
    caulculaMediaFinal();

    })

    function adicionarLinha(){

        const inputNomeAtividade = document.getElementById('nome-atividade');

        const inputNotaAtividade = document.getElementById('nota-atividade');

        if (atividades.includes(inputNomeAtividade.value)){
            alert(`a atividade: ${inputNomeAtividade.value} já foi inserida por favor colocar a proxima atividade`);

        } else{

        

        atividades.push(inputNomeAtividade.value);

        notas.push(parseFloat (inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgREprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
    function atualizarTabela(){

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    

    
    }
    function atualizarMediaFinal(){
        const mediaFinal = caulculaMediaFinal();
        document .getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
        document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    }
    function caulculaMediaFinal(){
        let somaDasNotas = 0;
        for( let i = 0; i <notas.length; i++){
            somaDasNotas += notas[i];
        }
        return somaDasNotas / notas.length;
    }