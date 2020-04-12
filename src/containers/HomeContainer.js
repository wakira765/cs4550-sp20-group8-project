import React, { Component } from "react";
import HomeNavBarComponent from "../components/HomePageComponents/HomeNavBarComponent"

class HomeContainer extends Component {
    state = {
        isLoggedIn: false, // apperance changes when a user is logged in vs not logged in/anoynymous browser
    }

    handleSearchTermChange = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    render() {
        return (
            <>
                <HomeNavBarComponent isLoggedIn={this.state.isLoggedIn}></HomeNavBarComponent>
            </>
        )
    }
}

export default HomeContainer
