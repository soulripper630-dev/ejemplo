const boton = document.getElementById("saludarBtn");
const input = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  const nombre = input.value.trim();
  if (nombre === "") {
    mensaje.textContent = "Por favor, escribe tu nombre 😊";
  } else {
    mensaje.textContent = `¡Hola, ${nombre}! 👋 Tu aplicación en la nube funciona correctamente.`;
  }
});
