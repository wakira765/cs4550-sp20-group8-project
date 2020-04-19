import React, { Component } from "react";
import ProfileNavBarComponent from "../components/ProfileComponents/ProfileNavBarComponent";
import { findUserProfile } from "../services/UserService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserCircle, faPlus} from "@fortawesome/free-solid-svg-icons";
import { UncontrolledCollapse, Button, ButtonGroup, Form, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { updateUser } from "../services/UserService";
import { findSubscriptionsByUserId } from "../services/SubscriptionService";
import { findDrugByNdc, findAllDrugsByName } from "../services/DrugService";
import "../styles/Profile.css"
class ProfileContainer extends Component {

    state = {
        user: this.props.user,
        editting: false,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        dob: this.props.user.dob,
        email: this.props.user.email,
        height: this.props.user.height,
        gender: this.props.user.gender,
        conditions: [],
        newCondition: "",
        userSubscriptions: [{id: "43742-0721"}, {id: "50090-3390"}, {id: "50090-3390"}]
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user.username !== this.props.user.username) {
            this.setState({
                user: this.props.user.username
            })
        }
    }

    componentDidMount() {
        findUserProfile()
            .then(profile => this.setState({
                user: profile
            }))
    }

    toggleEditting = () => {
        this.setState({
            editting: !this.state.editting
        })
    }

    handleInputChange = (state) => {
        console.log(this.state.firstName);
        this.setState(state);
    }

    submitChanges = async () => {
        const updatedUser = {
            userName: "akido",
            firstName: "a",
            lastName: "a",
            dob: "2011-04-01",
            email: "a@gmail.com",
            height: 5,
            gender: "female"
        }
        const response = await updateUser(this.props.user.userName, updatedUser);
        console.log(response)
    }

    addNewCondition = () => {
        this.setState({
            conditions: [...this.state.conditions, this.state.newCondition],
            newCondition: ""
        })
        console.log(this.state.conditions);
    }


    render() {
        return (
            <>
                <ProfileNavBarComponent {...this.props}></ProfileNavBarComponent>
                <div className="container profile">
                    <div className="profile-top">
                        <div className="profile-username-img">
                            <div className="profile-username">
                                <span className="username">{this.state.user.userName}</span>
                                <FontAwesomeIcon type="button" size="2x" icon={faEdit} onClick={() => this.toggleEditting()}></FontAwesomeIcon>
                            </div>
                            <div className="profile-img">
                                <FontAwesomeIcon icon={faUserCircle} size="10x" color="info"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    <div className="profile-botton">
                        <div className="private-profile">
                            <ButtonGroup>
                                <Button color="info" id="toggleBasicInfo">Basic Information</Button>
                                <Button color="info" id="togglePhysicalInfo">Physical Information</Button>
                                <Button color="info" id="toggleConditions">Conditions</Button>
                                <Button color="info" id="toggleSubscriptions">Subscribtions</Button>
                                <button onClick={() => this.submitChanges()}>Submit</button>
                            </ButtonGroup>
                            <UncontrolledCollapse toggler="#toggleBasicInfo">
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">First Name </label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"
                                                id="firstName" placeholder="Jane"
                                                onChange={(e) => {
                                                    const state = {...this.state, firstName: e.target.value};
                                                    this.handleInputChange(state);
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Last Name </label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"
                                                id="lastName" placeholder="Doe"
                                                onChange={(e) => {
                                                    const state = {...this.state, lastName: e.target.value};
                                                    this.handleInputChange(state);
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Birthday</label>
                                        <div className="col-sm-10">
                                            <input type="date" className="form-control"
                                                id="dob" placeholder="Doe"
                                                onChange={(e) => {
                                                    const state = {...this.state, dob: e.target.value};
                                                    this.handleInputChange(state);
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Birthday</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control"
                                                id="email" placeholder="jojo@jomail.com"
                                                onChange={(e) => {
                                                    const state = {...this.state, email: e.target.value};
                                                    this.handleInputChange(state);
                                                }}
                                                />
                                        </div>
                                    </div>
                                </form>
                            </UncontrolledCollapse>
                            <UncontrolledCollapse toggler="#togglePhysicalInfo">
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Height </label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control"
                                                id="height" placeholder="cm"
                                                onChange={(e) => {
                                                    const state = {...this.state, height: e.target.value};
                                                    this.handleInputChange(state);
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Gender</label>
                                        <div className="col-sm-10">
                                            <select id="gender" name="genders">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="undefined">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </UncontrolledCollapse>
                            <UncontrolledCollapse toggler="#toggleConditions">
                                <label>Conditions</label>
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
                                <label>You are currently subscried to:</label>
                                <ul className="subscription-list">
                                    {this.state.userSubscriptions && this.state.userSubscriptions.length > 0 && (
                                        this.state.userSubscriptions.map(subscription => (
                                            <li id={`${subscription.id}`}>
                                                <a href={`/drugs/${subscription.id}`} className="subscription-link">
                                                    {subscription.id}
                                                </a>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </UncontrolledCollapse>
                        </div>
                        <div className="public-profile">

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileContainer;