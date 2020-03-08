import React from "react"

import NavBarComponent from "../components/NavBarComponent";
import {connect} from "react-redux";
import DrugService from "../services/DrugService";
import {findDrugsByNameAction} from "../actions/MainActions";

class MainContainer extends React.Component {

    state = {
        searchTerm: ""
    };

    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    };

    render() {
        return (
            <div>
                <NavBarComponent
                    findDrugsByName={this.props.findDrugsByName}
                    handleSearchTermChange={this.handleSearchTermChange}
                    searchTerm={this.state.searchTerm}
                />
                <ul>
                    {
                        this.props.drugs && this.props.drugs.map(drug =>
                            <li>{drug.minConcept.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return ({
        drugs: state.main.drugs
    })
};

const dispatchToPropertyMapper = (dispatch) => {
    return ({
        findDrugsByName: (drugName) =>
            DrugService.findDrugsByName(drugName)
                .then(drugs => dispatch(findDrugsByNameAction(drugs.rxclassDrugInfoList.rxclassDrugInfo)))

    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(MainContainer)