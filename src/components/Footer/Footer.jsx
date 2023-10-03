import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copirate">© 2023</p>
                <ul className="footer__links list">
                    <li>
                        <a href="#" className="link hover">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a href="#" className="link hover">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;