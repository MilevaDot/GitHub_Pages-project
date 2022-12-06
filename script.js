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
console.log(document.getElementsByTagName('li')); // Accede al elemento por medio de la etiqueta 'li'.
console.log(document.getElementsByClassName('card')); // Accede al elemento por medio de la clase 'card'.
console.log(document.getElementsByName('nombre')); // Accede a los elementos por medio del atributo 'name' del documento, name se utiliza en los formularios.
console.log(document.getElementById('menu')); // Accede a los elementos por medio del identificador 'menu'.
console.log(document.querySelector('a')); // Accede al elemento por medio de la etiqueta 'a'. Accede solo al primer elemento con etiqueta 'a' del documento.
console.log(document.querySelectorAll('a')); // Accede al elemento por medio de la etiqueta 'a'. Accede a todos los elementos con etiqueta 'a' del documento.
console.log(document.querySelector('.card')); // Accede al elemento por medio de la clase '.card'.
console.log(document.querySelector('#card')); // Accede a los elementos por medio del identificador '#card'.
console.log(document.querySelectorAll('.card')[2]); // Accede al elemento por medio de la clase '.card' y busca al elemento en la posición indicada.
console.log(document.querySelectorAll('.menu li')); // Accede a todos los elementos 'li' que tengan la clase 'menu'.