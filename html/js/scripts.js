function holaMundo(){
    alert('Hola Mundo');
}

const h1 = document.getElementsByTagName("h1");
h1[0].addEventListener("click", function(){
    holaMundo();
});

