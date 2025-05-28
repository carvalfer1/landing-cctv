import React, { Component } from "react";
import "./App.scss";
import "antd/dist/antd.css";
import "./design/styles.scss";
import visionAltaImg from "../assets/visionalta.jpeg";
import clienteFeliz2 from "../assets/clientefeliz2.jpg";

import { Button, Col, Card, Steps, Icon } from "antd";

import HeaderApp from "./components/header/header";
import FooterApp from "./components/footer/footer";
import Home from "./containers/home/home";
import CovidComponent from "./containers/covid/covid";
import CustomSolutions from "./containers/customSolutions/customSolutions";
import CommunitySolutions from "./containers/communitySolutions/communitySolutions";
import FacialTerminal from "./containers/covid/facialTerminal";
import Blog from "./containers/blog/blog";

import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { bind } from "file-loader";

const history = createMemoryHistory();
// const { pathname, protocol, host } = window.location;

console.log("NODE_ENV: ", process.env.NODE_ENV);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerInfo: {
        background: visionAltaImg,
        headerTitle: "Sistemas de cámaras de seguridad",
        text: (
          <div className="header-container-text">
            <span>
              Protege tu negicio
            </span>
            <span>
              Visualiza tu negicio por internet
            </span>
            <span>
              Desde teléfonos o computadores
            </span>
            <span>
              Instalaciones robustas y duraderas
            </span>
            <span>
              Alta resolución y equipos profesionales        
            </span>
            <span>
              Garantía por instalación y equipos
            </span>
          </div>
        ),
        headerMobile: "Sistemas de cámaras de seguridad",
        textMobile: (
          <div className="header-container-text">
            <span>
              Protege tu negicio
            </span>
            <span>
              Visualiza tu negicio por internet
            </span>
            <span>
              Desde teléfonos o computadores
            </span>
            <span>
              Instalaciones robustas y duraderas
            </span>
            <span>
              Alta resolución y equipos profesionales        
            </span>
            <span>
              Garantía por instalación y equipos
            </span>
          </div>
        ),
        backgroundMobile: clienteFeliz2,
      },
    };
    this.changeImg = this.changeImg.bind(this);
  }

  changeImg(_headerInfo) {
    this.setState({ headerInfo: _headerInfo });
  }

  render() {
    let pathname = null;
    if (this.props.request) {
      console.log("from server");
      console.log(this.props.request);
      pathname = this.props.request;
    } else {
      pathname = window.location.pathname;
    }

    let comp;

    switch (pathname) {
      case "/covid":
        comp = <CovidComponent callBackChangeImg={this.changeImg} />;
        break;
      case "/sistemas-a-medida":
        comp = <CustomSolutions callBackChangeImg={this.changeImg} />;
        break;
      case "/soluciones-comunitarias":
        comp = <CommunitySolutions callBackChangeImg={this.changeImg} />;
        break;
      case "/terminal-facial":
        comp = <FacialTerminal callBackChangeImg={this.changeImg} />;
        break;
      case "/blog":
        comp = <Blog callBackChangeImg={this.changeImg} />;
        break;
      default:
        comp = <Home />;
        break;
    }

    return (
      <Router history={history}>
        <div className="application">
          <HeaderApp {...this.state.headerInfo}></HeaderApp>
          {comp}
          <FooterApp></FooterApp>
        </div>
      </Router>
    );
  }
}

export default App;
