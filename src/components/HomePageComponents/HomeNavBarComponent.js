import React, { Component } from "react";
import AlertsComponent from "./AlertsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faPortrait, faEdit, faNewspaper, faSearch, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import { DISPLAY_ALERTS, DISPLAY_NEWS, WRITING_POST } from "../../constants";
import "../../styles/homePage.css"
import NewsComponent from "./NewsComponent";


class HomeNavBarComponent extends Component {

    state = {
        isLoggedIn: false, // not passing from HomeContainer atm
        display_status: DISPLAY_NEWS
    }

    handleAlertButton = () => {
        // change route to /home/alerts
        this.setState( {
            display_status: DISPLAY_ALERTS
        })
    }

    handleWritePostButton = () => {
        // change route to /home/alerts
        this.setState( {
            display_status: WRITING_POST
        })
    }

    handleNewsButton = () => {
        // change route to /home/alerts
        this.setState( {
            display_status: DISPLAY_NEWS
        })
    }

    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    render() {
        return (
            <>
            <nav class="nav-bar home-nav-bar">
                <div class="home-logo">
                    <FontAwesomeIcon icon={faCapsules} size='3x'></FontAwesomeIcon>
                </div>
                <input id="home-search-bar"
                   class="nav-search-bar"
                   placeholder="Search Here"
                   onChange={(e) => this.handleSearchTermChange(e.target.value)}>
                </input>
                <div class="home-navbar-buttons">
                    <a href="/" class="home-button search-button m-2">
                        <span>
                            <FontAwesomeIcon icon={faSearch} size='2x'></FontAwesomeIcon>
                        </span>
                    </a>
                    {this.state.isLoggedIn &&
                        <a href="#" class="home-button profile-button m-2">
                            <span>
                                <FontAwesomeIcon icon={faPortrait} size='2x'></FontAwesomeIcon>
                            </span>
                        </a>
                    }
                    <a href="#" class="home-button write-post-button m-2" onClick={this.handleWritePostButton}>
                        <span>
                            <FontAwesomeIcon icon={faEdit} size='2x'></FontAwesomeIcon>
                        </span>
                    </a>

                    <a href="#" class="home-button news-page-button m-2" onClick={this.handleNewsButton}>
                        <span>
                            <FontAwesomeIcon icon={faNewspaper} size='2x'></FontAwesomeIcon>
                        </span>
                    </a>
                    <a href="#" class="home-button recall-alerts-button m-2" onClick={this.handleAlertButton}>
                        <span>
                            <FontAwesomeIcon icon={faExclamationCircle} size='2x'></FontAwesomeIcon>
                        </span>
                    </a>
                </div>
            </nav>
            <div class="home-displayed-content">
                {this.state.display_status === DISPLAY_ALERTS && (<AlertsComponent></AlertsComponent>)}
                {this.state.display_status === DISPLAY_NEWS && (<NewsComponent></NewsComponent>)}
                {this.state.display_status === WRITING_POST && (<h1>DISPLAYING THE WRITE POST POPUP</h1>)}
            </div>
            </>
        )
    }

}

export default HomeNavBarComponent;