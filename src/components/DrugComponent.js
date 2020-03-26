import React from "react"
import DrugService from "../services/DrugService";
import {connect} from "react-redux";
import {findDrugDataAction} from "../actions/DrugActions";

class DrugComponent extends React.Component {

    componentDidMount() {
        this.props.findDrugData(this.props.drugName);
    }

    render() {
        return (
            <div className="drug-information-container">
                <div className="list-drug-information">
                    {
                        this.props.drugInfo && this.props.drugInfo.map((page, index) => {
                            return <div key={index}>
                                <h3 className="section-title">{page.headline}</h3>
                                <div className="section-list">
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
