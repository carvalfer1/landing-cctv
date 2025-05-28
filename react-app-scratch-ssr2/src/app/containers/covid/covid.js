import React, { useEffect } from "react";
import background from "../../../assets/persons.jpg";
import { Button, Col, Card, Steps, Icon } from "antd";
import wanda from "../../../assets/wanda.png";
import carlos from "../../../assets/carlos.png";
import k1t1 from "../../../assets/k1.png";
import k1t2 from "../../../assets/k2.png";
import k1Ta from "../../../assets/K1Ta.png";

import check from "../../../assets/check-square-solid.svg";
import covidPerson from "../../../assets/covidPerson.jpg";

const Step = Steps.Step;

class CovidComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  goTo(url) {
    window.location.replace(url);
  }

  componentDidMount() {
    const obj = {
      background,
      headerTitle: "Debemos aprender a vivir con el COVID",
      text:
        "Trabajemos juntos en el retorno seguro, aquí te presentamos todas las soluciones que pueden ayudar a prevenir los contagios hasta que podamos lograr la inmunidad colectiva",
      headerMobile: "Debemos aprender a vivir con el COVID",
      textMobile:
        "Trabajemos juntos en el retorno seguro, aquí te presentamos todas las soluciones que pueden ayudar a prevenir los contagios hasta que podamos lograr la inmunidad colectiva",
      backgroundMobile: covidPerson,
    };
    this.props.callBackChangeImg(obj);
  }

  render() {
    return (
      <div className="home covid">
        <div id="ini" className="block-1">
          <div>
            <h4>
              Mide temperatura corporal y verifica si la persona porta
              mascarilla
            </h4>
            <h1>Terminal facial</h1>
            <span>
              Es una instalación sencilla y se coloca en las entradas de los
              locales, edificios, restaurantes, centros médicos o de cualquier
              negocio o casa, además, puede ir conectado a una puerta electrica,
              para aperturarla de forma automática en caso de que la persona
              apruebe el test
            </span>
          </div>
          <div>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/BWGp76KBSJ4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Button
            onClick={() => {
              this.goTo("/terminal-facial");
            }}
            className="call-to-action-button call-to-action-button__third-color margin-bottom-60"
            type="primary"
          >
            <Icon type="bulb" /> Mas detalles terminal facial
          </Button>
        </div>
        <div className="block-1">
          <div>
            <h4>
              Mide temeratura de forma simulatánea de al menos 20 personas
            </h4>
            <h1>Cámara termográfica</h1>
            <span>
              Es una super cámara que mide la temperatura de todas personas que
              circulan en un lugar determinado, Es ideal para negocios, bancos,
              oficinas de atención al cliente, edificios, centros médicos,
              restaurantes, cines, centros comerciales y en general para lugares
              donde hay transito de personas. La cámara alerta al conseguir
              alguna persona con temperatura alta.
            </span>
          </div>
          <div>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/7E8Cr_Tmy7k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="block-1">
          <div>
            <h4>Alerta de altas temperaturas</h4>
            <h1>Termómetro rápido</h1>
            <span>
              Es un dispositivo de alta velocidad de medición, permite tomer la
              temperatura de las personas en menos de un segundo, y alerta con
              una alarma cuando detecta alguna tempertura mas alta de lo normal.
              Es una instalación rápida y de bajo costo. Ideal para colocarlo en
              la entrada de las oficinas, empresas, centros médicos,
              restaurantes y negocios.
            </span>
          </div>
          <div>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/tNHWaVu6WAI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="block-3">
          <div>
            <h4>Instalación 100% a la medida.</h4>
            <h3>¿Más información?</h3>
            <a
              className="btn-action-a-container"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=56955302069&text=Hola%20estoy%20interesado%20en%20la%20camara%20que%20mide%20temperatura&source=&data=&app_absent="
            >
              <Button className="call-to-action-button" type="primary">
                Quiero escribir al whatsapp!
              </Button>
            </a>
            <div className="rule"></div>
            <h4 className="pasos-4">¡Son solo 4 pasos!</h4>
            <Steps direction="vertical" current={0}>
              <Step
                title="Ll&aacute;manos"
                description="Sin compromiso, te ayudaremos, y te asesoraremos. Nos alegra mucho poder conversar contigo."
              />
              <Step
                title="Te visitamos"
                description="¡Que honor! Si llegamos a este punto es porque lo dejaste en nuestras manos, no te preocupes, solo tomaremos algunas medidas."
              />
              <Step
                title="Propuestas"
                description="Acá te enviamos varias propuestas y te explicamos cada una de ellas para que elijas la que mas se acerque a lo que quieres."
              />
              <Step
                title="Listo"
                description="Si aceptas, vamos a tu casa y hacemos la instalación."
              />
            </Steps>
          </div>
        </div>
        <div className="block-4">
          <div>
            <h3>¿Por qué nosotros?</h3>
            <div>
              <div className="cont">
                <div>
                  <img src={check} />
                </div>
                <div>Somos de trato ligero.</div>
              </div>
              <div className="cont">
                <div>
                  <img src={check} />
                </div>
                <div>
                  Tienes línea directa con los instaladores todo el tiempo,
                  comunicación cercana.
                </div>
              </div>
              <div className="cont">
                <div>
                  <img src={check} />
                </div>
                <div>
                  Somos una empresa chica, pero con gran corazón, por eso
                  tenemos bajo costo operativo.
                </div>
              </div>
              <div className="cont">
                <div>
                  <img src={check} />
                </div>
                <div>¡Nos gusta lo que hacemos! por eso lo hacemos bien.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="block block-5">
          <div>
            <h3>Conoce al equipo de Bit Seguridad!</h3>
            <h4>Conversa con cualquiera de ellos</h4>
            <div>
              <div>
                <img src={carlos} />
                <span className="biter-name">Carlos Alvarez</span>
                <span className="biter-range">Gerente Comercial</span>
              </div>
              <div>
                <img src={wanda} />
                <span className="biter-name">Wanda Piña</span>
                <span className="biter-range">Gerente Administrativo</span>
              </div>
              <div>
                <img src={wanda} />
                <span className="biter-name">Wanda Piña</span>
                <span className="biter-range">Gerente Administrativo</span>
              </div>
            </div>
          </div>
        </div>
        {/* <covid-section-component/> */}
      </div>
    );
  }
}
export default CovidComponent;
