// 1. Definición de datos
const fileNames = [
    "A.png", "B.png", "C.png", "D.png", "E.png", "F.png", "G.png", "H.png", "I.png",
    "J.png", "K.png", "L.png", "M.png", "N.png", "O.png", "P.png", "Q.png", "R.png",
    "S.png", "T.png", "U.png", "V.png", "W.png", "X.png", "Y.png", "Z.png",
    "NUMERALES.png", "ESPACIO.png"
];

const baseDeck = fileNames.map(f => ({
    img: f,
    text: f.replace('.png', '')
}));

let deck = [];
let currentIndex = 0;

// 2. Referencias al DOM
const cardContainer = document.getElementById('card');
const flagImage = document.getElementById('flagImage');
const cardBack = document.getElementById('cardBack');
const progressBadge = document.getElementById('progressBadge');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 3. Funciones auxiliares
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function updateCard() {
    if (!deck.length) return;
    const card = deck[currentIndex];

    // Imagen: si falla, se muestra un texto de respaldo en el frente
    flagImage.src = `./flags/${card.img}`;
    flagImage.alt = card.text;
    flagImage.onerror = function() {
        // Oculta la imagen y muestra un placeholder de texto en el frente
        this.style.display = 'none';
        // Creamos o mostramos un elemento de texto (si no existe)
        let fallback = document.querySelector('.card-front .fallback-text');
        if (!fallback) {
            fallback = document.createElement('div');
            fallback.className = 'fallback-text';
            fallback.style.fontSize = '4rem';
            fallback.style.fontWeight = 'bold';
            fallback.style.color = 'var(--primary)';
            document.querySelector('.card-front').appendChild(fallback);
        }
        fallback.textContent = card.text;
    };
    // Si la imagen se carga correctamente, aseguramos que se muestre y el fallback se oculte
    flagImage.onload = function() {
        this.style.display = 'block';
        const fallback = document.querySelector('.card-front .fallback-text');
        if (fallback) fallback.remove();
    };

    // Dorso
    cardBack.textContent = card.text;
    if (card.text.length >= 8) {
        cardBack.classList.add('long-text');
    } else {
        cardBack.classList.remove('long-text');
    }

    // Progreso numérico y barra
    progressBadge.textContent = `${currentIndex + 1} / ${deck.length}`;
    const percent = ((currentIndex + 1) / deck.length) * 100;
    progressBar.style.width = percent + '%';

    // Estado de botones
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === deck.length - 1);
}

// 4. Funciones globales (para eventos HTML)
window.shuffleDeck = function() {
    deck = shuffleArray(baseDeck);
    currentIndex = 0;
    cardContainer.classList.remove('flipped');
    cardContainer.setAttribute('aria-expanded', 'false');
    updateCard();
};

window.nextCard = function() {
    if (currentIndex < deck.length - 1) {
        currentIndex++;
        cardContainer.classList.remove('flipped');
        cardContainer.setAttribute('aria-expanded', 'false');
        updateCard();
    }
};

window.prevCard = function() {
    if (currentIndex > 0) {
        currentIndex--;
        cardContainer.classList.remove('flipped');
        cardContainer.setAttribute('aria-expanded', 'false');
        updateCard();
    }
};

window.flipCard = function() {
    cardContainer.classList.toggle('flipped');
    const isFlipped = cardContainer.classList.contains('flipped');
    cardContainer.setAttribute('aria-expanded', isFlipped);
};

// Manejo de teclado para accesibilidad (Enter o Espacio)
window.handleCardKey = function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flipCard();
    }
};

// 5. Inicialización
window.addEventListener('load', () => {
    shuffleDeck();
    // Aseguramos que la tarjeta tenga el atributo aria-expanded inicial
    cardContainer.setAttribute('aria-expanded', 'false');
});