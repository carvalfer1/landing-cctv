import React from 'react';
import brandLogo from '../../../assets/bitseguridad.svg';

const FooterApp = () => {
    return <div className="footer-home"> 
    <div className="container-max-size">
      <div className="bit-information">
        <div className="logo"><img alt="Instalacion de camaras" src={brandLogo}/></div>
        <div className="contact-information">
          <div>Contacto: <span className="principal-color">+56 9 5530 2069</span></div>
          <div>Direcci&oacute;n: <span className="principal-color">San Miguel, Santiago, Chile</span></div>
        </div> 
      </div>
      <a style={{display:"none"}} href="./blog"><h3>Acceder al blog</h3></a>
      <div className="copy"><span>Copyrigh 2019 - Bit Seguridad Integraci&oacute;n y tecnolog&iacute;a.</span></div>
    </div>

    </div>;
}

export default FooterApp;
