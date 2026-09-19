// ¡Buena suerte!
const importe=document.querySelector('#bill');

const porcentaje = document.querySelector('#tip');

const boton = document.querySelector("#calculate");

const total = document.querySelector("#total");

boton.addEventListener("click", function() {

    const valorImporte = Number(importe.value);
    const valorPorcentaje = Number(porcentaje.value);

    total.textContent= valorImporte + (valorImporte *valorPorcentaje/100);

})