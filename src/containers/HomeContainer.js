import React, { Component } from "react";
import AlertsComponent from "../components/HomePageComponents/AlertsComponent";
import NewsComponent from "../components/HomePageComponents/NewsComponent";
import HomeNavBar from "../components/HomePageComponents/HomeNavBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faEdit, faNewspaper, faExclamationCircle, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { DISPLAY_ALERTS, DISPLAY_NEWS, WRITING_POST, WEBAPP_NAME } from "../constants";
import "../styles/Home.css"
import { UncontrolledCollapse } from 'reactstrap';
import { findUserProfile } from "../services/UserService";
class HomeContainer extends Component {
    state = {
        searchTerm: this.props.search ? this.props.search : "",
        user: null,
        display_status: DISPLAY_NEWS
    }

    componentDidMount() {
        findUserProfile()
            .then(profile => this.setState({
                user: profile
            }))
    }


    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    render() {
        const loggedIn = this.state.user !== null;
        return (
            <>
            <HomeNavBar {...this.props} user={this.state.user}></HomeNavBar>
            <div id="home-displayed-content" className="container-fluid">
                {!loggedIn && (
                    <div id="home-welcome-section" className="flex-row">
                        <h1 className="home-web-name">
                            <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>
                            {WEBAPP_NAME}
                        </h1>
                        <p> About us </p>
                    </div>
                )}
                <div id="home-main-content" className="row">
                    <div id="home-left" className="col-6">
                        <NewsComponent></NewsComponent>
                    </div>
                    <div id="home-right" className="col-6">
                        <div className="row">
                            <div>Space for featured article</div>
                        </div>
                        <AlertsComponent></AlertsComponent>
                    </div>
                </div>

            </div>
            </>
        )
    }
}

export default HomeContainer
