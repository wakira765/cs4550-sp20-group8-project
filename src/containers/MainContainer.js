import React from "react"

import NavBarComponent from "../components/NavBarComponent";
import {connect} from "react-redux";
import DrugService from "../services/DrugService";
import {Link} from "react-router-dom";
import {findDrugsByNameAction, findDrugsByDiseaseAction, getDrugSideEffectsAction} from "../actions/MainActions";

class MainContainer extends React.Component {

    state = {
        searchTerm: "",
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
                {this.props.findByName && <div className="search-results-container search-by-name">
                    {
                        this.props.searchResults && this.props.searchResults.map((result, index) => {
                            return (
                                <div key={index} className={"search-result search-result"+index}>
                                    <Link to={`/${result.properties.openfda.product_ndc[0]}`} className="drug-name-link">{result.properties.openfda.brand_name ? result.properties.openfda.brand_name : "Unknown Brand Name"}</Link>
                                    <p className="drug-description">{result.properties.indications_and_usage[0].toLowerCase().includes("uses") ? result.properties.indications_and_usage[0].slice(4) : result.properties.indications_and_usage[0]}</p>
                                    <Link to={`/${result.properties.openfda.product_ndc[0]}`} className="learn-more-link">Learn more</Link>
                                </div>
                            )
                        })
                    }
                </div>}
                {this.props.findByDisease && <div className="search-results-container search-by-disease">
                    {
                        this.props.searchResults && this.props.searchResults.map((result, index) => {
                            return (
                                <div key={index} className={"search-result search-result"+index}>
                                    <p className="disease-name">{result}</p>
                                    <button onClick={() => this.props.findDrugsByName(result)} className="find-drug-button button-link">Find Drug</button>
                                </div>
                            )
                        })
                    }
                </div>}
                {this.props.findSideEffects && <div className="search-results-container search-side-effects">
                    {
                        this.props.searchResults && this.props.searchResults.map((result, index) => {
                            console.log(result);
                            return (
                                <div key={index} className={"search-result search-result"+index}>
                                    <Link to={`/${result.properties.openfda.product_ndc[0]}`} className="drug-name-link">{result.properties.openfda.brand_name}</Link>
                                    <p className="drug-description">{result.properties.warnings_and_cautions ? result.properties.warnings_and_cautions : result.properties.warnings}</p>
                                    <Link to={`/${result.properties.openfda.product_ndc[0]}`} className="learn-more-link">Learn more</Link>
                                </div>
                            )
                        })
                    }
                </div>}
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    console.log(state);
    return ({
        searchResults: state.main.searchResults,
        findByName: state.main.findByName,
        findByDisease: state.main.findByDisease,
        findSideEffects: state.main.findSideEffects
    })
};

const dispatchToPropertyMapper = (dispatch) => {
    return ({
        findDrugsByName: (drugName) =>
            DrugService.findAllDrugsByName(drugName)
                .then(drugs => {
                    dispatch(findDrugsByNameAction(drugs));
                }),
        findDrugsByDisease: (diseaseName) =>
            DrugService.findAllTreatmentsByDiseaseName(diseaseName)
                .then(drugs => {
                    dispatch(findDrugsByDiseaseAction(drugs));
                }),
        getDrugSideEffects: (drugName) =>
            DrugService.findAllDrugsByName(drugName)
                .then(sideEffects => {
                    dispatch(getDrugSideEffectsAction(sideEffects));
                })
    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(MainContainer)
