// Obtener elementos del DOM
const turtleAgeInput = document.getElementById('turtleAge');
const calculateButton = document.getElementById('calculateButton');
const resultOutput = document.getElementById('result');

// Función para calcular la edad en años humanos
function calcularEdadHumana(edadTortuga) {
  if (edadTortuga <= 5) {
    return edadTortuga * 10;
  } else {
    return 5 * 10 + (edadTortuga - 5) * 5;
  }
}

// Evento al hacer clic en el botón
calculateButton.addEventListener('click', () => {
  // Obtener la edad de la tortuga
  const edadTortuga = parseInt(turtleAgeInput.value);

  // Validar la entrada
  if (isNaN(edadTortuga) || edadTortuga < 0) {
    resultOutput.textContent = "Por favor, ingresa una edad válida.";
    return;
  }

  // Calcular la edad en años humanos
  const edadHumana = calcularEdadHumana(edadTortuga);

  // Mostrar el resultado
  resultOutput.textContent = `La edad de tu tortuga en años humanos es: ${edadHumana} años.`;
});