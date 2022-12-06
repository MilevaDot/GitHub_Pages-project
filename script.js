/* Recuerda que en CSS para dar estilos hacíamos lo siguiente:
    .Para una etiqueta:
        h1 {color: red;}
    . Para una clase:
        .parrafito { ... }
    .Para un id:
        #pid { ... } 
Lo mismo usaremos en JavaScript!!!
*/


/* Con querySelector ponemos las etiquetas, los ids o las clases */
const h1 = document.querySelector('h1');
/* Con esto solo seleccionamos el primer p que encuentre. Si queremos que afecte a todos los p, usamos querySelectorAll */
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

/* Como consulta, podemos acceder a las etiquetas, ids o clases como se ve aquí. */

/* console.log(document.getElementsByTagName('li')); // Accede al elemento por medio de la etiqueta 'li'.
console.log(document.getElementsByClassName('card')); // Accede al elemento por medio de la clase 'card'.
console.log(document.getElementsByName('nombre')); // Accede a los elementos por medio del atributo 'name' del documento, name se utiliza en los formularios.
console.log(document.getElementById('menu')); // Accede a los elementos por medio del identificador 'menu'.
console.log(document.querySelector('a')); // Accede al elemento por medio de la etiqueta 'a'. Accede solo al primer elemento con etiqueta 'a' del documento.
console.log(document.querySelectorAll('a')); // Accede al elemento por medio de la etiqueta 'a'. Accede a todos los elementos con etiqueta 'a' del documento.
console.log(document.querySelector('.card')); // Accede al elemento por medio de la clase '.card'.
console.log(document.querySelector('#card')); // Accede a los elementos por medio del identificador '#card'.
console.log(document.querySelectorAll('.card')[2]); // Accede al elemento por medio de la clase '.card' y busca al elemento en la posición indicada.
console.log(document.querySelectorAll('.menu li')); // Accede a todos los elementos 'li' que tengan la clase 'menu'. */

h1.innerHTML = 'Patito <br> Feo'; // Aquí modificamos con sintaxis HTML, no es seguro.
h1.innerText = 'Patito <br> Feo'; // Aquí no modificamos con sintaxis HTML, es más seguro.
console.log(h1.getAttribute('class')); // Trae el valor del atributo que se le ingrese.
// h1.setAttribute('class', 'rojo'); // Cambia el valor del atributo 'class' a 'rojo'.
h1.classList.add('rojo'); // Agrega la clase 'rojo' a la variable h1.
h1.classList.remove('verde'); // Quita el valor 'verde' de la clase en h1.


input.value = "456"; // Valor por defecto del input.

console.log(document.createElement('img'));
console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=400');

pid.innerHTML = "";
pid.appendChild(img);
