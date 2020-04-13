import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";

import "../../styles/Alert.css";

class AlertRowComponent extends Component {
    render() {
        const alert = this.props.alert;
        const alert_class = alert['classification']
        var class_attr = "";
        if (alert_class === "Class I") {
            class_attr = "class-one";
        } else if (alert_class === "Class II") {
            class_attr = "class-two";
        } else {
            class_attr = "class-three";
        }
        return (
            <tr>
                <td className={`alert-class-icon ${class_attr}`}><FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon></td>
                <td className="alert-class">{alert_class}</td>
                <td className="alert-drug-name">Name</td>
                <td className="alert-city">{alert['city']}</td>
                <td className="alert-state">{alert['state']}</td>
                <td className="alert-quantity">{alert['product_quantity']}</td>
                <td className="alert-date">{alert['report_date']}</td>
                <td className="alert-status">{alert['status']}</td>
            </tr>
        )
    }

}

export default AlertRowComponent;