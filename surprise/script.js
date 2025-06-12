const startButton = document.getElementById('startButton');
const messageCard = document.getElementById('messageCard');
const timerCard = document.getElementById('timerCard');
const timerText = document.getElementById('timerText');
const timer = document.getElementById('timer');
const audioPlayer = document.getElementById('audioPlayer');
const photoCard = document.getElementById('photoCard');

const dataSurpresa = new Date(2025, 5, 12); // Junho = 5

const mensagens = [
  { texto: "", cor: "#ff4d6d" },
  { texto: "Oi, meu amor! 💖", cor: "#ff4d6d" },
  { texto: "Você é a razão da minha felicidade!", cor: "#ff85a2" },
  { texto: "Te amo mais que tudo! 😍", cor: "#ffb3c6" },
  { texto: "Você é a luz da minha vida! ✨", cor: "#ffd6e0" },
  { texto: "Quero passar cada segundo ao seu lado! 💕", cor: "#ffc2d1" }
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
  setTimeout(() => heart.remove(), 10000);
}

function iniciarChuvaCoracoes() {
  const intervalo = setInterval(criarCoracao, 150);
  setTimeout(() => clearInterval(intervalo), 15000);
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
