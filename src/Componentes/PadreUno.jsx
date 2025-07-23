import "../css/SNosotros.css"
import "../css/Global.css";
import HijoUno from "./HijoUno";

const PadreUno = () => {

    const otracosa = "Paso de Parámetros llamados Props en React"

    return (
        <HijoUno saludar={otracosa} nombre="Pepe" />
    )
}

export default PadreUno
