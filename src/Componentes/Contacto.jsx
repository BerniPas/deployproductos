
import "../css/SContacto.css"


const Contacto = () => {
    return (
        <main className="CMain">
            <div className="Tittle">
                <h1 className="TittleAnimation">CONTACT US</h1>
            </div>

            <div className="Contact">
                <form>
                    <div class="ContactForm">
                        <input type="text" id="name" name="name" placeholder="Name" required pattern="[A-Za-z\s]{3,60}" title="Name must have only letters and spaces, and be between 3 and 60 characters long."/>
                    </div>
                    <div class="ContactForm">
                        <input type="email" id="email" name="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please, enter a valid email adress."/>
                    </div>
                    <div class="ContactForm">
                        <input type="tel" id="phone" name="phone" placeholder="Phone number" pattern="[0-9]{10}" title="Please, enter a valid phone number."/>
                    </div>
                    <div class="ContactForm">
                        <textarea id="message" name="message" placeholder="Leave a message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    )
}

export default Contacto;
