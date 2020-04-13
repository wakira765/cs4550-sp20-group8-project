import React, { Component } from "react";
import AlertsComponent from "../components/HomePageComponents/AlertsComponent";
import NewsComponent from "../components/HomePageComponents/NewsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faUser, faCog, faEdit, faNewspaper, faSearch, faExclamationCircle, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { DISPLAY_ALERTS, DISPLAY_NEWS, WRITING_POST } from "../constants";
import "../styles/Home.css"
import { UncontrolledCollapse , Button, CardBody, Card, UncontrolledButtonDropdown } from 'reactstrap';
class HomeContainer extends Component {
    state = {
        isLoggedIn: false, // not passing from HomeContainer atm
        display_status: DISPLAY_NEWS
    }

    handleAlertButton = () => {
        this.setState( {
            display_status: DISPLAY_ALERTS
        })
    }

    handleWritePostButton = () => {
        this.setState( {
            display_status: WRITING_POST
        })
    }

    handleNewsButton = () => {
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
            <nav className="nav-bar home-nav-bar">
                <div className="home-logo">
                    <FontAwesomeIcon icon={faCapsules} size='3x'></FontAwesomeIcon>
                </div>
                <input id="home-search-bar"
                   className="nav-search-bar"
                   placeholder="Search Here"
                   onChange={(e) => this.handleSearchTermChange(e.target.value)}>
                </input>
                <div id="home-navbar-buttons">
                    <a href="/" class="home-navbar-button profile-button m-2">
                        <span>
                            <FontAwesomeIcon icon={faUser} size='2x'></FontAwesomeIcon>
                        </span>
                    </a>
                    <a href="/" className="home-navbar-button settings-button m-2">
                        <span>
                            <FontAwesomeIcon icon={faCog} size='2x'></FontAwesomeIcon>
                        </span>
                    </a>
                </div>
            </nav>
            <div id="home-displayed-content" className="row">
                <div id="home-left" className="col-3">
                    <div></div>
                </div>
                <div id="home-center" className="col-6">
                    {this.state.display_status === DISPLAY_ALERTS && (<AlertsComponent></AlertsComponent>)}
                    {this.state.display_status === DISPLAY_NEWS && (<NewsComponent></NewsComponent>)}
                    {this.state.display_status === WRITING_POST && (<h1>DISPLAYING THE WRITE POST POPUP</h1>)}
                </div>
                <div id="home-right" className="col-3">
                    <div id="home-buttons-collapsed">
                    <FontAwesomeIcon id="tog" direction="up" icon={faEllipsisV} size="3x"></FontAwesomeIcon>
                    <UncontrolledCollapse toggler="#tog" >
                        <div>
                            <a href="/search" class="home-collapsed-button search-button m-2">
                                <span>
                                    <FontAwesomeIcon icon={faCapsules} size='2x'></FontAwesomeIcon>
                                </span>
                            </a>
                            <a href="#" className="home-collapsed-button write-post-button m-2" onClick={this.handleWritePostButton}>
                                <span>
                                    <FontAwesomeIcon icon={faEdit} size='2x'></FontAwesomeIcon>
                                </span>
                            </a>
                            <a href="#" className="home-collapsed-button news-page-button m-2" onClick={this.handleNewsButton}>
                                <span>
                                    <FontAwesomeIcon icon={faNewspaper} size='2x'></FontAwesomeIcon>
                                </span>
                            </a>
                            <a href="#" className="home-collapsed-button recall-alerts-button m-2" onClick={this.handleAlertButton}>
                                <span>
                                    <FontAwesomeIcon icon={faExclamationCircle} size='2x'></FontAwesomeIcon>
                                </span>
                            </a>
                        </div>
                    </UncontrolledCollapse>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default HomeContainer
