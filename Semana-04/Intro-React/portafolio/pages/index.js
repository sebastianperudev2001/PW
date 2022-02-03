import MenuNavegacion from "../components/menu_navegation.component";
import Banner from "../components/banner.component";
import Footer from "../components/footer.component";
import FormularioLogin from "../components/formulario_login.component";
import ListaProyectos from "../components/lista_proyectos.component";

export default function Home() {
  const listadoProyectos = [
    {nombre: "Proyecto 1", usuario: "Hernan", puntaje:4.9},
    {nombre: "Proyecto 2", usuario: "Billy", puntaje:4.3},
    {nombre: "Proyecto 3", usuario: "Jorge", puntaje:4.5},
    {nombre: "Proyecto 4", usuario: "Kory", puntaje:4.4}
  ];
  
  
  return <div>
    <div>
      <header>
        <h1>Mi Portafolio</h1>
      </header>
      <MenuNavegacion />
    </div>
    <div className="mt-4">
        <Banner/>
        <div className ="row mt-4">
            <ListaProyectos proyectos = {listadoProyectos}/>
            <FormularioLogin/>  
        </div>
    </div>
    <Footer/> 
  </div>
}
