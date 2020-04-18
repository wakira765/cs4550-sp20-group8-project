import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
import { Collapse, Button, ButtonGroup} from "reactstrap";


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
            <div className="container">
                <div className="d-flex row justify-content-between">
                    <div className="p-2"><a id="to-privacy-policy">Our Policies on Privacy</a></div>
                    <div className="p-2"><a id="to-home-page" href="/home/news_feed">Home Page</a></div>
                </div>
                <div className="row">
                    <div className="d-none d-xl-block col-lg-6">image</div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div id="landing-logo" className="flex-row">
                            <div id="icon">
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} size="5x" color="#5bc0de"></FontAwesomeIcon>
                                <h5 id="slogan">Find What's Right For You.</h5>
                            </div>
                            <div id="buttons">
                            <ButtonGroup vertical size="lg">
                                <Button color="info">Start Searching</Button>
                                <Button color="info">Sign Up</Button>
                            </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="infographic">
                    <div className="d-flex justify-content-center">
                        <a onClick={this.toggleInfographic}>Learn More</a>
                    </div>
                    <div>
                        <Collapse isOpen={this.state.showInfographic}>
                                <div className="row">
                                    <div className="col-6">
                                        <p>first paragraph</p>
                                    </div>
                                    <div className="col-6">
                                        <p>first image</p>
                                    </div>
                                    <div className="col-6">
                                        <p>second paragraph</p>
                                    </div>
                                    <div className="col-6">
                                        <p>second image</p>
                                    </div>
                                    <div className="col-6">
                                        <p>third paragraph</p>
                                    </div>
                                    <div className="col-6">
                                        <p>third image</p>
                                    </div>
                                    <div className="col-6">
                                        <p>fourth paragraph</p>
                                    </div>
                                    <div className="col-6">
                                        <p>fourth image</p>
                                    </div>
                                </div>
                        </Collapse>
                    </div>
                </div>
            </div>

        )
    }
}

export default LandingComponent;