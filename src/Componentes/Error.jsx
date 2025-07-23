
import "../css/SNosotros.css"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
            <div class="container propia">
                <div class="text-center mt-5">
                    <h1>
                        404 - Página no encontrada
                    </h1>
                    <img src="https://transformatio.blog/wp-content/uploads/2022/02/captura-de-pantalla-2022-02-23-a-las-15.23.13.png?w=1108&h=576&crop=1" alt="página de error" />
                    <p>
                        Bienvenido a nuestro chatbot de aprendizaje web, aquí podrás aprender sobre los temas más importantes de la web. 
                    </p>

                    <Link to='/login'>
                        <button>
                            Login al Sitio
                        </button>
                    </Link>

                </div>
            </div>

            
        </>
  )
}

export default Error
