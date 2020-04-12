import React, { Component } from "react";
import { connect } from "react-redux";
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

const stateToPropertyMapper = (state) => {
    return ({})
}

const dispatchToPropertyMapper = (dispatch) => {
    return({})
}
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(HomeContainer)