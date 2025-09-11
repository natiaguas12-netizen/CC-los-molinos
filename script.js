
// Conseguimos el botón y el contenido del menú
var dropdownButton = document.getElementById("dropdownButton");
var dropdownContent = document.getElementById("dropdownContent");

// Evento para mostrar y ocultar el menú al hacer clic en el botón
dropdownButton.addEventListener("click", function() {
    // Verificamos si el menú está visible o no
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block"; // Mostrar menú
    } else {
        dropdownContent.style.display = "none"; // Ocultar menú
    }
});