import React from "react"

import NavBarComponent from "../components/NavBarComponent";
import ModalComponent from "../components/ModalComponent";
import DrugInformationComponent from "../components/DrugInformationComponent";
import {connect} from "react-redux";
import DrugService from "../services/DrugService";
import {Link} from "react-router-dom";
import {findDrugsByNameAction, findDrugsByDiseaseAction, getDrugSideEffectsAction} from "../actions/MainActions";

class MainContainer extends React.Component {

    state = {
        searchTerm: this.props.search ? this.props.search : "",
        arrayOfNdc: [],
        arrayOfDrugInfo: [],
        showModal: false
    };

    componentDidMount() {
        if(this.props.searchByName) {
            this.props.findDrugsByName(this.props.search);
        }
        if(this.props.searchByDisease) {
            this.props.findDrugsByDisease(this.props.search);
        }
        if(this.props.searchSideEffects) {
            this.props.getDrugSideEffects(this.props.search);
        }
    }

    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    };

    handleCheckForCompare = (e, ndc) => {
        if(e.target.checked) {
            let updateArr = this.state.arrayOfNdc;
            updateArr.push(ndc);
            this.setState({
                arrayOfNdc: updateArr
            });
        } else {
            let index = this.state.arrayOfNdc.indexOf(ndc);
            this.state.arrayOfNdc.splice(index, 1);
        }
    }

    toggleModal = e => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    compareDrugs = () => {
        if(this.state.arrayOfNdc.length >= 2) {
            this.setState({
                arrayOfDrugInfo: []
            });
            for(let ndc of this.state.arrayOfNdc) {
                DrugService.findDrugByNdc(ndc)
                    .then(response => {
                        this.state.arrayOfDrugInfo.push(response);
                        if(this.state.arrayOfDrugInfo.length === this.state.arrayOfNdc.length) {
                            this.toggleModal();
                        }
                    });
            }
        } else {
            alert("Please choose at least 2 drugs to compare");
        }
    }

    render() {
        return (
            <div className="react-container">
                {this.state.showModal && <ModalComponent className="compare-modal" closeModal={this.toggleModal} title="Compare Title" showModal={this.state.showModal}>
                    {this.state.arrayOfDrugInfo && this.state.arrayOfDrugInfo.map((result, index) => {
                          return (
                              <DrugInformationComponent drugInfo={result}/>
                          )
                    })}
                </ModalComponent>}
                <NavBarComponent
                    handleSearchTermChange={this.handleSearchTermChange}
                    searchTerm={this.state.searchTerm}
                />
                {this.props.findByName && <div className="search-results-container search-by-name">
                    <button onClick={this.compareDrugs} className="compare-drugs-button">Compare Drugs</button>
                    {
                        this.props.searchResults && this.props.searchResults.map((result, index) => {
                            return (
                                <div key={index} className={"search-result search-result"+index}>
                                    <Link to={`/drugs/${result.properties.openfda.product_ndc[0]}`} className="drug-name-link">{result.properties.openfda.brand_name ? result.properties.openfda.brand_name : "Unknown Brand Name"}</Link>
                                    <label htmlFor={"compare-checkbox-" + index} className="compare-checkbox-label">
                                        <input type="checkbox" id={"compare-checkbox-" + index} className="compare-checkbox" name="compare-drug" onClick={(e) => this.handleCheckForCompare(e, result.properties.openfda.product_ndc[0])}/>
                                        Check to compare
                                    </label>
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
                    <button onClick={this.compareDrugs} className="compare-drugs-button">Compare Drugs</button>
                    {
                        this.props.searchResults && this.props.searchResults.map((result, index) => {
                            return (
                                <div key={index} className={"search-result search-result"+index}>
                                    <Link to={`/drugs/${result.properties.openfda.product_ndc[0]}`} className="drug-name-link">{result.properties.openfda.brand_name}</Link>
                                    <label htmlFor={"compare-checkbox-" + index} className="compare-checkbox-label">
                                        <input type="checkbox" id={"compare-checkbox-" + index} className="compare-checkbox" name="compare-drug" onClick={(e) => this.handleCheckForCompare(result.properties.openfda.product_ndc[0])}/>
                                        Check to compare
                                    </label>
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
