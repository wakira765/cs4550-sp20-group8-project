import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
import { Collapse, Button, ButtonGroup} from "reactstrap";
import AboutComponent from "./AboutComponent";


import "../../styles/landing.css";

class LandingComponent extends Component {
    state = {
        showInfographic: false
    }

    toggleInfographic = () => {
        this.setState({
            showInfographic: !this.state.showInfographic
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="top-links d-flex row justify-content-between">
                    <div className="p-2 landing-page-link"><a id="to-privacy-policy" href="/privacy">Our Policies on Privacy</a></div>
                    <div className="p-2 landing-page-link"><a id="to-home-page" href="/home/news_feed">Home Page</a></div>
                </div>
                <div className="row">
                    <div className="d-none d-xl-block col-lg-5">
                        <img id="landing-page-img" src="landing-page-img.jpg"></img>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div id="landing-logo" className="flex-row">
                            <div id="icon">
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} size="5x" color="#5bc0de"></FontAwesomeIcon>
                                <h5 id="slogan">Find What's Right For You.</h5>
                            </div>
                            <div id="buttons" className="btn-group-vertical" role="group">
                                <button type="button" class="btn btn-theme" onClick={() => this.props.history.push("/search")}>Start Searching</button>
                                <button type="button" class="btn btn-theme" onClick={() => this.props.history.push("/register")}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="infographic" className="d-flex justify-content-center">
                    <a className="landing-page-link" id="to-about-page" href="/about">Learn More</a>
                </div>
            </div>

        )
    }
}

export default LandingComponent;