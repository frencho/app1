//JAVASCRIPT

//Es un lenguaje de programación, que es el principalmente utilizado en
//aplicaciones web. Este lenguaje esta orintado a eventos, es decir
//utiliza algun desencadenador para ejecutar una función.

//JavaScritp es un lenguaje flexible, ua que no distingue entre tipos
//de variables a la hora de declara. Este lenguaje hace uso del 
//Document Object Model o Modelo de objetos del codumento, que es una
//Lista de todos lo elementos de la página, aspi como de sus atributos.
//Por medio de este "árbol" de objetos, podemos modificar la interfaz 
//e interactuar con l usuario

//Este árbol de objetos maneja cada elemento en HTML como si fuera un
//objeto, y a sus atributos los manejamos como Métodos

window.addEventListener('load', holaMundo, true);

var nombre

function holaMundo()
{
    //alert('Hola MUndo :D');
    console.log('Hola mundo desde consola');
    mostrarMensaje();
}

function mostrarMensaje()
{
    //VARIABLE LOCAL
    var mensaje = 'ESTE ES UN MENSAJE DE UNA VARIABLE';
    //VARIABLE GLOBAL
    nombre = 'Efrén Pacheco';
    
    console.log('Este es un menssaje nuevo: '+mensaje);
    
}

function maipularDOM()
{
    //ORIENTADO A OBJETOS (segun)
    //OBJETO:METODO = VALOR
    //ELEMNTO.ATRIBUTO = VALOR
    document.getElementById('contenedor').innerHTML="SE BORRO TODO! :(";
    document.getElementById('contenedor').style.background= "blue";
    document.getElementById('contenedor').style.color = "white";
    document.getElementById('contenedor').style.fontFamily = "consolas";
}

function verMenu()
{
    document.getElementById('menu').style.left = "0px";
    document.getElementById('menu').style.transition=".5s all";
}

function cerrarMenu()
{
    document.getElementById('menu').style.left = "-80%";
    document.getElementById('menu').style.transition=".5s all";
}

