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
        const items = [];

        if(this.props.drugInfo.properties) {
            for (let [key, value] of Object.entries(this.props.drugInfo.properties)) {
              let array = [];
              if(key !== "openfda") {
                  array.push(key.split("_").join(" "));
                  array.push(value);
                  items.push(array);
              } else {
                  array.push("Open FDA");
                  let arr = [];
                  for (let [k, v] of Object.entries(value)) {
                      let a = [];
                      a.push(k.split("_").join(" "));
                      a.push(v);
                      arr.push(a);
                  }
                  array.push(arr);
                  items.unshift(array);
              }
            }
            console.log(items[0][1]);
        }

        return (
            <div className="drug-component">
                {this.props.drugInfo.properties && <div className="drug-container">
                    <nav className="drug-header-bar">
                        <button onClick={() => this.props.history.push("/")} className="close-button">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>
                        <h2 className="drug-name">{this.props.drugInfo.properties.openfda.brand_name}</h2>
                    </nav>
                    <div className="drug-information-container">
                        <div className="section">
                            {items && items.map((item, index) => {
                                 return (
                                    <div key={index} className={"item item-" + index}>
                                        {item[0] !== "Open FDA" && <div className="item-container">
                                            <p className="label">{item[0]}</p>
                                            {Array.isArray(item[1]) && item[1].length > 1 && <ul className="list-of-information">
                                                {item[1].length > 1 && item[1].map((value, i) => {
                                                    return (
                                                        <div key={i} className="list-item-container">
                                                            {!value.includes("<table") && <li className="list-item">{value.toString()}</li>}
                                                            {value.includes("<table") && <li className="table" dangerouslySetInnerHTML={{ __html: value }}></li>}
                                                        </div>
                                                    )
                                                })}
                                            </ul>}
                                            {Array.isArray(item[1]) && item[1].length === 1 && item[1].map((value, i) => {
                                                return (
                                                    <div key={i} className="item-information-container">
                                                        {!value.includes("<table") && <p className="item-information">{value.toString()}</p>}
                                                        {value.includes("<table") && <div className="table" dangerouslySetInnerHTML={{ __html: value }}></div>}
                                                    </div>
                                                )
                                            })}
                                            {!Array.isArray(item[1]) && <p className="information">{item[1].toString()}</p>}
                                        </div>}

                                        {item[0] === "Open FDA" && <div className="item-container">
                                            <p className="label">{item[0]}</p>
                                            <ul className="list-of-items">
                                            {item[1].map((it, ind) => {
                                                return (
                                                    <div key={ind} className={"item item" + ind}>
                                                        <li className="label">{it[0]}</li>
                                                        {Array.isArray(it[1]) && it[1].length > 1 && <ul className="list-of-information">
                                                            {it[1].length > 1 && it[1].map((value, i) => {
                                                                return <li key={i} className="list-item">{value.toString()}</li>
                                                            })}
                                                        </ul>}
                                                        {Array.isArray(it[1]) && it[1].length === 1 && it[1].map((value, i) => {
                                                            return <p key={i} className="item-information">{value.toString()}</p>
                                                        })}
                                                        {!Array.isArray(it[1]) && <p className="information">{it[1].toString()}</p>}
                                                    </div>
                                                )
                                            })}
                                            </ul>
                                        </div>}
                                    </div>
                                 )
                            })}
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    console.log(state.drug.drugInfo.properties);
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
