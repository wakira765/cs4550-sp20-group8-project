import React, { Component } from "react";
import ProfileNavBarComponent from "../components/ProfileComponents/ProfileNavBarComponent";
import ProfilePrivateComponent from "../components/ProfileComponents/ProfilePrivateComponent";
import ProfilePublicComponent from "../components/ProfileComponents/ProfilePublicComponent";
import { findUserProfile, findUserByUsername } from "../services/UserService";
import { findSubscriptionsByUserId } from "../services/SubscriptionService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faUser} from "@fortawesome/free-solid-svg-icons";
import "../styles/Profile.css"
class ProfileContainer extends Component {

    state = {
        user: this.props.user,
        private_view: this.props.user.userName === this.props.match.params.userName
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            this.setState({
                user: this.props.user
            })
        }
    }

    componentDidMount() {
        findUserProfile()
            .then(profile => this.setState({
                user: profile
            }))
    }

    render() {
        return (
            <>
                <ProfileNavBarComponent {...this.props}></ProfileNavBarComponent>
                <div className="profile-container container profile">
                    <div className="profile-top">
                        <div className="profile-username-img">
                            <div className="profile-username">
                                <span className="username">
                                    {this.state.private_view ? this.state.user.userName : this.props.match.params.userName}
                                </span>
                            </div>
                            <div className="profile-img">
                                {this.state.user.isDoctor ? (
                                    <FontAwesomeIcon icon={faUserMd} size="10x" color="info"></FontAwesomeIcon>
                                ) : (
                                    <FontAwesomeIcon icon={faUser} size="10x" color="info"></FontAwesomeIcon>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="profile-botton">
                        { this.state.private_view ? (
                            <ProfilePrivateComponent
                                {...this.props}
                                subscriptions={findSubscriptionsByUserId(this.state.user.id)}>

                            </ProfilePrivateComponent>
                        ) : (
                            <ProfilePublicComponent {...this.props} profileUser={findUserByUsername(this.props.match.params.userName)}></ProfilePublicComponent>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileContainer;