import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";

const AlertRowComponent = (alert) => {
    return (
        <tr>
            <td class="alert-class-icon"><FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon></td>
            <td class="alert-class">{alert['alert']['classification']}</td>
            <td class="alert-drug-name">Name</td>
            <td class="alert-location">{alert['alert']['country']}</td>
            <td class="alert-quantity">{alert['alert']['product_quantity']}</td>
            <td class="alert-date">{alert['alert']['report_date']}</td>
            <td class="alert-status">{alert['alert']['status']}</td>
        </tr>
    )
}

export default AlertRowComponent;