function digitOnClick(numero) {
    const input = document.getElementById("txt_numeros");
    if (input.value == "0") 
    {
        input.value = numero;     
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
    } 
}