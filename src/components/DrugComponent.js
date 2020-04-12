import React from "react";
import DrugInformationComponent from "./DrugInformationComponent";
import DrugService from "../services/DrugService";
import {connect} from "react-redux";
import {findDrugDataAction} from "../actions/DrugActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class DrugComponent extends React.Component {

    componentDidMount() {
        this.props.findDrugData(this.props.drugName);
    }

    render() {
        return (
            <div className="drug-component">
                {this.props.drugInfo.properties && <div className="drug-container">
                    <nav className="drug-header-bar">
                        <button onClick={() => this.props.history.goBack()} className="close-button">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>
                        <h2 className="drug-name">{this.props.drugInfo.properties.openfda.brand_name}</h2>
                    </nav>
                    <DrugInformationComponent drugInfo={this.props.drugInfo}/>
                </div>}
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return ({
        drugInfo: state.drug.drugInfo
    })
};

const dispatchToPropertyMapper = (dispatch) => {
    return ({
        findDrugData: (drugName) =>
            DrugService.findDrugByNdc(drugName)
                .then(infos => dispatch(findDrugDataAction(infos)))
    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(DrugComponent)
