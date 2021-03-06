import React, { Component } from "react";
import AlertsComponent from "../components/HomePageComponents/AlertsComponent";
import NewsComponent from "../components/HomePageComponents/NewsComponent";
import HomeNavBar from "../components/HomePageComponents/HomeNavBarComponent";
import LandingComponent from "../components/HomePageComponents/LandingComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules } from "@fortawesome/free-solid-svg-icons";
import { DISPLAY_LANDING_PAGE, DISPLAY_NEWS, WEBAPP_NAME, ABOUT_US_HOME} from "../constants";
import { findUserProfile } from "../services/UserService";
import "../styles/Home.css"

class HomeContainer extends Component {
    state = {
        searchTerm: this.props.search ? this.props.search : "",
        user: this.props.user,
        display: this.props.display
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user){
            this.setState({
                user: this.state.user
            })
        }
        else if (prevProps.hasOwnProperty("user") && prevProps.user !== this.props.user) {
            this.setState({
                user: this.props.user
            })
        }
        if (prevState.display !== this.state.display) {
            this.setState({
                display: this.state.display
            })
        }
    }

    componentDidMount() {
        findUserProfile()
            .then(user => this.setState({
                user : user
            }))
    }


    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    render() {
        const loggedIn = typeof this.state.user !== 'undefined' && this.state.user.hasOwnProperty('userName');
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
                                <div id="home-left" className="col-lg-2 d-none d-xl-block">
                                </div>
                                <div id="home-center" className="col-lg-7 col-md-7">
                                    <NewsComponent></NewsComponent>
                                </div>
                                <div id="home-right" className="col-lg-3 col-md-5">
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
