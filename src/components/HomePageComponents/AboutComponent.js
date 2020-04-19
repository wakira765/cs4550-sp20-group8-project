import React, { Component } from "react";
import { WEBAPP_NAME, FIND_WHATS_RIGHT_PARA, GET_INFORMED_PARA, NET_EFFECT_PARA, ITS_PERSONAL_PARA} from "../../constants";
import "../../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faUser, faSearch, faGlobe} from "@fortawesome/free-solid-svg-icons";



class AboutComponent extends Component {

    render() {
        return(
            <>
            <div>
                <h1 id="about-header">What is { WEBAPP_NAME }?</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <FontAwesomeIcon icon={faSearch} size="10x" style={{color: "#5bc0de"}}></FontAwesomeIcon>
                    </div>
                    <div className="col-6">
                        <h2>Get Informed</h2>
                        <p>{GET_INFORMED_PARA}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h2>It's Personal</h2>
                        <p>{ITS_PERSONAL_PARA}</p>
                    </div>
                    <div className="col-6">
                        <FontAwesomeIcon icon={faUser} size="10x" style={{color: "#5bc0de"}}></FontAwesomeIcon>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <FontAwesomeIcon icon={faGlobe} size="10x" style={{color: "#5bc0de"}}></FontAwesomeIcon>
                    </div>
                    <div className="col-6">
                        <h2>The Network Effect</h2>
                        <p>{NET_EFFECT_PARA}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h2>Find What's Right</h2>
                        <p>{FIND_WHATS_RIGHT_PARA}</p>
                    </div>
                    <div className="col-6">
                        <FontAwesomeIcon icon={faCapsules} size="10x" style={{color: "#5bc0de"}}></FontAwesomeIcon>
                    </div>
                </div>
                <a href="/home/news_feed" id="link-to-home">Go home</a>
            </div>
            </>
        )
    }
}


export default AboutComponent;