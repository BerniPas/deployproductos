import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
//import { useNavigate } from 'react-router-dom';
import "../css/SContacto.css"

// validación front del formulario
const validationSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
});

const Alta = () => (

    
    
    <div className="CMain">
        <div className="Tittle">
            <h1 className="TittleAnimation">Alta de Users</h1>
        </div>
        <Formik
            //const navigate = useNavigate()
            initialValues={{ // valores iniciales del formulario: state inicial
                nombre: '',
                email: '',
                password: '',
            }}
            //validación del formulario solo front
            validationSchema={validationSchema}

            onSubmit={async (values, { resetForm }) => {
                // Aquí puedes manejar el envío del formulario

                try {
                    console.log(values);
                    const response = await axios.post(`${process.env.REACT_APP_API_REGISTER_URL}`, values);
                    Swal.fire({
                        icon: "success",
                        title: "Login exitoso",
                        text: `${response.data.message}`,
                    }).then(() => {
                        //navigate("/home");
                    });
                    resetForm(); 
                    //navigate                                   

                } catch (error) {
                    console.log(`Error al enviar el formulario: ${error}`); // Manejo de errores
                    resetForm();

                }
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="nombre" />
                    {errors.nombre && touched.nombre ? (
                        <div>{errors.nombre}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ?
                        <div>{errors.email}</div> : null}
                    <Field name="password" type="password" />
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Alta