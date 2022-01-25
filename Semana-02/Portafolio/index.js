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



const main = () => 
{
    //se abre un canal de comunicación con una URL y se pueden enviar datos.
    fetch("http://demo9667197.mockable.io/")
        .then(callbackSuccess)
        .then(callbackReadResponse)
        .catch(callbackError);
        //2 posibles resultados: salga bien o error. Debe haber código para responder ambos casos.
}

window.addEventListener("load",main); 