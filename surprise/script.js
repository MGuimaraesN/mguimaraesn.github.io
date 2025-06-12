const startButton = document.getElementById('startButton');
const messageCard = document.getElementById('messageCard');
const timerCard = document.getElementById('timerCard');
const timerText = document.getElementById('timerText');
const timer = document.getElementById('timer');
const audioPlayer = document.getElementById('audioPlayer');
const photoCard = document.getElementById('photoCard');

const dataSurpresa = new Date(2025, 5, 12); // Junho = 5

const mensagens = [
[
  { texto: "Oi, meu amor! 💖", cor: "#ff6b81" },
  { texto: "Queria te dizer algumas coisinhas que estão aqui, guardadas no meu coração...", cor: "#ffa6b8" },
  { texto: "Você foi, sem dúvida, a melhor coisa que me aconteceu.", cor: "#ff8fab" },
  { texto: "Nunca imaginei que me apaixonaria por alguém da forma como me apaixonei por você.", cor: "#ffc2d1" },
  { texto: "Desde que você entrou na minha vida, tudo mudou.", cor: "#ffe0e9" },
  { texto: "Agora, eu conto as horas pra te ver, pra conversar contigo, pra estar ao seu lado.", cor: "#ffb3c6" },
  { texto: "Quando estou com você, meu mundo muda completamente. Me sinto leve, feliz, inteiro.", cor: "#ffd6e0" },
  { texto: "Você foi a única pessoa que realmente me conheceu de verdade...", cor: "#ff9aa2" },
  { texto: "Que conheceu esse meu lado mais romântico e sincero.", cor: "#ffc9d1" },
  { texto: "E eu quero que você saiba: eu te amo muitoooo... aliás, melhor dizendo, eu te amo mil milhões! ✨", cor: "#ffccd5" },
  { texto: "Espero que, a partir de hoje, a gente possa escrever uma história linda juntos.", cor: "#ffdbe2" },
  { texto: "Porque, sinceramente, eu acho que chegou a hora, né? Kkkkkk", cor: "#fda4af" },
  { texto: "Então, qual vai ser a sua resposta? 😳", cor: "#ff7f9c" },
  { texto: "Seja qual for, quero que saiba: meu amor por você continua.", cor: "#ff9eb5" },
  { texto: "Te amo demais! ❤️", cor: "#ff4d6d" }
]

];

let indexMensagem = 0;

function atualizarTimer() {
  const agora = new Date();
  const diff = dataSurpresa - agora;
  if (diff <= 0) {
    timerText.style.display = "none";
    timer.textContent = "Hoje é o grande dia! ❤️";
    clearInterval(intervaloTimer);
    return;
  }
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);
  timer.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

let intervaloTimer;

function mostrarMensagemAtual() {
  if (indexMensagem < mensagens.length) {
    const { texto, cor } = mensagens[indexMensagem];
    messageCard.innerHTML = texto;
    messageCard.style.backgroundColor = cor;
    messageCard.style.boxShadow = `0 6px 20px ${cor}aa`;
    timerCard.style.boxShadow = `0 4px 10px ${cor}aa`;
  } else {
    const corFinal = "#ff4d6d";
    messageCard.innerHTML = "Te amo muito! ❤️";
    messageCard.style.backgroundColor = corFinal;
    messageCard.style.boxShadow = `0 6px 20px ${corFinal}aa`;
    timerCard.style.boxShadow = `0 4px 10px ${corFinal}aa`;
  }
}

function proximaMensagem() {
  if (indexMensagem < mensagens.length) {
    indexMensagem++;
    mostrarMensagemAtual();
  }
}

function playAudio() {
  audioPlayer.volume = 0.6;
  audioPlayer.play().catch(error => {
    console.error("Erro ao reproduzir o áudio:", error);
  });
}

function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function iniciarChuvaCoracoes() {
  const intervalo = setInterval(criarCoracao, 150);
  setTimeout(() => clearInterval(intervalo), 30000);
}

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  photoCard.style.display = 'block';
  messageCard.style.display = 'flex';
  timerCard.style.display = 'block';

  atualizarTimer();
  intervaloTimer = setInterval(atualizarTimer, 1000);

  mostrarMensagemAtual();

  playAudio();
  iniciarChuvaCoracoes();
});

document.addEventListener('click', () => {
  if (startButton.style.display === 'none') {
    proximaMensagem();
  }
});
