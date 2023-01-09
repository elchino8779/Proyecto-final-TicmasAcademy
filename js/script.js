//Variables

let boton = document.getElementById("modo-nocturno");
let textoBoton = document.getElementById("on-off");
let cabecera = document.getElementById("cabecera");
let nombre = document.getElementById("nombre");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");
let section7 = document.getElementById("section7");
let separador = document.getElementsByClassName("fa-code");
let botonPresentacion = document.getElementById("boton-presentacion");
let botonInformacionPersonal = document.getElementById("boton-informacion-personal");
let botonEstudios = document.getElementById("boton-estudios");
let botonExperiencia = document.getElementById("boton-experiencia");
let botonCursos = document.getElementById("boton-cursos");
let botonInformacionAdicional = document.getElementById("boton-informacion-adicional");
let botonReferencias = document.getElementById("boton-referencias");
let informacion = document.getElementById("informacion");










//Funciones

function cambiarColor(){
    if(textoBoton.innerText == "off"){
        textoBoton.innerText = "on";
        boton.style.backgroundColor = "rgba(0, 128, 0, 0.499)";
        document.body.style.backgroundColor = "#000000";
        cabecera.style.backgroundColor = "#0000008a";
        nombre.style.color = "#d2d2d2";
        section1.style.backgroundColor = "#2d2a2a";
        section1.style.color = "#d2d2d2";
        section2.style.backgroundColor = "#2d2a2a";
        section2.style.color = "#d2d2d2";
        section3.style.backgroundColor = "#2d2a2a";
        section3.style.color = "#d2d2d2";
        section4.style.backgroundColor = "#2d2a2a";
        section4.style.color = "#d2d2d2";
        section5.style.backgroundColor = "#2d2a2a";
        section5.style.color = "#d2d2d2";
        section6.style.backgroundColor = "#2d2a2a";
        section6.style.color = "#d2d2d2";
        section7.style.backgroundColor = "#2d2a2a";
        section7.style.color = "#d2d2d2";
        informacion.style.color = "#d2d2d2"
        separador[0].style.color = "#d2d2d2";
        separador[1].style.color = "#d2d2d2";
        separador[2].style.color = "#d2d2d2";
        separador[3].style.color = "#d2d2d2";
        separador[4].style.color = "#d2d2d2";
        separador[5].style.color = "#d2d2d2";
    }
    else{
        textoBoton.innerText = "off";
        boton.style.backgroundColor = "rgba(255, 0, 0, 0.517)";
        document.body.style.backgroundColor = "#ECEDF4";
        cabecera.style.backgroundColor = "#ffffffcf";
        nombre.style.color = "#000000";
        section1.style.backgroundColor = "#ffffff";
        section1.style.color = "#000000";
        section2.style.backgroundColor = "#ffffff";
        section2.style.color = "#000000";
        section3.style.backgroundColor = "#ffffff";
        section3.style.color = "#000000";
        section4.style.backgroundColor = "#ffffff";
        section4.style.color = "#000000";
        section5.style.backgroundColor = "#ffffff";
        section5.style.color = "#000000";
        section6.style.backgroundColor = "#ffffff";
        section6.style.color = "#000000";
        section7.style.backgroundColor = "#ffffff";
        section7.style.color = "#000000";
        informacion.style.color = "#000000"
        separador[0].style.color = "#000000";
        separador[1].style.color = "#000000";
        separador[2].style.color = "#000000";
        separador[3].style.color = "#000000";
        separador[4].style.color = "#000000";
        separador[5].style.color = "#000000";
    }
}

boton.addEventListener("click", cambiarColor);

botonPresentacion.addEventListener("click", function(){
    window.open("#presentacion", "_self");
});

botonInformacionPersonal.addEventListener("click", function(){
    window.open("#informacion-personal", "_self");
});

botonEstudios.addEventListener("click", function(){
    window.open("#estudios", "_self");
});

botonExperiencia.addEventListener("click", function(){
    window.open("#experiencia-laboral", "_self");
});

botonCursos.addEventListener("click", function(){
    window.open("#cursos", "_self");
});

botonInformacionAdicional.addEventListener("click", function(){
    window.open("#informacion-adicional", "_self");
});

botonReferencias.addEventListener("click", function(){
    window.open("#referencias", "_self");
});