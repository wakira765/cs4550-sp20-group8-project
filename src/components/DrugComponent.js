import React from "react"
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
                <nav className="drug-header-bar">
                    <button onClick={() => this.props.history.push("/")} className="close-button">
                      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </button>
                    <h2 className="drug-name">{this.props.drugInfo.name}</h2>
                </nav>
                <div className="drug-information-container">
                    {
                        this.props.drugInfo.drugInfo && this.props.drugInfo.drugInfo.map((page, index) => {
                            return <div key={index} className="drug-information">
                                <h3 className="section-title">{page.headline}</h3>
                                <div className="section-information">
                                    <div dangerouslySetInnerHTML={{ __html: page.info }}></div>
                                </div>
                            </div>
                        })
                    }
                </div>
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
            DrugService.findDrugData(drugName)
                .then(infos => dispatch(findDrugDataAction(infos)))
    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(DrugComponent)
