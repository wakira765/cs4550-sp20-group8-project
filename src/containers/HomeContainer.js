import React, { Component } from "react";
import AlertsComponent from "../components/HomePageComponents/AlertsComponent";
import NewsComponent from "../components/HomePageComponents/NewsComponent";
import HomeNavBar from "../components/HomePageComponents/HomeNavBarComponent";
import LandingComponent from "../components/HomePageComponents/LandingComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faEdit, faNewspaper, faExclamationCircle, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { DISPLAY_LANDING_PAGE, DISPLAY_NEWS, WEBAPP_NAME, DISPLAY_ABOUT_US, ABOUT_US_HOME} from "../constants";
import "../styles/Home.css"
import { UncontrolledCollapse } from 'reactstrap';
import { findUserProfile } from "../services/UserService";
class HomeContainer extends Component {
    state = {
        searchTerm: this.props.search ? this.props.search : "",
        user: {
            username: ''
        },
        display: this.props.display
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user.username !== this.state.user.username) {
            this.setState({
                user: this.state.user
            })
        }

        if (prevState.display !== this.state.display) {
            this.setState({
                display: this.state.display
            })
        }
    }


    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    render() {
        const loggedIn = this.state.user.username !== '';
        return (
            <>
                {this.state.display === DISPLAY_LANDING_PAGE && (
                        <LandingComponent {...this.props}></LandingComponent>
                    )}
                {this.state.display === DISPLAY_NEWS && (
                    <>
                        <HomeNavBar {...this.props} user={this.state.user}></HomeNavBar>
                        <div id="home-displayed-content" className="container-fluid">
                            {!loggedIn && (
                                <div id="home-welcome-section" className="flex-row">
                                    <h1 className="home-web-name">
                                        <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>
                                        {WEBAPP_NAME}
                                    </h1>
                                    <p>{ABOUT_US_HOME}</p>
                                </div>
                            )}
                            <div id="home-main-content" className="row">
                                <div id="home-left" className="col-2">
                                </div>
                                <div id="home-center" className="col-7">
                                    <NewsComponent></NewsComponent>
                                </div>
                                <div id="home-right" className="col-3">
                                    <AlertsComponent {...this.props}></AlertsComponent>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </>
        )
    }
}

export default HomeContainer
