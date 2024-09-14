// Level 1 logic
const actionButton = document.getElementById('actionButton');
const nextButton = document.getElementById('nextButton');
const nextLevelDiv = document.getElementById('nextLevel');

if (actionButton) {
    actionButton.addEventListener('click', function() {
        // Change the button text to "Well done!"
        actionButton.textContent = 'Well done!';
        
        // Show the next level section
        nextLevelDiv.style.display = 'block';
    });
}

if (nextButton) {
    nextButton.addEventListener('click', function() {
        // Redirect to Level 2
        window.location.href = 'level2.html';
    });
}

// Control de los efectos de celebración y error
const celebrationSound = document.getElementById('celebrationSound');
const errorSound = document.getElementById('errorSound');
const happyFace = document.getElementById('happyFace');
const sadFace = document.getElementById('sadFace');

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

// Lógica del juego que conecta los efectos con las acciones
if (addItemButton) {
    addItemButton.addEventListener('click', function() {
        // Añadir un nuevo ítem y mostrar celebración
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        itemList.appendChild(newItem);
        celebrate();
    });

    removeItemButton.addEventListener('click', function() {
        if (itemList.lastChild) {
            itemList.removeChild(itemList.lastChild);
            celebrate(); // Celebración si se logra quitar
        } else {
            showError(); // Mostrar error si no hay ítems
        }
    });
}
