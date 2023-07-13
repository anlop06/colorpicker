const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
// console.log(color)

// EVENTOS: Acciones que puede realizar el usuario

color.addEventListener("input", () => {
    // función flecha: => (otra manera de agregar una función)
    console.log(color.value);
    salida.innerHTML = color.value
    salida.style.background = color.value
    salida.style.color = '#f0f0f0'
})
