

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Tarjetas({personajes}) {
    /* reicibimos los datos del componente padres: Personajes */
    
    return (

        <div className='d-flex flex-wrap'>
            {personajes.map((p) => (
            
            <Card style={{ width: '18rem' }} key={p.id}>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button>Comprar</Button>
                </Card.Body>
            </Card>
    
            ))}
        </div>


    );
}

export default Tarjetas;

/* props.Types{
    title: string;
    user: Number;
} */
