// Es un lenguaje de programacion
// Es del lado del cliente
/*
    function nombre_de_la_funcion(){
        sentencia 1;
        sentencia 2;
        sentencia 3;
    }
*/

// definir la funcion
function holaMundo(){
    alert('Hola Mundo');
}
// llamar a la funcion 
holaMundo();

// variables -> let    (puede cambiar su valor)
// constante -> const  (no puede ser cambiado su valor)
const h1 = document.getElementsByTagName("h1");
h1[0].addEventListener("click", function(){
    holaMundo();
});

