import React, { useEffect } from "react";
// import background from "../../../assets/persons.jpg";
import background from "../../../assets/terminalfacialbg.png"
import { Button, Col, Card, Steps, Icon } from "antd";
import wanda from "../../../assets/wanda.png";
import carlos from "../../../assets/carlos.png";
import k1t1 from "../../../assets/k1.png";
import k1t2 from "../../../assets/k2.png";
import k1Ta from "../../../assets/K1Ta.png";

import tf from "../../../assets/tf.jpg";

import check from "../../../assets/check-square-solid.svg";
const Step = Steps.Step;

class CovidComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const obj = {
      background,
      headerTitle: "Viviendo con el COVID - Terminal Facial",
      text:
        "Trabajemos juntos en el retorno seguro, el terminal facial es una solución práctica y moderna que puede ayudar a bajar los contagios mientras que podamos lograr la inmunidad colectiva",
      headerMobile: "Viviendo con el COVID - Terminal Facial",
      textMobile:
        "Trabajemos juntos en el retorno seguro, el terminal facial es una solución práctica y moderna que puede ayudar a bajar los contagios mientras que podamos lograr la inmunidad colectiva",
        backgroundMobile:tf
    };
    this.props.callBackChangeImg(obj);
  }

  render() {
    return (
      <div className="home covid">
        <div id="ini" className="block-1">
          <div>
            <h4>Mide temperatura y verifica si la persona porta mascarilla</h4>
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
        </div>

        <div className="block-2">
          <div>
            <h3>¡Beneficios adicionales!</h3>
            <div className="features">
              <div>
                <p>
                  <Icon type="bulb" />
                  Reconocimiento Facial + Temperatura + Detección de Cubrebocas
                </p>

                <p>
                  <Icon type="bulb" />
                  NO abre puerta si no trae cubrebocas o temperatura normal
                  (configurable).
                </p>

                <p>
                  <Icon type="bulb" />
                  Validación a extraños o a usuarios dados de alta
                  (configurable).
                </p>

                <p>
                  <Icon type="bulb" /> Lectura de rostros en .3 seg y
                  Temperatura en 1 segundo hasta a 1.5 mts.
                </p>

                <p>
                  <Icon type="bulb" />
                  Salida de alarma auxiliar para estrobo, sirena, etc (por
                  temperatura alta)
                </p>
              </div>
              <div>
                <p>
                  <Icon type="bulb" /> Reportes en excel con temperaturas y
                  nombres de las personas.
                </p>

                <p>
                  <Icon type="bulb" /> SDK Gratuito para integraciones propias
                </p>

                <p>
                  <Icon type="bulb" /> Funciona como Videoportero IP
                  Multiapartamento (Touch).
                </p>

                <p>
                  <Icon type="bulb" /> Apertura con tarjeta de proximidad MIFARE
                </p>

                <p>
                  <Icon type="bulb" />
                  Relevador para conexión de chapa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block instalation">
          <div>
            <h1>Instalación rápida</h1>
            <div className="precio">
              <h4>Para conocer precios y disponibilidad </h4>
              <h3>puedes llamarnos</h3>
            </div>
            <div>
              <div className="box-instalation">
                <h3>Sin base</h3>
                <img src={k1t1} />
              </div>
              <div className="box-instalation">
                <h3>Con base chica</h3>
                <img src={k1t2} />
              </div>
            </div>
          </div>
        </div>
        <div className="block-3">
          <div>
            <img src={k1Ta} />

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
