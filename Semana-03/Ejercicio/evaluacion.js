const crearContenidoTabla = () => 
{
    const contenedor = document.createElement('div');
    contenedor.setAttribute('id', "container"); 

    const body = document.firstElementChild.children[1];

    for (let i= 1; i<= 10; i++) 
    {
        let fila = document.createElement("div"); 
        fila.setAttribute("class", "fila");
        for (let j = 1; j <= 10; j++)
        {
            let boton = document.createElement("div");
            boton.setAttribute("class", "boton");
            boton.setAttribute("id", `${i},${j}`) 
            boton.innerText = `${i},${j}`
            fila.appendChild(boton); 
        }
        contenedor.appendChild(fila)
    }
    body.appendChild(contenedor);

}

const onClick = (event) => 
{
    const botonPresionado = event.target; 
    let cadenaNumeros = botonPresionado.innerText;
    cadenaNumeros = cadenaNumeros.split(",");
    const fila = parseInt(cadenaNumeros[0]);    
    const columna = parseInt(cadenaNumeros[1]);
    
    //verificacion de que solo funcione cuando presionamos la clase boton
    if (botonPresionado.className === "boton")
    {
        botonPresionado.setAttribute("class", "boton celda-presionada");
        //verificacion arriba
        if (fila != 1) 
        {
            const botonArriba = document.getElementById(`${fila-1},${columna}`);
            botonArriba.setAttribute("class", "boton celda-presionada");
        }
        
        //verificacion abajo
        if (fila != 10) 
        {
            const botonAbajo = document.getElementById(`${fila+1},${columna}`);
            botonAbajo.setAttribute("class", "boton celda-presionada"); 
        }  
    }
}


const main = function () 
{
    crearContenidoTabla();
    document.getElementById("container").addEventListener("click", onClick); 
}

window.addEventListener("load",main);
