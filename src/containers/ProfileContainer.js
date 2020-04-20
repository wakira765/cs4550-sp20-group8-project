import React, { Component } from "react";
import ProfileNavBarComponent from "../components/ProfileComponents/ProfileNavBarComponent";
import ProfilePrivateComponent from "../components/ProfileComponents/ProfilePrivateComponent";
import ProfilePublicComponent from "../components/ProfileComponents/ProfilePublicComponent";
import { findUserProfile, findUserByUsername } from "../services/UserService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserCircle, faPlus, faUserMd, faUser} from "@fortawesome/free-solid-svg-icons";
import { UncontrolledCollapse, Button, ButtonGroup, Form, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { updateUser } from "../services/UserService";
import { findSubscriptionsByUserId } from "../services/SubscriptionService";
import { findDrugByNdc, findAllDrugsByName } from "../services/DrugService";
import "../styles/Profile.css"
class ProfileContainer extends Component {

    state = {
        user: this.props.user,
        private_view: this.props.user.userName === this.props.match.params.userName
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user.userName !== this.props.user.userName) {
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
        console.log(this.props.match.params.userName);
        return (
            <>
                <ProfileNavBarComponent {...this.props}></ProfileNavBarComponent>
                <div className="container profile">
                    <div className="profile-top">
                        <div className="profile-username-img">
                            <div className="profile-username">
                                <span className="username">
                                    { this.state.private_view ? this.state.user.userName : this.props.match.params.userName}
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
                            <ProfilePrivateComponent {...this.props}></ProfilePrivateComponent>
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