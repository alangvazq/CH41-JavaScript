// Primero, selecciona el elemento textarea y el formulario utilizando sus IDs
var textarea = document.getElementById('myTextarea');
var form = document.querySelector('form');

// Luego, agrega un event listener para el evento 'submit' del formulario
form.addEventListener('submit', function(e) {
    // Previene la acción por defecto del formulario (enviar los datos y recargar la página)
    e.preventDefault();

    // Imprime el valor actual del textarea en la consola
    console.log(textarea.value);
});