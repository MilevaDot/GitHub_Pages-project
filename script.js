const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);
/* El último botón de un formulario es por defecto tipo submit
    a menos que especifiquemos lo contrario. */
function sumarInputValues(event) {
    console.log({event});
    event.preventDefault(); // Agregamos esto para que no se refresque la página.
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}