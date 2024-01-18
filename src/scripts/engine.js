const emojis = [
  "🐧",
  "🐧",
  "🌎",
  "🌎",
  "🎰",
  "🎰",
  "🧊",
  "🧊",
  "🥶",
  "🥶",
  "🚢",
  "🚢",
  "🤖",
  "🤖",
  "🧑‍💻",
  "🧑‍💻",
]
let openCards = []

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2: -1));

for(let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div")
  box.className  = "item"
  box.innerHTML = shuffleEmojis[i]
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box)
}
function handleClick() {
  if(openCards.length < 2) {
    this.classList.add("boxOpen")
    openCards.push(this)
  }

  if(openCards.length == 2) {
    setTimeout(checkMatch, 500)
  }
}

function checkMatch() {
  if(openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch")
    openCards[1].classList.add("boxMatch")
  } else {
    openCards[0].classList.remove("boxOpen")
    openCards[1].classList.remove("boxOpen")
  } 

  openCards = [];
  const matchedCards = document.querySelectorAll(".boxMatch");
  if(document.querySelectorAll(".boxMatch").length === emojis.length) {
     // Adicione a classe 'blur' para desfocar o fundo
    document.querySelector('.game').classList.add('blur');
    // Exiba o modal
    document.getElementById('winModal').style.display = 'block';
  }
}

// Função para fechar o modal
function closeModal() {
  document.querySelector('.game').classList.remove('blur');
  document.getElementById('winModal').style.display = 'none';

window.addEventListener('click', function(event) {
  const modal = document.getElementById('winModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Adicione um event listener para fechar o modal ao pressionar a tecla 'Esc'
window.addEventListener('keydown', function(event) {
  const modal = document.getElementById('winModal');
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

}