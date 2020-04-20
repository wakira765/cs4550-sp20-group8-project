import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "../../styles/Alert.css";

class AlertRowComponent extends Component {
    state = {
        showAlertModal: false
    }

    toggleModal = () => {
        this.setState({
            showAlertModal: !this.state.showAlertModal
        })
    }

    render() {
        const alert = this.props.alert;
        const alert_class = alert['classification']
        var modal_color = ""
        var class_attr = "";
        var alert_ndc = "";
        if (alert_class === "Class I") {
            class_attr = "class-one";
            modal_color = "success"
        } else if (alert_class === "Class II") {
            class_attr = "class-two";
            modal_color = "warning"
        } else {
            class_attr = "class-three";
            modal_color = "danger"
        }

        if (Object.keys(alert['openfda']).length > 0 && alert['openfda']['product_ndc'].length > 0) {
            alert_ndc = alert['openfda']['product_ndc'][0]
        }
        return (
            <>
            <tr className="alerts-row" onClick={() => this.toggleModal()}>
                <td className={`alert-class-icon ${class_attr}`}><FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon></td>
                <td className="alert-class">{alert_class}</td>
                <td className="alert-brand-name">{alert['openfda']['brand_name'] ? alert['openfda']['brand_name']: "Not Available"}</td>
            </tr>
            {this.state.showAlertModal && (
                <Modal isOpen={this.state.showAlertModal}>
                    <ModalHeader color={modal_color}>Recall Details</ModalHeader>
                    <ModalBody>
                        <div className="alert-details">
                            <p>Location: {alert['city']}, {alert['state']}</p>
                            <p>Recall Date: {alert['recall_initiation_date']}</p>
                            <p>Reason for recall: {alert['reason_for_recall']}</p>
                            <p>Product Description: {alert['product_description']}</p>
                        </div>
                    </ModalBody>
                    <ModalFooter color={modal_color}>
                        { alert_ndc && (
                            <button onClick={() => this.props.history.push(`/drugs/${alert_ndc}`)}>Go to this drug's page</button>
                        )
                        }
                        <button onClick={() => this.toggleModal()}>Close</button>
                    </ModalFooter>
                </Modal>
            )}
            </>
        )
    }

}

export default AlertRowComponent;