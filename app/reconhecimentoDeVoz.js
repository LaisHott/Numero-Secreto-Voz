const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //From MDN docs

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br' //Seleciona a lingua 
recognition.start()

recognition.addEventListener('result', onSpeak)
//Usa variavel recognition. Quando o reconhecimento comecar quero tudo que estiver em result e executa uma funcao onSpeak
function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
      //De inicio mostra varias propriedades e array
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start());