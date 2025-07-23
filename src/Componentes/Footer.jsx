
import logo from "../images/items/ampoule/logocs.png";
import facebook from "../images/Redes/facebook.png";
import instagram from "../images/Redes/instagram.png";
import tictoc from '../images/Redes/tik-tok.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="CLEAN SKIN"/>
                </div>
                <div className="footer-text">
                    <p>© 2021 CLEAN SKIN. All rights reserved.</p>
                </div>
                <div className="Social">
                    <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <img src={tictoc} alt="Instagram"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;