const Banner = () => 
{
    return (
        <div>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div id="carrusel" className="carousel-inner">
        <img src="https://www.happets.com/blog/wp-content/uploads/2019/12/bichon-maltes-alimentacion-cuidados-y-curiosidades.png" className="figure-img img-fluid rounded" alt="..."/>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
        
    )
}
export default Banner 