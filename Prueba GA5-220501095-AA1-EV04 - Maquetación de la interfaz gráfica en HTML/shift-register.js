// Actualiza el reloj en tiempo real
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleString();
  }
  setInterval(updateClock, 1000);
  
  // Variables globales para almacenar el inicio y fin del turno
  let startTime = null;
  
  // Función para iniciar turno
  function startShift() {
    startTime = new Date();
    alert("Inicio de turno registrado: " + startTime.toLocaleString());
  }
  
  // Función para finalizar turno
  function endShift() {
    if (!startTime) {
      alert("Primero debe iniciar el turno.");
      return;
    }
    const endTime = new Date();
    const timeWorked = Math.abs(endTime - startTime);
    const hours = Math.floor(timeWorked / (1000 * 60 * 60));
    const minutes = Math.floor((timeWorked % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeWorked % (1000 * 60)) / 1000);
  
    document.getElementById("result").textContent = `Tiempo trabajado: ${hours}h ${minutes}m ${seconds}s`;
    startTime = null; // Reinicia para un nuevo turno
  }
  