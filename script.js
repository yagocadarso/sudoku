// Obtengo todas las cajas de entrada
const inputBoxes = document.getElementsByClassName('minibox');

// Definio los números fijos
const fixedNumbers = [
  { row: 0, col: 0, value: 6 },
  { row: 0, col: 1, value: 7 },
  { row: 0, col: 5, value: 5 },
  { row: 0, col: 3, value: 9 },
  
  { row: 1, col: 2, value: 2 },
  { row: 1, col: 7, value: 1 },
  
  { row: 2, col: 1, value: 9 },
  { row: 2, col: 2, value: 8 },
  
  { row: 3, col: 0, value: 2 },
  { row: 3, col: 2, value: 4 },
  { row: 3, col: 7, value: 9 },
  { row: 3, col: 8, value: 8 },
  
  { row: 4, col: 2, value: 1 },
  
  { row: 5, col: 1, value: 8 },
  { row: 5, col: 7, value: 4 },
  { row: 5, col: 8, value: 2 },
  
  { row: 6, col: 0, value: 1 },
  { row: 6, col: 1, value: 5 },
  { row: 6, col: 5, value: 9 },
  { row: 6, col: 8, value: 7 },
  
  { row: 7, col: 1, value: 2 },
  { row: 7, col: 2, value: 6 },
  { row: 7, col: 4, value: 7 },
  
  { row: 8, col: 3, value: 5 },
  { row: 8, col: 5, value: 4 },
  { row: 8, col: 6, value: 6 },
  { row: 8, col: 7, value: 1 },
];



const respuestas = [
  { row: 0, col: 2, value: 1 },
  { row: 0, col: 4, value: 4 },
  { row: 0, col: 6, value: 3 },
  { row: 0, col: 7, value: 8 },
  { row: 0, col: 8, value: 2 },
  
  { row: 1, col: 0, value: 5 },
  { row: 1, col: 1, value: 4 },
  { row: 1, col: 3, value: 7 },
  { row: 1, col: 4, value: 3 },
  { row: 1, col: 5, value: 8 },
  { row: 1, col: 6, value: 6 },
  { row: 1, col: 7, value: 1 },
  { row: 1, col: 8, value: 9 },
  
  { row: 2, col: 0, value: 3 },
  { row: 2, col: 3, value: 2 },
  { row: 2, col: 4, value: 6 },
  { row: 2, col: 5, value: 1 },
  { row: 2, col: 6, value: 4 },
  { row: 2, col: 7, value: 5 },
  { row: 2, col: 8, value: 7 },
  
  { row: 3, col: 1, value: 3 },
  { row: 3, col: 3, value: 7 },
  { row: 3, col: 4, value: 1 },
  { row: 3, col: 5, value: 6 },
  { row: 3, col: 6, value: 5 },
  
  { row: 4, col: 0, value: 9 },
  { row: 4, col: 1, value: 5 },
  { row: 4, col: 3, value: 2 },
  { row: 4, col: 4, value: 8 },
  { row: 4, col: 5, value: 4 },
  { row: 4, col: 6, value: 3 },
  { row: 4, col: 7, value: 6 },
  { row: 4, col: 8, value: 7 },
  
  { row: 5, col: 0, value: 7 },
  { row: 5, col: 2, value: 6 },
  { row: 5, col: 3, value: 9 },
  { row: 5, col: 4, value: 3 },
  { row: 5, col: 5, value: 5 },
  { row: 5, col: 6, value: 1 },
  
  { row: 6, col: 2, value: 3 },
  { row: 6, col: 3, value: 8 },
  { row: 6, col: 4, value: 6 },
  { row: 6, col: 6, value: 4 },
  { row: 6, col: 7, value: 2 },
  
  { row: 7, col: 0, value: 4 },
  { row: 7, col: 3, value: 1 },
  { row: 7, col: 5, value: 3 },
  { row: 7, col: 6, value: 8 },
  { row: 7, col: 7, value: 9 },
  { row: 7, col: 8, value: 5 },
  
  { row: 8, col: 0, value: 8 },
  { row: 8, col: 1, value: 7 },
  { row: 8, col: 2, value: 9 },
  { row: 8, col: 4, value: 2 },
  { row: 8, col: 8, value: 3 },
];






// Llenao las cajas de entrada con los números fijos y habilito la edición para las casillas vacías
for (const { row, col, value } of fixedNumbers) {
  const index = row * 9 + col;
  inputBoxes[index].value = value;
  inputBoxes[index].readOnly = true;
  inputBoxes[index].classList.add('fixed');
}

// Habilito la edición para las casillas vacías
for (let i = 0; i < inputBoxes.length; i++) {
  if (inputBoxes[i].value === '') {
    inputBoxes[i].readOnly = false;
    inputBoxes[i].classList.remove('fixed');
    
    
    inputBoxes[i].addEventListener('blur', function() {
  const inputValue = this.value;
  const rowIndex = Math.floor(i / 9);
  const colIndex = i % 9;
  
  // Obtengo el objeto de respuesta correspondiente a la casilla actual
  const answer = respuestas.find(obj => obj.row === rowIndex && obj.col === colIndex);
  
  // Verifico si el valor de la casilla no coincide con la respuesta
  if (answer && parseInt(inputValue) !== answer.value) {
    this.style.backgroundColor = 'red';
  } else {
    this.style.backgroundColor = '';
  }
});

    
    
    
    // Limitao la entrada a un solo número entre 1 y 9
    inputBoxes[i].addEventListener('input', function() {
      const inputValue = this.value;
      if (inputValue.length > 1 || !/^[1-9]$/.test(inputValue)) {
        this.value = '';
      }
    });
  }
}


// Definir el tiempo límite en minutos
const tiempoLimiteMinutos = 5;

// Calcular el tiempo límite en milisegundos
const tiempoLimiteMilisegundos = tiempoLimiteMinutos * 60 * 1000;

// Obtener el elemento HTML para mostrar el cronómetro
const cronometroElemento = document.getElementById('cronometro');

// Inicializar el tiempo restante al tiempo límite
let tiempoRestante = tiempoLimiteMilisegundos;

// Función para actualizar el cronómetro
function actualizarCronometro() {
  // Calcular los minutos y segundos restantes
  const minutos = Math.floor(tiempoRestante / 60000);
  const segundos = Math.floor((tiempoRestante % 60000) / 1000);

  // Mostrar el tiempo restante en el elemento HTML del cronómetro
  cronometroElemento.textContent = `Tiempo restante: ${minutos}:${segundos.toString().padStart(2, '0')}`;

  // Restar 1 segundo al tiempo restante
  tiempoRestante -= 1000;

  // Verificar si se ha alcanzado el tiempo límite
  if (tiempoRestante < 0) {
    // Detener el cronómetro
    clearInterval(cronometroInterval);
    // tiempo agotado
    cronometroElemento.textContent = "Tiempo agotado";
    
  }
}

// Actualizar el cronómetro cada segundo
const cronometroInterval = setInterval(actualizarCronometro, 1000);
