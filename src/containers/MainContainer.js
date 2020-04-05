import React from "react"

import NavBarComponent from "../components/NavBarComponent";
import {connect} from "react-redux";
import DrugService from "../services/DrugService";
import {Link} from "react-router-dom";
import {findDrugsByNameAction, findDrugsByDiseaseAction, getDrugSideEffectsAction} from "../actions/MainActions";

class MainContainer extends React.Component {

    state = {
        searchTerm: "",
//        findByName: false,
//        findByDisease: false,
//        findSideEffects: false
    };

    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    };
//
//
//    findByName = () => {
//        this.setState({
//            findByName: true,
//            findByDisease: false,
//            findSideEffects: false
//        });
//    }
//
//    findByDisease = () => {
//        this.setState({
//            findByName: false,
//            findByDisease: true,
//            findSideEffects: false
//        });
//    }
//
//    findSideEffects = () => {
//        this.setState({
//            findByName: false,
//            findByDisease: false,
//            findSideEffects: true
//        });
//    }

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
                                    <Link to={`/${result}`} className="drug-name-link">{result.properties.openfda.brand_name ? result.properties.openfda.brand_name : "Unknown Brand Name"}</Link>
                                    <p className="drug-description">{result.properties.indications_and_usage}</p>
                                    <Link to={`/${result}`} className="learn-more-link">Learn more</Link>
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
                                    <Link to={`/${result}`} className="drug-name-link">{result.properties.openfda.brand_name}</Link>
                                    <p className="drug-description">{result.properties.indications_and_usage}</p>
                                    <Link to={`/${result}`} className="learn-more-link">Learn more</Link>
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
            DrugService.getDrugSideEffects(drugName)
                .then(sideEffects => {
                    dispatch(getDrugSideEffectsAction(sideEffects));
                })
    })
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(MainContainer)
