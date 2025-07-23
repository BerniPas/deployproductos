
import "../css/SNosotros.css"
import Tarjetas from "./Tarjetas"

/* Usamos dos hooks, useState y useEffect */
import { useEffect, useState } from "react";


/* es el componente padre, que envía una props a su hijo Tarjetas */
const Personajes = () => {

    const [personaje, setPersonaje] = useState([]);

    /* el useEffect es una  función quee maneja los efectos dentro del componente */
    /* Callback: una llamada previa antes de cargar el componente en el navegador */
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")/* httpRequest: ES5 / ES6 */
        .then(response => response.json())
        .then(response => setPersonaje(response.results))
        .catch(console.error())
    }, [])

    const imprimir = () => {
        console.log(personaje);
        
    }



    return (
        <main class="NMain">
            <div class="Tittle">
                <h1 class="TittleAnimation">Personajes de Ape de Terceros</h1>
            </div>
            <section class="AboutUs">
                <Tarjetas personajes={personaje} />
            </section>
            <button type="button" style={{width: "250px"}} onClick={imprimir}>
                Imprimir Datos
            </button>
        </main>
    )
}

export default Personajes;