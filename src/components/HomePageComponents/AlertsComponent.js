import React, { Component } from "react";
import AlertRow from "./AlertRowComponent.js";
import newsService from "../../services/NewsService";

class AlertsComponent extends Component {
    state = {
        alerts: []
    }

    componentDidMount = async () => {
        const result = await newsService.getLatestRecalls();
        console.log(result);
        this.setState( {
            alerts: result
        })
    }
    render() {
        return (
            <div className="alerts-div">
                <h3>Recall Alerts</h3>
                <table className="table table-hover alerts-table">
                    <thead className="alerts-header">
                        <tr>
                            <th scope="col">Alert</th>
                            <th scope="col">Class</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    {this.state.alerts !== undefined && this.state.alerts.length > 0 && (
                        <tbody>
                            {this.state.alerts.map(alert => (
                                <AlertRow {...this.props} alert={alert['properties']}></AlertRow>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        )
    }
}

export default AlertsComponent