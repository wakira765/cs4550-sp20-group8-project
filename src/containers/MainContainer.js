import React from "react"

import NavBarComponent from "../components/NavBarComponent";
import {connect} from "react-redux";
import DrugService from "../services/DrugService";
import {Link} from "react-router-dom";
import {findDrugsByNameAction, findDrugsByDiseaseAction, getDrugSideEffectsAction} from "../actions/MainActions";

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
            <div className="react-container">
                <NavBarComponent
                    findDrugsByName={this.props.findDrugsByName}
                    findDrugsByDisease={this.props.findDrugsByDisease}
                    getDrugSideEffects={this.props.getDrugSideEffects}
                    handleSearchTermChange={this.handleSearchTermChange}
                    searchTerm={this.state.searchTerm}
                />
                <div className="search-results-container">
                    {
                        this.props.searchResults && this.props.searchResults.map((result, index) => {
                                return (
                                    <div key={index} className={"search-result"+index}>
                                        <Link to={`/${result}`}>{result}</Link>
                                    </div>
                                )
                        })
                    }
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return ({
        searchResults: state.main.searchResults
    })
};

const dispatchToPropertyMapper = (dispatch) => {
    return ({
        findDrugsByName: (drugName) =>
            DrugService.findDrugsByName(drugName)
                .then(drugs => dispatch(findDrugsByNameAction(drugs))),
        findDrugsByDisease: (diseaseName) =>
            DrugService.findDrugsByDisease(diseaseName)
                .then(drugs => dispatch(findDrugsByDiseaseAction(drugs))),
        getDrugSideEffects: (drugName) =>
            DrugService.getDrugSideEffects(drugName)
                .then(sideEffects => dispatch(getDrugSideEffectsAction(sideEffects)))
    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(MainContainer)
