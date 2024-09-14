// Menu screen logic
const startButton = document.getElementById('startButton');
const level1Button = document.getElementById('level1Button');
const level2Button = document.getElementById('level2Button');

// Control de la música de fondo
const backgroundMusic = document.getElementById('backgroundMusic');

// Play background music when the game starts
if (backgroundMusic) {
    backgroundMusic.play();
}


if (startButton) {
    startButton.addEventListener('click', function() {
        // Redirect to Level 1
        window.location.href = 'levels/level1.html';
    });
}

if (level1Button) {
    level1Button.addEventListener('click', function() {
        // Redirect to Level 1
        window.location.href = 'levels/level1.html';
    });
}

if (level2Button) {
    level2Button.addEventListener('click', function() {
        // Redirect to Level 2
        window.location.href = 'levels/level2.html';
    });
}

if (level3Button) {
    level3Button.addEventListener('click', function() {
        // Redirect to Level 3
        window.location.href = 'levels/level3.html';
    });
}