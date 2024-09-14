// Level 3 logic: Add and remove items dynamically
const itemList = document.getElementById('itemList');
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');
const nextButton = document.getElementById('nextButton');
const nextLevelDiv = document.getElementById('nextLevel');

if (addItemButton && removeItemButton) {
    addItemButton.addEventListener('click', function() {
        // Create a new list item and append it to the list
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        itemList.appendChild(newItem);

        // Show the next level button when at least one item is added
        if (itemList.childElementCount > 0) {
            nextLevelDiv.style.display = 'block';
        }
    });

    removeItemButton.addEventListener('click', function() {
        // Remove the last item from the list if it exists
        if (itemList.lastChild) {
            itemList.removeChild(itemList.lastChild);
        }

        // Hide the next level button if the list is empty
        if (itemList.childElementCount === 0) {
            nextLevelDiv.style.display = 'none';
        }
    });
}

if (nextButton) {
    nextButton.addEventListener('click', function() {
        // Redirect to Level 4 (or next level)
        window.location.href = 'level4.html';
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
