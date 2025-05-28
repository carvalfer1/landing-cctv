import React from "react";
import { Col, Icon, Button } from "antd";
import logo from "../../../assets/logosvgnegativo.svg";
import brandLogo from "../../../assets/bitseguridad.svg";
import { scrollToHash } from "../../utils/functions";

const HeaderApp = (props) => {
  return (
    <div>
      <div className="header">
        <div className="header-layer-container">
          <img
            alt="camaras de seguridad"
            className="header-layer-img"
            src={props.background}
          />
        </div>

        <div className="top-container">
          <div>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img alt="instalacion de camaras de seguridad" src={logo}></img>
            </Col>
            <Col className="call-us" xs={24} sm={24} md={12} lg={12} xl={12}>
              <span>
                Ll&aacute;manos: <strong>+56 9 5530 2069</strong>
              </span>
            </Col>
          </div>
        </div>

        <div className="central-title">
          <div>
            <h1>{props.headerTitle}</h1>
            <span>{props.text}</span>
            <div className="icon-down" onClick={() => scrollToHash("ini")}>
              <Icon type="down-circle"></Icon>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="call-us">Llámanos +56 9 5530 2069</div>
        <div
          className="bg-img-header-mobile"
          style={{ backgroundImage: `url(${props.backgroundMobile})` }}
        >
          <div className="mobile-header-bg-text">
            <div className="header-logo-container">
              <img alt="Instalacion camaras de seguridad" src={brandLogo} />
            </div>
            {/* <div className="background-for-text"> */}
            <h1>{props.headerMobile}</h1>
            <span>{props.textMobile}</span>
            {/* </div> */}

            <a
              className="btn-action-a-container"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=56955302069&text=Hola%20estoy%20interesado%20en%20la%20camara%20que%20mide%20temperatura&source=&data=&app_absent="
            >
              <Button
                className="call-to-action-button margin-top-30"
                type="primary"
              >
                Quiero escribir al whatsapp!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
