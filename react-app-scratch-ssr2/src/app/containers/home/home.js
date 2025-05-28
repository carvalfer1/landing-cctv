import React, { Component } from "react";
import { Button, Col, Card, Steps, Icon } from "antd";
import wanda from "../../../assets/wanda.png";
import carlos from "../../../assets/carlos.png";
import cameras from "../../../assets/camaras.png";
import check from "../../../assets/check-square-solid.svg";
import PromotionalModal from "./promotionalModal";
import atp from "../../../assets/atp.jpeg";
import automatic from "../../../assets/automatic-sa-logotipo.png";
import hesperia from "../../../assets/hesperia.png";
import ghsoprtchile from "../../../assets/ghsoprtchile.jpg";



const Step = Steps.Step;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:true
    }
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleCancel () {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  handleOk (url) {
    window.location.replace(url)
  }
  render() {
    return (
      <div className="home">
        <div className="cameras">
          {" "}
          <img src={cameras} />{" "}
        </div>
        <div id="ini" className="block-1 margin-top-20">
          <div>
            <h4>Ofrecemos servicios de </h4>
            <h1>Instalación de sistemas de c&aacute;maras de seguridad a medida</h1>
            <span>
            Podemos ayudarte <strong>instalando sistemas de c&aacute;maras de seguridad</strong> profesionales en tu negocio o compañía y a la medida de tus necesidades. Instalamos sistemas robustos con garantías de dos (2) años.
            Sistema de cámaras IP, cuartos de servidores, racks, cableado estructurado, tecnología análoga de ultima generación - Ll&aacute;manos a nuestro movil y te atenderemos inmediatamente.

            </span>
          </div>
        </div>
        <div className="block-2">
          <div>
            <h3>¡Beneficios adicionales!</h3>
            <div className="features">
              <div>
                <Icon type="mobile" />
                <h4>Monitoreo Móvil</h4>
                <span>
                  Puedes acceder a las c&aacute;maras de tu casa desde tu
                  telefono y de forma gratuita. Podrás salir de vacaciones sin
                  preocuparte porque la podras ver cuando quieras.
                </span>
              </div>
              <div>
                <Icon type="video-camera" />
                <h4>Video HD en vivo</h4>
                <span>
                  Todos nuestros modelos de <strong>c&aacute;maras cctv</strong>{" "}
                  pueden ofrecer video en vivo en alta definición sin
                  comprometer el rendimiento.
                </span>
              </div>
              <div>
                <Icon type="cloud-o" />
                <h4>A prueba de agua</h4>
                <span>
                  Las <strong>c&aacute;maras cctv</strong> que esten en el
                  exterior tienen incorporada una caracteristica a prueba de
                  agua, esto ayuda a alargar la vida del dispositivo.
                </span>
              </div>
              <div>
                <Icon type="aliwangwang-o" />
                <h4>Antivand&aacute;licas</h4>
                <span>
                  Contamos con <strong>c&aacute;maras cctv</strong>{" "}
                  met&aacute;licas que tienen la llamada propiedad
                  "antivandalicas", son bastante resistente a los golpes.
                </span>
              </div>
              <div>
                <Icon type="save" />
                <h4>Grabaci&oacute;n 24/7</h4>
                <span>
                  Grabaci&oacute;n las 24 horas del d&iacute;a todos los
                  d&iacute;as del año. Puedes acceder a las grabaciones, navegar
                  en ellas y descargarlas.
                </span>
              </div>
              <div>
                <Icon type="bulb" />
                <h4>Visi&oacute;n Nocturna</h4>
                <span>
                  C&aacute;maras equipadas con tecnolog&iacute;a led para
                  funcionar durante la noche, ofrecen una visi&oacute;n clara y
                  en alta definici&oacute; de la imagen.
                </span>
              </div>
            </div>
            <a
            className="btn-action-a-container"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=56955302069&text=Hola%20estoy%20interesado%20en%20la%20camara%20que%20mide%20temperatura&source=&data=&app_absent="
            >
              <Button className="call-to-action-button call-to-action-button__primary-color margin-top-60" type="primary">Quiero escribir al whatsapp!</Button>
            </a>
          </div>
        </div>
        <div style={{display:"none"}} className="block instalation">
          <div>
            <h1>Servicio de instalación de cámaras</h1>
            <div className="precio">
              <h4>Precio desde: </h4>
              <h3>$129.000</h3>
            </div>
            <div>
              <div className="box-instalation">
                <h3>¿Que incluye?</h3>
                <span>Instalación de 4 cámaras.</span>
                <span>Instalación y configuración de DVR.</span>
                <span>Graduación de cámaras.</span>
                <span>Configuración de visualización desde teléfono.</span>
                <span>Tendido de cableado (hasta 16 metros en total).</span>
                <span>Entrenamiento y capacitación al cliente.</span>
                <span>Garantía por 1 año sobre la instalación.</span>
                <span>
                  Limpieza y acondicionamiento del lugar de instalación. (lo
                  dejamos como si no hubieramos estado allí)
                </span>
              </div>
              <div className="box-instalation">
                <h3>¿Qué no incluye?</h3>
                <span>
                  No incluye el suministro de ningún tipo de tuberías ni
                  canaletas ni cajas.
                </span>
                <span>No incluye ningún tipo de equipo, DVR o cámara.</span>
                <span>No incluye disco de almacenamiento o disco duro.</span>
                <span>Cable para conectar las cámaras.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="block instalation">
          <div>
            <h1>Aquí algunos de nuestros clientes</h1>
            
            <div>
              <div className="box-client">
                <img src={atp} />
              </div>
              <div className="box-client">
                <img src={automatic}/>
              </div>
              <div className="box-client">
                <img style={{borderRadius:"5px"}} src={hesperia}/>
              </div>
              <div className="box-client">
                <img style={{borderRadius:"5px"}} src={ghsoprtchile}/>
              </div>
            </div>
          </div>
        </div>

        <div className="block promotion">
          <div>
            <h2>Kits de intalación + equipos</h2>
            <h4>
              Kits de instalación con equipos incluidos, podras descargar el
              presupuesto detallado por cada kit
            </h4>
            <div>
              <div className="box-promotion">
                <h3>Kit 4 cámaras</h3>
                <span>- 4 cámaras HD, antivandalicas, visión nocturna.</span>
                <span>- DVR 4 canales, grabación 24/7</span>
                <span>- Conectores y transformadores</span>
                <span>- 16 metros de cableado</span>
                <span>- Visualización por telefono</span>
                <span>
                  <strong>- Servicio de instalación</strong>
                </span>
                <div>
                  <span>Precio desde: </span>
                  <h3 className="after">$462.500</h3>
                  <h3 className="before">$925.000</h3>
                </div>

                <Button
                  id="4cam"
                  onClick={() =>
                    this.showFile(
                      "https://drive.google.com/file/d/1Q6I_Y91Hib4gMHF1pVvftUp9jTj2l2jG/view?usp=sharing"
                    )
                  }
                >
                  Descargar presupuesto
                </Button>
                <span className="price-discount">-50%</span>
              </div>
              <div className="box-promotion">
                <h3>Kit 6 cámaras</h3>
                <span>- 6 cámaras HD, antivandalicas, visión nocturna.</span>
                <span>- DVR 8 canales, grabación 24/7</span>
                <span>- Conectores y transformadores</span>
                <span>- 24 metros de cableado</span>
                <span>- Visualización por teléfono</span>
                <span>
                  <strong>- Servicio de instalación</strong>
                </span>
                <div>

                <span>Precio desde: </span>
                <h3 className="after">$690.000</h3>
                <h3 className="before">$1.380.000</h3>
                </div>

                <Button
                  id="6cam"
                  onClick={() =>
                    this.showFile(
                      "https://drive.google.com/file/d/1eyVZGw_XMeHTFUVfG8ZSyG9zOxkcXZ3T/view?usp=sharing"
                    )
                  }
                >
                  Descargar presupuesto
                </Button>
                <span className="price-discount">-50%</span>
              </div>
              <div className="box-promotion">
                <h3>Kit 8 cámaras</h3>
                <span>- 8 cámaras HD, antivandalicas, visión nocturna.</span>
                <span>- DVR 8 canales, grabación 24/7</span>
                <span>- Conectores y transformadores</span>
                <span>- 32 metros de cableado</span>
                <span>- Visualización por teléfono</span>
                <span>
                  <strong>- Servicio de instalación</strong>
                </span>
                <div>

                <span>Precio desde: </span>
                <h3 className="after">$950.000</h3>
                <h3 className="before">$1.900.000</h3>
                </div>

                <Button
                  id="8cam"
                  onClick={() =>
                    this.showFile(
                      "https://drive.google.com/file/d/1JpC3xx6849eRXiPBtHpKPJccRFJO5W7e/view?usp=sharing"
                    )
                  }
                >
                  Descargar presupuesto
                </Button>
                <span className="price-discount">-50%</span>
              </div>
              <div className="box-promotion">
                <h3>Kit 16 cámaras</h3>
                <span>- 16 cámaras HD, antivandalicas, visión nocturna.</span>
                <span>- DVR 16 canales, grabación 24/7</span>
                <span>- Conectores y transformadores</span>
                <span>- 80 metros de cableado</span>
                <span>- Visualización por teléfono</span>
                <span>
                  <strong>- Servicio de instalación</strong>
                </span>
                <div>

                <span>Precio desde: </span>
                <h3 className="after">$1.856.000</h3>
                <h3 className="before">$4.640.000</h3>
</div>
                <Button
                  id="16cam"
                  onClick={() =>
                    this.showFile(
                      "https://drive.google.com/file/d/1lN75V9IhtS2qpFZb3UjKw312eJLPfk5z/view?usp=sharing"
                    )
                  }
                >
                  Descargar presupuesto
                </Button>
                <span className="price-discount">-60%</span>
              </div>
            </div>
            <h4 className="valid">
              Promoción descuentos en kits de instalación{" "}
              <strong>válida hasta el 12 de Diciembre de 2020 </strong>
            </h4>
          </div>
        </div>

        <div className="block-3">
          <div>
            <h4>Instalación 100% a la medida.</h4>
            <h3>¿C&oacute;mo empezamos?</h3>

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
                  Si no lo hacemos bien, preferimos no hacerlo
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
        <PromotionalModal 
        url="/covid" 
        display={this.state.showModal}
        handleCancel={this.handleCancel}
        handleOk={this.handleOk}
        />
      </div>
    );
  }
}

export default Home;
