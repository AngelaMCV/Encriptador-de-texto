const textoArea = document.querySelector(".texto");
const textoMensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".boton-copiar");
copia.style.display = "none";

/* 
Llaves de encriptación
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function validarTexto(){
    let textoEscrito = document.querySelector(".texto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) { 
        alert("Sólo son permitidas letras minusculas y sin acentos");
        location.reload();
        return true;
    }
}

function botonEncriptar (){
    if(!validarTexto()){
    const textoEncriptado = encriptar(textoArea.value)
    textoMensaje.value = textoEncriptado
    textoArea.value = "";
    textoMensaje.style.backgroundImage = "none";
    copia.style.display = "block"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar (){
    const textoEncriptado = desencriptar(textoArea.value)
    textoMensaje.value = textoEncriptado
    textoArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function botonCopiar (){
    textoMensaje.select();
    navigator.clipboard.writeText(textoMensaje.value);
    textoMensaje.value = "";
    alert("Texto copiado")
}