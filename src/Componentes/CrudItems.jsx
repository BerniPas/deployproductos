
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
/* import './css/estilosForm.css' */

/* Creamos un objeto para agregar los estilos del formulario */
const estilosForm = {
    maxWidth: '600px',
    marginTop: '150px',
    marginBottom: '50px',
    padding: '20px',
}


const estilosBoton = {
    margin: '25px',
}

const CrudItems = () => {
    const [items, setItems] = useState([]); // para el GET, lo usamos en el map
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    //const [editId, setEditId] = useState(null); // para el PUT y DELETE

    // Función para obtener los items - GET
    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:9000/items');
            setItems(response.data);
            console.log('Items obtenidos:', response.data);
        } catch (error) {
            console.error('Error al obtener los items:', error);
        }
    };

    // useEffect para cargar los items al montar el componente
    useEffect(() => {
        fetchItems();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        //alert(`Nombre: ${nombre}, Descripción: ${descripcion}`);

        try {

            const response = await axios.post('http://localhost:9000/items', {
                nombre: nombre,
                descripcion: descripcion
            });


            console.log(`Respuesta del servidor: ${response.message}`);

            Swal.fire({
                icon: "success",
                title: "Productos enviados",
                text: `${response.data.message}`,

            })

            //alert('Datos enviados:', enviado);

            setNombre('');
            setDescripcion('');
            fetchItems();

        } catch (error) {
            console.error('Error al enviar los datos:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al enviar los datos!"
            });
        }

    }

    // Función para eliminar un item - DELETE
    const deleteItem = async (id) => {
        //alert(`Eliminando item con ID: ${id}`);
        try {
            const response = await axios.delete(`http://localhost:9000/items/${id}`);
            Swal.fire({
                icon: "success",
                title: "Item eliminado",
                text: `${response.data.message}`,
            });
            fetchItems(); // Volver a cargar los items después de eliminar
        } catch (error) {
            console.error('Error al eliminar el item:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al eliminar el item!"
            });
        }
    }

    //Funcion para editar un item - PUT
    const editItem = async (id) => {

        try {

            const response = await axios.get(`http://localhost:9000/items/${id}`);
            const item = response.data;

            // Asignamos los valores del item a los estados
            setNombre(item.nombre);
            setDescripcion(item.descripcion);

            // Aquí podrías abrir un modal o un formulario para editar el item
            // Por simplicidad, vamos a hacer un alert
            Swal.fire({
                title: 'Editar Item',
                html: `<input type="text" id="nombre" class="swal2-input" value="${item.nombre}">
                        <input type="text" id="descripcion" class="swal2-input" value="${item.descripcion}">`,
                preConfirm: () => {
                    const nombre = document.getElementById('nombre').value;
                    const descripcion = document.getElementById('descripcion').value;
                    return { nombre, descripcion };
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.put(`http://localhost:9000/items/${id}`, {
                        nombre: result.value.nombre,
                        descripcion: result.value.descripcion
                    });
                    Swal.fire('Item actualizado', '', 'success');
                    fetchItems(); // Volver a cargar los items después de editar
                }
            });
            
        } catch (error) {
            console.error('Error al editar el item:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al editar el item!"
            });
            
        }
        
    }


    return (
        <div className='container mt-5'>
            <h2 style={{ textAlign: 'center', marginTop: '100px' }}>CRUD de Items</h2>
            <Form onSubmit={submitHandler} className="mt-4" style={estilosForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar Datos
                </Button>
            </Form>

            <hr />

            <h3>Lista de Items</h3>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.idProductos} className="list-group-item">
                        <h5>{item.nombre}</h5>
                        <p>{item.descripcion}</p>
                        <Button
                            style={estilosBoton}
                            variant="danger"
                            size="lg"
                            onClick={() => deleteItem(item.idProductos)}
                        >
                            Eliminar
                        </Button>
                        <Button
                            style={estilosBoton}
                            variant="warning"
                            size="lg"
                            onClick={() => editItem(item.idProductos)}
                        >
                            Editar
                        </Button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default CrudItems
