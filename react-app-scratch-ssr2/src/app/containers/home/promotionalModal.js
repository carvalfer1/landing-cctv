import React, { Component } from "react";
import { Modal, Button } from "antd";

class promotionalModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        visible={this.props.display}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <h2 className="secundary-color">¡Trabajemos juntos en el retorno seguro!</h2>
        <p>Queremos que sepas que en <span className="primary-color">BitSeguridad</span> así como estamos contigo en la lucha en contra de la creciente inseguridad, también queremos estar junto a ti en la pandemia del COVID </p>
        <p>Por eso creamos una nueva sección donde podrás ver la tecnología que te ofrecemos para ayudarte a superar ésta crisis y cumplir con las restricciones venideras en función al retorno seguro</p>
        
        <Button className="call-to-action-button" type="primary" onClick={() => this.props.handleOk(this.props.url)}> Conocer soluciones COVID </Button>
      </Modal>
    );
  }
}

export default promotionalModal;
