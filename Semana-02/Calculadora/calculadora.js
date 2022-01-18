let numeroIngresadoStr = 0; //global

function digitOnClick(numero) {
    const input = document.getElementById("txt_numeros");
    if (input.value == "0" || enOperacion) 
    {
        input.value = numero;     
        enOperacion = false; 
    } else 
    {
        input.value += numero; 
    }
}

function operacionOnClick(tipoOperacion) 
{
    if (tipoOperacion == "C") 
    {
        const input = document.getElementById("txt_numeros");
        input.value = 0;     
    } else if (tipoOperacion == "+") 
    {
        numeroIngresadoStr = input.value; 
        enOperacion = true; 

    } else if (tipoOpereacion == "=") 
    {
        const resultado = parseInt(input.value) + parseInt(numeroIngresadoStr);
        input.value = resultado + "";
    }
}