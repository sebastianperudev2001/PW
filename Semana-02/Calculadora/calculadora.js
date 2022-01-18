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