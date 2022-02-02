const crearDivImagenCarrusel = (urlImagen, esPrimera) => 
{
    const div = document.createElement("div");
    if (esPrimera) 
    {
        div.setAttribute("class", "carousel-item active");   
    }
    else 
    {
        div.setAttribute("class", "carousel-item");   

    }

    const img = document.createElement("img"); 
    img.setAttribute("class","d-block w-100");
    img.setAttribute("src",urlImagen); 

    div.appendChild(img)
    return div; 
    
}


const callbackSuccess = (response) => 
{
    console.log("Se realizó correctamente la petición")
    return response.json();
}

const callbackReadResponse = (data) => 
{
    console.log("termino carga de imagenes")
    const arrIMagenes = data.images;
    let esPrimera = true; 
    for(let url of arrIMagenes) 
    {
        const div = crearDivImagenCarrusel(url, esPrimera)
        document.getElementById("carrusel").appendChild(div); 
        esPrimera = false; 
    }
}

const callbackError = (error) => 
{
    console.log("Hubo un error en la petición");
    console.error(error); 
}


const cargarImagenes = () => 
{
    //se abre un canal de comunicación con una URL y se pueden enviar datos.
    fetch("http://demo9667197.mockable.io/")
        .then(callbackSuccess)
        .then(callbackReadResponse)
        .catch(callbackError);
        //2 posibles resultados: salga bien o error. Debe haber código para responder ambos casos.
}

const cargarProyectos = () => 
{
    fetch("http://demo9667197.mockable.io/proyectos")
        .then( (response) => {
            return response.json()
        })
        .then ( (data) => {
            console.log("termino de cargar proyecto")
            console.log(data)
        })
        .catch(callbackError)
}


//Cuando usamos await, la funcion padre debe tener la palabra clave ASYNC
const cargarDatosAsyncAwait = async () => 
{
    //Es como si actuarán secuencialmente, pero el navegador lo toma como si fuera
    
    const response = await fetch("http://demo9667197.mockable.io/"); //HAGO LA LLAMADA
    const data = await response.json(); //LO VUELVO OBJETO JS 

    console.log("termino carga de imagenes")
    const arrIMagenes = data.images;
    let esPrimera = true; 
    for(let url of arrIMagenes) 
    {
        const div = crearDivImagenCarrusel(url, esPrimera)
        document.getElementById("carrusel").appendChild(div); 
        esPrimera = false; 
    }

    const responseProyecto = await fetch("http://demo9667197.mockable.io/proyectos")
    const dataProyectos = await responseProyecto.json()
    console.log("termino de cargar proyecto")
    console.log(data)



}

const main = () => 
{
    cargarDatosAsyncAwait();
    //Si es una comunicación asíncrona, eso quiere decir que no es lineal
    //Promesa --> Fetch. no devuelve exactamente el control de la ejecución al navegador, devuelve una conexión
}

window.addEventListener("load",main); 


//Es posible poner un fetch dentro de otro fetch para ejecutar datos primeros que otros