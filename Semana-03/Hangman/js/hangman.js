const refranes = 
[
    "AL QUE MADRUGA DIOS LO AYUDA",
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE",
    "DONDE HUBO FUEGO CENIZAS QUEDAN"
]

let refran;
let refranOculto; 
let numeroIntentoErrado = 0;
let enEjecucion = true; 

const elegirRefran = () => 
{
    //tienes que asegurate que sea entero para iterar
    const pos = Math.round (Math.random()*(refranes.length-1)); 
    return refranes[pos]; 
}

const ocultarRefran = (refran) => 
{
    let refranOcultado = ""; 
    for(let caracter of refran) 
    {
        if (caracter!= " ") 
        {
            //Debemos ocultar el caracter
            refranOcultado += "_";      
        } 
        else 
        {
            //no debemos ocultar
            refranOcultado += caracter; 
        }
    }
    return refranOcultado; 
}

const cargarRefran = (refranOculto) => 
{
    const divRefran = document.getElementById("zona_refran"); 
    divRefran.innerText = refranOculto; 
}

const buscarLetraEnRefran = (letra, refran, refranOculto) => 
{
    let nuevoRefranOculto = "";
    for (let i = 0; i<refran.length ; i++)  
    {
        if (refran[i] ==letra) 
        {
            nuevoRefranOculto += letra;     
        }
        else
        {
             nuevoRefranOculto += refranOculto[i]; 
        }
    }
    return nuevoRefranOculto; 
} 

const cargarImagenNueva = (numero) => 
{
    const rutaImagen = `images/Hangman-${numero}.png`; 
    document.getElementById("imagen").setAttribute("src", rutaImagen);
}

const cargarMensajeFin = (gano) => 
{
    if (gano) 
    {
        //Cargar el div verde
        const div = document.getElementById("mensaje_ganador"); 
        div.setAttribute("class", "alert alert-success");
    } 
    else 
    {
        //cargar el div rojo
        const div = document.getElementById("mensaje_perdedor");
        div.setAttribute("class","alert alert-danger")
    }
}

//Funciones de evento, deben tener de entrada event
const letraInputOnKeyPress = (event) => 
{
    if (enEjecucion) {
    const letra = event.key.toUpperCase();
    const nuevoRefranOculto = buscarLetraEnRefran(letra, refran, refranOculto); 

    if (refranOculto == nuevoRefranOculto) 
    {
        //no hay cambios, hay un error del jugador
        numeroIntentoErrado++;
        if (numeroIntentoErrado <7) 
        {
            cargarImagenNueva(numeroIntentoErrado);    
        }
        else 
        {
            //Termino el juego y perdio el jugador 
            enEjecucion = false; 
            cargarMensajeFin(false); 
        }
             
    } 
    else 
    {
        //caso que no ha habido error. Tengo que descubrir si ya descubri todas las letras
        if (nuevoRefranOculto == refran) 
        {
            //gano
            enEjecucion = false; 
            cargarMensajeFin(true);     
        }
    }


    //Esto permite acumular y evitar que se reinicie.
    refranOculto = nuevoRefranOculto; 
    cargarRefran(refranOculto);
    }
}


//La funciona siempre se va a cargar cuando termine de cargarse la pantalla
const main = () => 
{
    //1. MOstrar un refran de forma aleatoria 
    refran = elegirRefran(); 
    //2.Ocultar el refran
    refranOculto = ocultarRefran(refran);
    cargarRefran(refranOculto); 
    //3. Configurar el evento keypress
    document.getElementById("txt_letras_ingresadas").addEventListener("keypress", letraInputOnKeyPress); 
  
}



//Pasamos la función como un objeto, al agregar main() estamos enviando el resultado. NO DEBES HACER ESO
window.addEventListener("load",main);
