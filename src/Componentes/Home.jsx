
/* importamos los estilos */
import "../css/Sindex.css";
import "../css/Global.css";

/* importamos las imágenes */
import uno from "../images/items/ampoule/ToneBCAmpoule.png";
import dos from "../images/items/ampoule/TTReliefAmpule.png";
import tres from "../images/items/cleanser/CentellaAmpFoam.png";
import cuatro from "../images/items/cleanser/TeaBHAFoam.png";
import cinco from "../images/items/solarprotection/HCSunStick.png";
import seis from "../images/items/solarprotection/HCWaterSunSerum.png";

/* funciones */
const comprar = () => {
    alert("Gracias por tu compra");
}

const Home = () => {
    return (
        <main className="IMain">
            <div className="Tittle">
                <h1 className="TittleAnimation">Welcome to CLEAN SKIN</h1>
            </div>
            <section class="Cards">
                <div class="Card">
                    <figure class="Card-image">
                        <img src={uno} alt="Tone Brightening Ampoule"/>
                    </figure>
                    <div class="CardCont">
                        <h2>Tone Brightening Ampoule</h2>
                        <p>$13</p>
                        <button class="btn" onClick={comprar}>Add to cart</button>
                    </div>
                </div>

                <div class="Card">
                    <figure class="Card-image">
                        <img src={dos} alt="Tea-Trica Relief Ampoule"/>
                    </figure>
                    <div class="CardCont">
                        <h2>Tea-Trica Relief Ampoule</h2>
                        <p>$9</p>
                        <button class="btn">Add to cart</button>
                    </div>
                </div>

                <div class="Card">
                    <figure class="Card-image">
                        <img src={tres} alt="Centella Ampoule Foam"/>
                    </figure>
                    <div class="CardCont">
                        <h2>Centella Ampoule Foam</h2>
                        <p>$4</p>
                        <button class="btn">Add to cart</button>
                    </div>
                </div>

                <div class="Card">
                    <figure class="Card-image">
                        <img src={cuatro} alt="Tea-Trica BHA Foam"/>
                    </figure>
                    <div class="CardCont">
                        <h2>Tea-Trica BHA Foam</h2>
                        <p>$10</p>
                        <button class="btn">Add to cart</button>
                    </div>
                </div>

                <div class="Card">
                    <figure class="Card-image">
                        <img src={cinco} alt="Hialu-Cica Silky-Fit Sun Stick"/>
                    </figure>
                    <div class="CardCont">
                        <h2>Hialu-Cica Silky-Fit Sun Stick</h2>
                        <p>$9</p>
                        <button class="btn">Add to cart</button>
                    </div>
                </div>

                <div class="Card">
                    <figure class="Card-image">
                        <img src={seis} alt="Hialu-Cica Water-Fit Sun Serum SPF50+ PA++++"/>
                    </figure>
                    <div class="CardCont">
                        <h2>Hialu-Cica Water-Fit Sun Serum SPF50+ PA++++</h2>
                        <p>$8</p>
                        <button class="btn">Add to cart</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;
