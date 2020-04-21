import React, { Component } from "react";
import { findUserProfile, findUserByUsername } from "../../services/UserService"
import { UncontrolledCollapse, Button, ButtonGroup } from "reactstrap";
import "../../styles/Profile.css";

class ProfilePublicComponent extends Component {
    state = {
        user: this.props.user,
        profileUser: this.props.profileUser
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user.userName !== this.props.user.userName) {
            this.setState({
                user: this.props.user
            })
        }

        if (prevState.profileUser.userName !== this.props.profileUser.userName) {
            this.setState({
                profileUser: this.props.profileUser
            })
        }
    }

    componentDidMount() {
        findUserProfile()
            .then(user => this.setState({
                user: user
            }))
        findUserByUsername(this.props.match.params.userName)
            .then(profileUser => this.setState({
                profileUser: profileUser
            }))
    }

    render() {
        console.log(this.props.match.params.userName)
        console.log(this.state.profileUser)
        return(
            <div className="private-profile">
                <ButtonGroup className="d-flex flex-row justify-content-between">
                    <Button color="info" id="toggleBasicInfo">Basic Information</Button>
                    <Button color="info" id="togglePhysicalInfo">Physical Information</Button>
                </ButtonGroup>
                <UncontrolledCollapse toggler="#toggleBasicInfo">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name </label>
                            <div className="col-sm-10">
                                <span>{this.state.profileUser.firstName ? this.state.profileUser.firstName : "None"}</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name </label>
                            <div className="col-sm-10">
                                <span>{this.state.profileUser.lastName ? this.state.profileUser.lastName : "None"}</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Birthday</label>
                            <div className="col-sm-10">
                                <span>Private</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <span>Private</span>
                            </div>
                        </div>
                    </form>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#togglePhysicalInfo">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Height </label>
                            <div className="col-sm-10">
                                <span>{this.state.profileUser.height ? this.state.profileUser.height : "None"}</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Gender</label>
                            <div className="col-sm-10">
                                <span>{this.state.profileUser.gender ? this.state.profileUser.gender : "None"}</span>
                            </div>
                        </div>
                    </form>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default ProfilePublicComponent;