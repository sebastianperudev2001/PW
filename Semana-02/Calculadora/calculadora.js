let numeroIngresadoStr = 0 // global
let enOperacion = false;

function digitOnClick(event) {
    
    const but = event.target;
    const numero = but.innerText;

    const input = document.getElementById("txt_numeros")
    
    if (input.value == "0" || enOperacion) {
        input.value = numero
        enOperacion = false
    }else {
        //input.value = input.value + numero
        input.value += numero
    }
    
}

//Arrow function 
const operacionOnClick = (event) => {
    const but = event.target;
    const tipoOperacion = but.innerText;

    const input = document.getElementById("txt_numeros")
    if (tipoOperacion == "C") {
        input.value = "0"
    }else if (tipoOperacion == "+") {
        numeroIngresadoStr = input.value
        enOperacion = true;
    }else if (tipoOperacion == "=") {
        const resultado = parseInt(input.value) + parseInt(numeroIngresadoStr)
        input.value = resultado.toString()
    }
}

// Para asignar objetos funciones como variables, no se incluye nombre
const main = function (params) 
    //Registar los eventos click de los botones
{
    document.getElementById("but-9").onclick = digitOnClick; 
    document.getElementById("but-8").onclick = digitOnClick; 
    document.getElementById("but-7").onclick = digitOnClick; 
    document.getElementById("but-6").onclick = digitOnClick; 
    document.getElementById("but-5").onclick = digitOnClick; 
    document.getElementById("but-4").onclick = digitOnClick; 
    document.getElementById("but-3").onclick = digitOnClick; 
    document.getElementById("but-2").onclick = digitOnClick; 
    document.getElementById("but-1").onclick = digitOnClick; 
    document.getElementById("but-0").onclick = digitOnClick; 

    document.getElementById("but-suma").onclick = operacionOnClick; 
    document.getElementById("but-resta").onclick = operacionOnClick; 
    document.getElementById("but-multi").onclick = operacionOnClick; 
    document.getElementById("but-C").onclick = operacionOnClick; 
    document.getElementById("but-igual").onclick = operacionOnClick; 
    document.getElementById("but-dividir").onclick = operacionOnClick; 





}
main()

//La propiedad target nos va mostar una referencia en el objeto html 