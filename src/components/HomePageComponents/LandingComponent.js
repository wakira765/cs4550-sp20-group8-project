import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/landing.css";
class LandingComponent extends Component {
    state = {
        showInfographic: false
    }

    render() {
        return (
            <div className="landing-page-container container-fluid">
                <div className="top-links d-flex row justify-content-between">
                    <div className="p-2 landing-page-link"><a id="to-privacy-policy" href="/privacy">Our Policies on Privacy</a></div>
                    <div className="p-2 landing-page-link"><a id="to-home-page" href="/home/news_feed">Home Page</a></div>
                </div>
                <div className="main-stuff row">
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div id="landing-logo" className="flex-row">
                            <div id="icon">
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} size="5x" color="#138496"></FontAwesomeIcon>
                                <h5 id="slogan">Find What's Right For You.</h5>
                            </div>
                            <div id="buttons" className="btn-group-vertical" role="group">
                                <button type="button" className="btn btn-info" onClick={() => this.props.history.push("/search")}>Start Searching</button>
                                <button type="button" className="btn btn-info" onClick={() => this.props.history.push("/login")}>Log In</button>
                                <button type="button" className="btn btn-info" onClick={() => this.props.history.push("/register")}>Sign Up</button>
                            </div>
                            <div>
                                <h1>Depreceated to fit home page requirements of the project specification.</h1>
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
