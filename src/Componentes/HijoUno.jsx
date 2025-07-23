

const HijoUno = (props) => {/* props: parametros - objetos que reciben los componentes  */
    return (
        <h1 style={{marginTop: "150px", textAlign: "center"}}>
            { props.saludar } { props.nombre }
        </h1>
    )
}

export default HijoUno


/* OTRA FORMA 
const HijoUno = ({saludar, nombre}) => {/* props: 
parametros - objetos que reciben los componentes  
    return (
        <h1 style={{marginTop: "150px", textAlign: "center"}}>
            { saludar } { nombre }
        </h1>
    )
}

export default HijoUno 

*/