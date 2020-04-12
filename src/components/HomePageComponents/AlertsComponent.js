import React, { Component } from "react";
import AlertRow from "./AlertRowComponent.js";
import homeServices from "../../services/HomePageService";

class AlertsComponent extends Component {
    state = {
        alerts: []
    }

    componentDidMount = async () => {
        const result = await homeServices.getAlerts();
        this.setState( {
            alerts: result['results']
        })
    }
    render() {
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Alert</th>
                            <th scope="col">Class</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {this.state.alerts !== undefined && this.state.alerts.length > 0 && (
                        <tbody>
                            {this.state.alerts.map(alert => (
                                <AlertRow alert={alert}></AlertRow>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        )
    }
}

export default AlertsComponent