import React, { Component } from "react";
import { findUserProfile } from "../services/UserService"

class ProfileContainer extends Component {

    state = {
        user: this.props.user
    }

    componentDidMount() {
        findUserProfile()
            .then(profile => this.setState({
                user: profile
            }))
    }
    render() {
        console.log(this.state.user)
        return (
            <>
            <h1>{this.state.user.userName}</h1>
            <button onClick={() => this.props.history.push("/")}>Back to Home</button>
            </>
        )
    }
}

export default ProfileContainer;