// Música y sonidos
const backgroundMusic = document.getElementById('backgroundMusic');
const celebrationSound = document.getElementById('celebrationSound');
const errorSound = document.getElementById('errorSound');

// Caritas
const happyFace = document.getElementById('happyFace');
const sadFace = document.getElementById('sadFace');

// Formulario y resultado
const userForm = document.getElementById('userForm');
const resultDiv = document.getElementById('result');

// Función para lanzar confeti y reproducir el sonido de celebración
function celebrate() {
    if (celebrationSound) celebrationSound.play();
    confetti();
    happyFace.style.display = 'inline';
    sadFace.style.display = 'none';
}

// Función para mostrar un error
function showError() {
    if (errorSound) errorSound.play();
    sadFace.style.display = 'inline';
    happyFace.style.display = 'none';
}

// Reproducir música de fondo
if (backgroundMusic) {
    backgroundMusic.play();
}

// Lógica del formulario
if (userForm) {
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userName = document.getElementById('userName').value;
        if (userName) {
            resultDiv.textContent = `Hello, ${userName}! Welcome to DOM Quest!`;
            celebrate();
        } else {
            resultDiv.textContent = 'Please enter a name.';
            showError();
        }
    });
}
