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
            <div>
                <ul>
                    {
                        this.props.drugInfo && this.props.drugInfo.map((page, index) => {
                            return <li key={index}>
                                <p>{page.headline}</p>
                                <ol>
                                    {
                                        page.info.map((info, index) => {
                                            return <li>
                                                <p>{info}</p>
                                            </li>
                                        })
                                    }
                                </ol>
                            </li>
                        })
                    }
                </ul>
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
