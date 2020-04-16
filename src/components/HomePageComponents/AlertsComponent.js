import React, { Component } from "react";
import AlertRow from "./AlertRowComponent.js";
import newsService from "../../services/NewsService";

class AlertsComponent extends Component {
    state = {
        alerts: []
    }

    componentDidMount = async () => {
        const result = await newsService.getLatestRecalls();
        this.setState( {
            alerts: result['results']
        })
    }
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Alert</th>
                            <th scope="col">Class</th>
                            <th scope="col">Name</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
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