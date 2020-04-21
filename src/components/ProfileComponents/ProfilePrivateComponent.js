import React, { Component } from "react";
import {updateUser, findUserProfile} from "../../services/UserService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { UncontrolledCollapse, Button, ButtonGroup, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { findSubscriptionsByUserId } from "../../services/SubscriptionService";
import "../../styles/Profile.css";

class ProfilePrivateComponent extends Component {
    state = {
        user: this.props.user,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        dob: this.props.user.dob,
        email: this.props.user.email,
        height: this.props.user.height,
        gender: this.props.user.gender,
        conditions: [],
        newCondition: "",
        userSubscriptions: this.props.subscriptions,
        editting: false,
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.user !== this.props.user) {
            this.setState({
                user: this.props.user
            })
        }
        if (prevState.userSubscriptions.hasOwnProperty("status")) {
            findSubscriptionsByUserId(this.state.user.id)
                .then(subscriptions => this.setState({
                    userSubscriptions: subscriptions
                }))
        }

    }

    componentDidMount() {
        findUserProfile()
            .then(profile => this.setState({
                user: profile
            }))
        findSubscriptionsByUserId(this.state.user.id)
            .then(subscriptions => this.setState({
                userSubscriptions: subscriptions
            }))
    }

    handleInputChange = (state) => {
        this.setState(state);
    }

    submitChanges = async () => {
        const updatedUser = {
            id: this.state.user.id,
            userName: this.state.user.isDoctor,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            email: this.state.email,
            height: this.state.height,
            gender: this.state.gender,
            isDoctor: this.state.user.isDoctor,
            medicalID: this.state.medicalID,
            conditions: this.state.conditions
        }
        this.toggleEditting();
        const response = await updateUser(this.state.user.id, updatedUser);
        window.location.reload();

    }

    addNewCondition = () => {
        var addCondition = {
            name: this.state.newCondition
        }
        this.setState({
            conditions: [...this.state.conditions, addCondition],
            newCondition: ""
        })
    }

    toggleEditting = () => {
        this.setState({
            editting: !this.state.editting
        })
    }

    render() {
        return(
            <div className="private-profile">
                <ButtonGroup className="d-flex flex-row justify-content-between">
                    <Button color="info" id="toggleBasicInfo">Basic Information</Button>
                    <Button color="info" id="togglePhysicalInfo">Physical Information</Button>
                    <Button color="info" id="toggleConditions">Conditions</Button>
                    <Button color="info" id="toggleSubscriptions">Subscribtions</Button>
                    <Button color="info">
                        { this.state.editting ? (
                            <span onClick={() => this.submitChanges()}>Submit</span>
                        ) : (
                            <FontAwesomeIcon icon={faEdit} onClick={() => this.toggleEditting()}></FontAwesomeIcon>
                        )}
                    </Button>
                </ButtonGroup>
                <UncontrolledCollapse toggler="#toggleBasicInfo">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name </label>
                            <div className="col-sm-10">
                                { !this.state.editting ? (this.state.user.firstName ? this.state.user.firstName : "None" ) : (
                                    <input type="text" className="form-control"
                                        id="firstName" placeholder="Jane"
                                        value={this.state.firstName}
                                        onChange={(e) => {
                                            const state = {...this.state, firstName: e.target.value};
                                            this.handleInputChange(state);
                                    }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name </label>
                            <div className="col-sm-10">
                                { !this.state.editting ? (this.state.user.lastName ? this.state.user.lastName : "None" ) : (
                                    <input type="text" className="form-control"
                                        id="lastName" placeholder="Doe"
                                        value={this.state.lastName}
                                        onChange={(e) => {
                                            const state = {...this.state, lastName: e.target.value};
                                            this.handleInputChange(state);
                                    }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Birthday</label>
                            <div className="col-sm-10">
                                { !this.state.editting ? (this.state.user.dob ? this.state.user.dob : "None" ) : (
                                    <input type="date" className="form-control"
                                        id="dob" value={this.state.dob}
                                        onChange={(e) => {
                                            const state = {...this.state, dob: e.target.value};
                                            this.handleInputChange(state);
                                    }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                { !this.state.editting ? (this.state.user.email ? this.state.user.email : "None" ) : (
                                    <input type="email" className="form-control"
                                        id="email" value={this.state.email}
                                        onChange={(e) => {
                                            const state = {...this.state, email: e.target.value};
                                            this.handleInputChange(state);
                                    }}
                                    />
                                )}
                            </div>
                        </div>
                    </form>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#togglePhysicalInfo">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Height </label>
                            <div className="col-sm-10">
                                { !this.state.editting ? (this.state.user.height ? this.state.user.height : "None" ) : (
                                    <input type="number" className="form-control"
                                        id="height" value={this.state.height}
                                        onChange={(e) => {
                                            const state = {...this.state, height: e.target.value};
                                            this.handleInputChange(state);
                                    }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Gender</label>
                            <div className="col-sm-10">
                                    {!this.state.editting ? (this.state.user.gender ? this.state.user.gender : "None") : (
                                        <select id="gender" name="genders">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="undefined">Other</option>
                                        </select>
                                    )}
                            </div>
                        </div>
                    </form>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#toggleConditions">
                    <label>Conditions</label>
                    <div className="conditions">
                        {this.state.conditions && this.state.conditions.length > 0 && (this.state.conditions.map(condition => (
                            <span className="row">{condition.name}</span>
                        )))}
                    </div>

                    <InputGroup>
                        <Input type="text" name="condition" id="condition" placeholder="acne"
                                onChange={(e) => {
                                        const state = {...this.state, newCondition: e.target.value};
                                        this.handleInputChange(state);
                                    }}></Input>
                        <InputGroupAddon addonType="append">
                            <Button color="danger" onClick={() => this.addNewCondition()}><span className="condition-add-btn">+</span></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#toggleSubscriptions">
                    <label className="subscribed-label">You are currently subscried to:</label>
                    <ul className="subscription-list">
                        {this.state.userSubscriptions && this.state.userSubscriptions.length > 0 && (
                            this.state.userSubscriptions.map(subscription => (
                                <li id={`${subscription.id}`}>
                                    <a href={`/drugs/${subscription.productNdc}`} className="subscription-link">
                                        {subscription.productNdc}
                                    </a>
                                </li>
                            ))
                        )}
                    </ul>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default ProfilePrivateComponent;